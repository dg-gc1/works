import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'cascading-failure-automated-ports',
    number: '01',
    title: 'From Cascading Failure to Spatial Response',
    description:
      "A calibrated resilience framework for automated ports, translating cascading failure in coupled cargo, data, and energy systems into spatial intervention protocols.",
    longDescription:
      "The project repositions the fully automated port — specifically Maasvlakte II, Rotterdam — not as a logistics terminal but as a spatial machine enforcing coordination across heterogeneous systems. Through a systematic failure taxonomy, incident archive analysis, and comparative simulation across four failure scenarios, the research develops a spatial response protocol for cascading disruption. The framework translates critical operational thresholds into architectural intervention typologies, proposing spatial calibration strategies that contain and reroute systemic failure. AA ETS5, Diploma Unit 6.",
    type: 'Architecture',
    year: 2026,
    location: 'Maasvlakte II, Rotterdam, Netherlands',
    tags: ['Infrastructure', 'Resilience', 'Systems'],
    categories: ['architecture', 'urban'],
    media: ['https://drive.google.com/file/d/1sOe25jlbNRyoD_dBiW18hcnVnESWpqBh/view?usp=sharing'],
  },
  {
    id: '2',
    slug: 'seeing-night-travel-shanghai',
    number: '02',
    title: 'Seeing Night Travel',
    description:
      "A multi-source urban research project investigating how nighttime street environments influence active travel in Puxi, Shanghai — integrating satellite remote sensing, CycleGAN-generated street views, SVI perceptual analysis, and XGBoost-SHAP modelling to identify key environmental determinants of nocturnal mobility.",
    longDescription:
      "Seeing Night Travel investigates the relationship between nighttime street environments and active travel behaviour in Puxi, Shanghai, through a multi-source analytical framework combining aerial and ground-level data. The study integrates satellite remote-sensing imagery (TIFF) with street-level photographs (JPG) to construct a dual-perspective understanding of urban spatial characteristics and nighttime environmental conditions.\n\nTo overcome the scarcity of nighttime street-view data, a CycleGAN model is trained to translate daytime street-view images into photorealistic nighttime scenes, using a hybrid loss function combining adversarial loss, L1 loss, and L2 loss optimised through a min-max training procedure. The generated imagery undergoes semantic segmentation to extract perceptual urban design features — including sky coverage, vegetation proportion, building exposure, sidewalk visibility, and streetlight distribution — through a Street View Imagery (SVI) perceptual visual investigation framework.\n\nThese visual variables are integrated with built-environment indicators — building density, population density, land-use diversity, transport accessibility, and POI data — and scored against nighttime safety metrics. An XGBoost model, interpreted through SHAP value analysis, identifies the relative contribution of each variable to night-time travel patterns. Results reveal that building density, population density, and land-use diversity are the most critical determinants of nighttime active travel, while destination-specific POI data shows limited explanatory power. The study further proposes an environmental luminance threshold for safer nocturnal mobility, offering data-driven guidance for street design and planning policy.",
    type: 'Urban Research',
    year: 2025,
    location: 'Puxi, Shanghai, China',
    tags: ['Night Travel', 'Machine Learning', 'Street Perception'],
    categories: ['urban'],
    media: ['https://youtu.be/DFP8aQ9LTT0'],
  },
  {
    id: '3',
    slug: 'atlas-urban-villages-guangzhou',
    number: '03',
    title: 'Atlas of Urban Villages and Urban Expansion in Guangzhou',
    description:
      "A spatial atlas mapping the relationship between urban expansion patterns and the distribution, evolution, and transformation of urban villages across three decades of Guangzhou's urbanisation.",
    longDescription:
      "Using time-series land use mapping and overlay analysis, the atlas documents how three distinct urban expansion modes — peripheral, infill, and leapfrog — shaped the formation and redevelopment of Guangzhou's urban villages from 1997 to 2020. Three case studies — Shipai (city core, infill expansion), Gangtou (urban fringe, peripheral expansion), and Dayong (enclave expansion) — illustrate how location within the expansion field produces fundamentally different spatial typologies, economic structures, and governance trajectories. AA Elective: Where We Are.",
    type: 'Urban Research',
    year: 2025,
    location: 'Guangzhou, China',
    tags: ['Urban Village', 'GIS', 'Morphology'],
    categories: ['urban'],
    media: [],
  },
  {
    id: '4',
    slug: 'chicago-bike-sharing-ml-study',
    number: '04',
    title: 'Shared Bicycle Traffic in Chicago: A Multi-Source Machine Learning Study',
    description:
      "A machine learning study predicting cycling flows and bike-return behaviour at Chicago's bike-sharing stations, identifying key spatiotemporal and built-environment determinants through Random Forest modelling and multi-source urban data.",
    longDescription:
      "This study builds a machine learning model based on Chicago bike-sharing data, using inbound flow at bike stations to predict cycling flows and explore which spatiotemporal and urban built-environment characteristics most significantly influence bike-return behaviour. The goal is to provide data-driven support for station optimisation and urban micromobility management. Through Random Forest feature importance analysis and K-means station clustering, the study finds that temporal factors — day of year, hour, and day of week — are the most critical predictors of bike-sharing behaviour, emphasising commuting-related patterns. Spatial factors, notably destination coordinates reflecting urban spatial structures, and proximity to public transit stations (bus and subway), notably increase the likelihood of round-trip cycling, underscoring the bike-sharing system's role in transit integration. POI facilities such as entertainment, healthcare, and shopping showed minimal influence, indicating limited explanatory power of destination-specific services on cycling decisions.",
    type: 'Urban Research',
    year: 2025,
    location: 'Chicago, United States',
    tags: ['Machine Learning', 'Micromobility', 'GIS'],
    categories: ['urban'],
    media: [],
  },
  {
    id: '5',
    slug: 'housing-cooperative-community-guangzhou',
    number: '05',
    title: 'Housing Cooperative Community',
    description:
      "A cooperative retrofit strategy for idle rural homesteads in Guangzhou's urban–rural fringe, proposing phased incremental transformation to bridge institutional land tenure divides.",
    longDescription:
      "Using Gangtou Village, Guangzhou, as a live laboratory, the project converts vacant rural homesteads into a cooperatively managed, affordable housing system. The institutional problem — rural land restrictions versus urban land liquidity — is addressed through a five-stage phased framework: temporary cabins for immediate habitability, an on-site fabrication workshop, modular envelope retrofits, commercial activation to generate cashflow, and gradual stabilisation of permanent tenancies. Architectural moves translate governance into spatial form through alley micro-interfaces and timber–masonry retrofit logics that preserve community structure while enabling sustainable densification. AA Diploma Unit 9.",
    type: 'Architecture',
    year: 2025,
    location: 'Gangtou Village, Guangzhou, China',
    tags: ['Housing', 'Rural', 'Cooperative'],
    categories: ['architecture', 'urban'],
    media: [],
  },
  {
    id: '6',
    slug: 'hidden-automated-port',
    number: '06',
    title: 'The Hidden Automated Port: Hacking The Coupling Machine',
    description:
      "A design project proposing a second infrastructural ecology for Maasvlakte II, using failure as a method to expose and hack the tightly coupled operational logic of the automated smart port.",
    longDescription:
      "Contemporary container smart ports are organised around the continuous synchronisation of cargo movement, data recognition, routing protocols, and energy support. Through automation, real-time computation, and predictive logistics, they seek to eliminate friction, delay, and uncertainty in favour of seamless flow. This project reads the automated port not as a collection of objects, but as a tightly coupled operational field where physical movement, digital identity, software protocols, and energy systems are mutually dependent. It argues that the central problem of automated infrastructure is not failure itself, but the suppression of alternative agencies and temporalities. Using failure as a method, the project analyses incidents across logistics, data, and energy systems to identify moments where alternative operations become visible. It proposes a second infrastructural ecology of mobile agents and spatial apparatuses that create conditions for holding, re-reading, maintaining, rerouting, and buffering — arguing that infrastructure should be measured not only by speed or throughput, but by its capacity to pause, become legible, admit other agencies, and continue differently. AA Diploma Unit 6.",
    type: 'Architecture',
    year: 2026,
    location: 'Maasvlakte II, Rotterdam, Netherlands',
    tags: ['Infrastructure', 'Port', 'Automation'],
    categories: ['architecture', 'urban'],
    media: ['https://youtu.be/CxiRGdFguaU'],
  },
  {
    id: '7',
    slug: 'mercedes-benz-museum-daylight-study',
    number: '07',
    title: 'Mercedes-Benz Museum: Daylight Study',
    description:
      "A parametric environmental analysis and redesign of the double-helix atrium of UN Studio's Mercedes-Benz Museum, developing spatial interventions to redistribute daylight across the circulation system.",
    longDescription:
      "The study conducts a systematic parametric analysis of the Mercedes-Benz Museum's atrium, examining temperature, radiation, and illumination conditions across seasonal and diurnal cycles. Simulation revealed severe daylight imbalance: peripheral spaces suffer glare overexposure while central exhibition areas experience critical underillumination, generating excessive artificial lighting reliance. Through three iterative design strategies — opening creation, curvature adjustment, and geometry tilting — the project proposes a Singular Artefact combining subtle structural modifications to the double-helix form, achieving significantly improved UDI values while preserving the original architectural language. AA ETS4.",
    type: 'Architecture',
    year: 2025,
    location: 'Stuttgart, Germany',
    tags: ['Daylight', 'Environmental', 'Parametric'],
    categories: ['architecture'],
    media: [],
  },
  {
    id: '8',
    slug: 'mixed-use-retrofit-rotten-tail-building',
    number: '08',
    title: 'Mixed-use Retrofit: Rotten-Tail Building',
    description:
      "A split-level retrofit strategy transforming an abandoned unfinished building into a layered mixed-use urban landmark integrating office, commercial, and residential functions.",
    longDescription:
      "Responding to the endemic problem of China's unfinished 'rotten-tail buildings' — structures abandoned mid-construction following real estate collapse — the project proposes a comprehensive transformation through split-level spatial surgery. The core intervention cuts the original square floor slabs and implements a cascading section, breaking away from repetitive flat plans to produce a dynamic spatial sequence across office, commercial, and residential zones. The redeveloped structure is conceived as a new urban gateway, connecting surrounding neighbourhoods and cultural districts while resolving the structural and programmatic legacy of incomplete construction.",
    type: 'Architecture',
    year: 2024,
    location: 'China',
    tags: ['Retrofit', 'Mixed-use', 'Urban Renewal'],
    categories: ['architecture'],
    media: [],
  },
  {
    id: '9',
    slug: 'urban-ecological-park-new-delhi',
    number: '09',
    title: 'Urban Ecological Park, New Delhi',
    description:
      "An ecological restoration proposal for a New Delhi informal settlement, integrating L-system-generated green modules and micro-algae wastewater purification to address air and water contamination.",
    longDescription:
      "Responding to severe environmental pollution in New Delhi's informal settlements — deteriorating air quality and water contamination caused by rapid urban industrial expansion — the project proposes a system of ecological modules generated through L-system technology. The modules introduce greenery, shared public space, and community infrastructure into the densely built settlement fabric. A micro-algae wastewater purification system integrates air purification, water recycling, and wastewater treatment into a self-sustaining ecological loop, significantly improving local sanitation conditions while creating networked green corridors across the settlement.",
    type: 'Landscape Design',
    year: 2024,
    location: 'New Delhi, India',
    tags: ['Ecology', 'Informal Settlement', 'Environmental'],
    categories: ['landscape', 'urban'],
    media: [],
  },
  {
    id: '10',
    slug: 'breathing-vein-lignano-sabbiadoro',
    number: '10',
    title: 'The Breathing Vein — Lungomare, Lignano Sabbiadoro',
    description:
      "A finalist competition entry reimagining the waterfront lungomare of Lignano Sabbiadoro through a system of transformative landscape modules integrating cycling, ecology, public space, and community infrastructure.",
    longDescription:
      "The project proposes a new lungomare for Lignano Sabbiadoro, Italy, through a series of transformative wooden structural prototypes that perform different landscape functions depending on their assembly configuration — bus stops with canopies, cyclist charging points, beach furniture, climbing walls, viewing platforms, and retail and bike rental modules. Conceived as a network of ecological connections between land, water, and community infrastructure, the 'Breathing Vein' threads through the existing urban fabric of the seafront, linking the marina, camping village, and public promenade into a continuous active landscape corridor that fosters spatial harmony among local residents, tourists, and the coastal environment. Competition finalist, 2024.",
    type: 'Landscape Design',
    year: 2024,
    location: 'Lignano Sabbiadoro, Italy',
    tags: ['Landscape', 'Waterfront', 'Competition'],
    categories: ['landscape'],
    media: [],
  },
  {
    id: '11',
    slug: 'coastal-art-gallery',
    number: '11',
    title: 'Coastal Art Gallery',
    description:
      "A competition concept design for a coastal art gallery whose form is derived from wave geometries, integrating the building into a landscape between sea and hillside.",
    longDescription:
      "The design extracts and deforms the formal properties of coastal waves to generate the gallery's primary structure, creating a roof and envelope that reads as a continuation of the landscape rather than an object placed upon it. Sited between the sea to the north and a hillside to the south, the building mediates between two landscapes — the building's profile rises and falls in dialogue with the topography, while its internal organisation follows the directional flow implied by the wave geometry. Developed as a competition concept design, 2024.",
    type: 'Architecture',
    year: 2024,
    location: 'Coastal Site',
    tags: ['Gallery', 'Competition', 'Landscape'],
    categories: ['architecture', 'landscape'],
    media: [],
  },
  {
    id: '12',
    slug: 'construction-material-hub-ipswich',
    number: '12',
    title: 'Construction Material Hub',
    description:
      "A joint fabrication centre for salvaged building materials in Ipswich, proposing circular construction as an alternative to demolition and landfill within a post-industrial regeneration strategy.",
    longDescription:
      "The project develops a system for cataloguing, testing, and reassembling structural elements from six buildings scheduled for demolition in Ipswich, proposing a construction material hub as a new urban typology within the town's regeneration plan. Working within a circular economy framework, the proposal designs a fabrication workshop, long-term storage warehouse, design office, and showroom using reclaimed concrete and steel elements from deconstruction sites. A bespoke 'universal joint' system — developed through structural testing and parametric analysis — enables the assembly of salvaged elements of differing dimensions into a new composite structure, demonstrating the viability of material reuse as a mainstream construction strategy. AA Intermediate Unit 9.",
    type: 'Architecture',
    year: 2023,
    location: 'Ipswich, United Kingdom',
    tags: ['Circular Economy', 'Adaptive Reuse', 'Structures'],
    categories: ['architecture'],
    media: [],
  },
  {
    id: '13',
    slug: 'mainstream-reuse-urban-material-store',
    number: '13',
    title: 'The Mainstream of Reuse: Urban Material Store',
    description:
      "A technical design project developing a circular economy framework for construction material reuse in Ipswich, proposing a systematic deconstruction-to-reassembly pipeline anchored by a custom Universal Joint and a Joint Fabrication Center.",
    longDescription:
      "Responding to the growing construction and demolition waste crisis, the project develops an alternative material supply chain for Ipswich by systematically analysing six buildings scheduled for demolition. Through structural surveys, non-destructive and destructive material testing protocols, and top-down deconstruction methodologies, salvageable concrete and steel elements are catalogued and evaluated for structural reuse. The central technical innovation is a bespoke 'Universal Joint' — a prefabricated, bolted-and-welded connection device capable of joining salvaged structural elements of differing standard section dimensions into a composite load-bearing assembly, validated through Karamba 3D finite element analysis with K-bracing stability. The proposal introduces a Joint Fabrication Center as a new urban typology: a platform for material reconditioning, joint fabrication, skills training, and supply chain management — mainstreaming reused building components as a viable alternative to virgin construction materials. AA Technical Studies 3, Intermediate 9.",
    type: 'Architecture',
    year: 2023,
    location: 'Ipswich, United Kingdom',
    tags: ['Circular Economy', 'Structures', 'Technical Design'],
    categories: ['architecture'],
    media: [],
  },
  {
    id: '14',
    slug: 'cross-border-logistics-community-center',
    number: '14',
    title: 'Cross Border Logistics Community Center',
    description:
      "A hybrid transshipment and residential complex at the US–Mexico border, exploring the spatial politics of goods flow, asylum, and cross-border urbanisation in the El Paso–Juarez metropolitan region.",
    longDescription:
      "Situated at the US–Mexico borderland between El Paso and Juarez, the project proposes a new building typology that bridges two functions: a transshipment centre for cross-border commercial goods and a residential community for asylum seekers. Taking the colonial grid city as both analytical framework and formal language, the scheme critiques the infrastructural logic of the border while offering a spatial counterproposal to the humanitarian conditions it produces. The building connects one of the largest industrial parks in Juarez with the public parks of El Paso, formalising the purification journey of goods as a spatial sequence shared by workers, residents, and asylum seekers. AA Experimental Unit 16.",
    type: 'Architecture',
    year: 2022,
    location: 'El Paso / Juarez, US–Mexico Border',
    tags: ['Border', 'Infrastructure', 'Housing'],
    categories: ['architecture', 'urban'],
    media: [],
  },
  {
    id: '15',
    slug: 'cultural-performance-centre-leicester-square',
    number: '15',
    title: 'Cultural Performance Centre, Leicester Square',
    description:
      "A 24/7 public performance structure at Leicester Square challenging the privatisation of public space through a spiralling ramp that layers busking, open theatre, dining, and community programmes.",
    longDescription:
      "The project proposes the redevelopment of the Huguenot House site at Leicester Square, London, as a continuously active cultural performance centre. Organised as a spiral linear structure composed of two interlocking blocks, the ramp system guides audiences from street level through a programmatic sequence of busking areas, open-air theatre, food courts, and dressing rooms to an elevated public garden. The scheme directly addresses the conflict between council ownership constraints, street performer rights, and the public's need for free, accessible urban space in central London. AA Year 1, Term 3, 2020–2021.",
    type: 'Architecture',
    year: 2021,
    location: 'London, United Kingdom',
    tags: ['Public Space', 'Performance', 'Cultural'],
    categories: ['architecture'],
    media: [],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export const categoryCounts = {
  all: projects.length,
  architecture: projects.filter((p) => p.categories.includes('architecture')).length,
  urban: projects.filter((p) => p.categories.includes('urban')).length,
  landscape: projects.filter((p) => p.categories.includes('landscape')).length,
}
