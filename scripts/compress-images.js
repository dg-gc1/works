const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const TARGET_MB = 20
const TARGET_BYTES = TARGET_MB * 1024 * 1024
const MAX_DIMENSION = 4096
const PROJECTS_DIR = path.join(__dirname, '..', 'public', 'projects')
const IMAGE_EXTS = /\.(jpg|jpeg|png)$/i

function fileSize(fp) {
  return fs.statSync(fp).size
}

async function compress(inputPath) {
  const originalBytes = fileSize(inputPath)
  if (originalBytes <= TARGET_BYTES) return false

  const mb = (originalBytes / 1024 / 1024).toFixed(1)
  const ext = path.extname(inputPath).toLowerCase()
  const isPng = ext === '.png'

  console.log(`  ${path.basename(inputPath)} — ${mb} MB`)

  const meta = await sharp(inputPath, { limitInputPixels: false }).metadata()
  const needsResize = (meta.width || 0) > MAX_DIMENSION || (meta.height || 0) > MAX_DIMENSION

  // Always output as JPEG
  const outputPath = inputPath.replace(/\.(png|jpg|jpeg)$/i, '.jpg')
  const tmpPath = outputPath + '.__tmp.jpg'

  const qualities = [85, 75, 65, 55, 45, 35]

  for (let i = 0; i < qualities.length; i++) {
    const quality = qualities[i]
    let pipe = sharp(inputPath, { limitInputPixels: false })

    if (needsResize) {
      pipe = pipe.resize(MAX_DIMENSION, MAX_DIMENSION, {
        fit: 'inside',
        withoutEnlargement: true,
      })
    }

    await pipe.jpeg({ quality, progressive: true }).toFile(tmpPath)

    const newBytes = fileSize(tmpPath)
    const isLast = i === qualities.length - 1

    if (newBytes <= TARGET_BYTES || isLast) {
      fs.renameSync(tmpPath, outputPath)
      if (isPng && outputPath !== inputPath) fs.unlinkSync(inputPath)
      const newMb = (newBytes / 1024 / 1024).toFixed(1)
      console.log(`  → ${path.basename(outputPath)} — ${newMb} MB (quality ${quality})`)
      return true
    }

    fs.unlinkSync(tmpPath)
  }

  return false
}

async function main() {
  console.log('Scanning public/projects for oversized images (> 20 MB)...\n')

  const folders = fs.readdirSync(PROJECTS_DIR)
  let processed = 0

  for (const folder of folders) {
    const folderPath = path.join(PROJECTS_DIR, folder)
    if (!fs.statSync(folderPath).isDirectory()) continue

    const files = fs.readdirSync(folderPath)
    for (const file of files) {
      if (!IMAGE_EXTS.test(file)) continue
      const filePath = path.join(folderPath, file)
      const mb = fileSize(filePath) / 1024 / 1024
      if (mb > TARGET_MB) {
        console.log(`[${folder}]`)
        const done = await compress(filePath)
        if (done) processed++
      }
    }
  }

  if (processed === 0) {
    console.log('All images are already under 20 MB.')
  } else {
    console.log(`\nDone — ${processed} image(s) compressed.`)
  }
}

main().catch(err => {
  console.error(err.message)
  process.exit(1)
})
