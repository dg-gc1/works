export type Category = 'architecture' | 'urban' | 'landscape'

export type FilterCategory = 'all' | Category

export interface Project {
  id: string
  slug: string
  number: string
  title: string
  description: string
  longDescription?: string
  type: string
  year: number
  location: string
  tags: string[]
  categories: Category[]
  media: string[]
}
