export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  capabilities: string[];
  deliverables: string[];
  impactMetric: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: 'Expos & Trade Shows' | 'Conferences & MICE' | 'Gala & Awards' | 'Music & Cultural' | 'Brand Activations';
  year: string;
  venue: string;
  location: string;
  summary: string;
  description: string;
  highlights: string[];
  image: string;
  featured?: boolean;
  scale?: string;
}

export interface BrandItem {
  id: string;
  name: string;
  tagline: string;
  type: 'Flagship Event' | 'Trade Exhibition' | 'Publication & Media' | 'Cultural Platform';
  established: string;
  frequency: string;
  summary: string;
  fullDescription: string;
  audience: string;
  keyStats: string[];
  websiteUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category:
    | 'Executive Leadership'
    | 'Finance & Operations'
    | 'Commercial & PR'
    | 'Design & Creative'
    | 'Editorial & Media'
    | 'Regional Representation';
  bio: string;
  email: string;
  experience: string;
  specialization: string[];
  image?: string;
}

export const COMPANY_PROFILE = {
  name: 'Highrise Pvt Ltd',
  tradingName: 'Highrise International',
  foundedYear: '2007',
  yearsOfExperience: '18+',
  tagline: 'Architects of Premier International Events, Exhibitions & Brand Stories',
  mission:
    'To deliver memorable, flawless, and commercially impactful events, exhibitions, and brand activations that align seamlessly with our clients’ strategic visions, elevate regional industry benchmarks, and champion South Asian excellence.',
  vision:
    'To be the foremost premier event management, experiential marketing, and MICE powerhouse in South Asia and the Indian Ocean, recognized globally for creative audacity, precision execution, and iconic hospitality platforms.',
  overview:
    'Established in 2007, Highrise Pvt Ltd is the Maldives’ premier event management and marketing powerhouse. Over nearly two decades, Highrise has evolved from a pioneering creative studio into an internationally operating event production and publishing enterprise. With offices in Malé, Republic of Maldives, and Colombo, Sri Lanka, Highrise has conceptualized, produced, and managed landmark property expos, national tourism conventions, regional hospitality award summits across South Asia, and world music showcases across Asian capitals.',
  address: 'CHP #4 Building, 5th Floor, Orchid Magu, Malé, 20183, Republic of Maldives',
  regionalOffice: 'Colombo, Sri Lanka',
  telephone: '+960 330 6606',
  email: 'dosm@highriseint.com',
  website: 'www.highriseint.com',
  stats: [
    { label: 'Years of Excellence', value: '18+' },
    { label: 'Major Productions Executed', value: '250+' },
    { label: 'Exhibition Editions Delivered', value: '45+' },
    { label: 'International Cities Hosted', value: '8' }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'concept-generation',
    number: '01',
    title: 'Concept Generation',
    shortDesc: 'Strategic event ideation, experiential narrative design, and intellectual property formulation crafted from the ground up.',
    fullDesc:
      'Every transformative event begins with an unshakeable central idea. Highrise specializes in crafting original event concepts that capture cultural zeitgeists and fulfill commercial objectives. From inception to blueprint, we formulate unique thematic frameworks, audience journeys, and proprietary event formats tailored to private corporations, governmental bodies, and international trade consortia.',
    image: '/images/service_concept_design_1791537960882.jpg',
    capabilities: [
      'Original Event IP Formulation',
      'Strategic Thematic Architecture',
      'Audience Persona & Journey Mapping',
      'Commercial Viability & Feasibility Studies',
      'Comprehensive Creative Pitch Blueprints'
    ],
    deliverables: [
      'Comprehensive Concept Deck',
      '3D Visual Moodboards',
      'Strategic Timeline & Milestones',
      'Commercial Sponsorship Framework'
    ],
    impactMetric: '100% Bespoke Ideation Tailored to Client ROI'
  },
  {
    id: 'promotional-activities',
    number: '02',
    title: 'Promotional Activities',
    shortDesc: 'High-velocity multi-channel marketing campaigns, media buying, public relations outreach, and digital activation.',
    fullDesc:
      'An exceptional event demands an engaged, qualified audience. Highrise orchestrates synchronized promotional campaigns spanning traditional press, digital performance marketing, regional influencer alliances, and targeted B2B outreach across the Maldives, Sri Lanka, and broader South Asian markets.',
    image: '/images/service_promotional_campaign_1791537980920.jpg',
    capabilities: [
      'Integrated Multi-Channel Campaign Planning',
      'Regional Media Buying & Outdoor Signage',
      'Press Release Syndication & Editorial Placement',
      'Targeted Digital & Social Activation',
      'Key Stakeholder & B2B Delegate Outreach'
    ],
    deliverables: [
      'Omni-Channel Media Schedule',
      'Press Kits & Media Accreditations',
      'Social & Performance Creative Assets',
      'Post-Campaign Analytics & Reach Reports'
    ],
    impactMetric: 'Reaching 2M+ Regional Industry Professionals Annually'
  },
  {
    id: 'creative-developments',
    number: '03',
    title: 'Creative Developments',
    shortDesc: 'End-to-end event branding, spatial 3D architecture, scenic stage engineering, and immersive graphic design.',
    fullDesc:
      'Highrise’s multidisciplinary design studio translates event concepts into tactile, visually arresting physical environments and digital touchpoints. We engineer custom stage architecture, exhibition pavilions, interactive branded booths, physical collateral, and high-resolution motion backdrops that command immediate respect.',
    image: '/images/service_creative_staging_v2_1791537993343.jpg',
    capabilities: [
      'Bespoke Brand Identity & Event Visual Systems',
      '3D Scenic Stage & Podium Architecture',
      'Exhibition Booth & Pavilion Engineering',
      'High-Resolution LED Motion Backdrops & Broadcast Graphics',
      'Editorial Print Collateral & Luxury Catalogues'
    ],
    deliverables: [
      'Full Brand Style Manuals',
      'Structural 3D CAD & Render Packs',
      'Print-Ready Large Format Vector Artwork',
      'Dynamic Motion Graphics & Video Openers'
    ],
    impactMetric: 'Custom Stage Designs Built to International Broadcast Standards'
  },
  {
    id: 'event-management',
    number: '04',
    title: 'Event Management',
    shortDesc: 'Turnkey on-ground production, venue sourcing, schedule coordination, protocol handling, and technical operations.',
    fullDesc:
      'We provide seamless, white-glove event production from day zero through post-event debrief. Our operations team manages vendor contracts, venue logistics, live stage cueing, VIP security protocol, government permits, hospitality, and state-of-the-art audiovisual rigging with zero compromise.',
    image: '/images/service_event_ops_1791538029601.jpg',
    capabilities: [
      'Turnkey On-Site Production & Technical Direction',
      'Rigorous Run-of-Show & Stage Cue Coordination',
      'Venue Procurement, Permitting & Safety Protocols',
      'High-Profile VIP & Diplomatic Protocol Management',
      'Vendor Harmonization (Catering, Security, Transport)'
    ],
    deliverables: [
      'Master Run-of-Show Timelines',
      'Technical AV & Lighting Plot Plans',
      'Health, Safety & Protocol Manifestos',
      'Comprehensive Post-Event Debrief Audits'
    ],
    impactMetric: 'Over 250+ Flawlessly Executed Corporate & National Productions'
  },
  {
    id: 'artist-management',
    number: '05',
    title: 'Artist Management',
    shortDesc: 'Curation, contracting, technical rider fulfillment, and stage direction for premier local and international talent.',
    fullDesc:
      'From traditional Boduberu percussion ensembles to international headlining musicians, keynote orators, and classical ensembles, Highrise handles every aspect of talent procurement and backstage coordination. We ensure artists are professionally cared for while delivering spellbinding performances aligned with your brand message.',
    image: '/images/service_artist_mgmt_1791538044470.jpg',
    capabilities: [
      'Talent Scouting & International Roster Procurement',
      'Legal Contract & Rider Negotiation',
      'Audio Engineering & Soundcheck Oversight',
      'Backstage Green Room & Hospitality Logistics',
      'Bespoke Cultural Performances & Fusion Ensembles'
    ],
    deliverables: [
      'Talent Contract & Rider Agreements',
      'Stage Acoustic Plot & Line-Check Manifests',
      'Artist Travel & Itinerary Directives',
      'Live Performance Stage Cue Sheets'
    ],
    impactMetric: 'Pioneered "Sounds of Maldives" Across 5 Global Metropolises'
  },
  {
    id: 'merchandising',
    number: '06',
    title: 'Merchandising',
    shortDesc: 'Curated corporate gifting, luxury bespoke branded apparel, sustainable promotional items, and attendee kits.',
    fullDesc:
      'Tangible touchpoints leave lasting memories. Highrise manufactures and sources bespoke event merchandise, from handcrafted sustainable executive gifting to custom commemorative medals, premium delegate bags, bespoke apparel, and branded digital peripherals that embody the quality of the occasion.',
    image: '/images/service_merch_luxury_1791538061477.jpg',
    capabilities: [
      'Luxury Executive Gifting & Commemorative Keepsakes',
      'Sustainable & Eco-Conscious Merchandise Procurement',
      'Custom Textile, Uniform & Apparel Production',
      'Packaging Architecture & Unboxing Experiences',
      'On-Demand Assembly & Delegate Distribution Logistics'
    ],
    deliverables: [
      'Material & Prototype Samples',
      'Branded Packaging Assemblies',
      'Quality Control Inspection Sign-offs',
      'Inventory Logistics & Distribution Manifests'
    ],
    impactMetric: '50,000+ Luxury Delegate Kits Assembled & Distributed'
  },
  {
    id: 'mice-special-events',
    number: '07',
    title: 'MICE & Special Events',
    shortDesc: 'High-level Meetings, Incentives, Conferences, and Exhibitions; keynote speaker forums, summits, and gala banquets.',
    fullDesc:
      'Highrise is the gold standard for MICE execution in the Maldives and South Asia. We engineer large-format conventions, international trade congresses, bilateral trade summits, and multi-day corporate retreats that bring together ministers, CEOs, and global trade delegations in world-class settings.',
    image: '/images/service_mice_conclave_1791538101449.jpg',
    capabilities: [
      'International Congress & Multi-Day Summit Production',
      'Bilateral Trade & Investment Forum Management',
      'Corporate Incentive Retreats & Private Island Buyouts',
      'State-of-the-Art Simultaneous Interpretation & Voting Systems',
      'Gala Banquets & Prestigious Award Presentation Galas'
    ],
    deliverables: [
      'Full Delegate Registration & Access Systems',
      'Conference Proceedings & Speaker Portals',
      'Bilingual Signage & Simultaneous Translation Systems',
      'Executive Gala Seating & Protocol Layouts'
    ],
    impactMetric: 'Host to 40+ National & Regional Industry Associations'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'sata-awards-gala',
    title: 'South Asian Travel Awards (SATA Gala)',
    client: 'South Asian Hospitality & Tourism Consortia / Highrise IP',
    category: 'Gala & Awards',
    year: '2016 – 2026',
    venue: 'Colombo, Sri Lanka · Bengaluru, India · Galle · Malé',
    location: 'South Asia Regional Circuit',
    scale: '800+ Regional Leaders · 6 Participating Nations',
    image: '/images/portfolio_sata_stage_1791518782525.jpg',
    featured: true,
    summary:
      'The premier recognition platform celebrating hospitality excellence across South Asia, featuring ministers, luxury hoteliers, and international delegates.',
    description:
      'Conceptualized and owned by Highrise Pvt Ltd since 2016, the South Asian Travel Awards (SATA) is endorsed by multinational tourism bodies across the Maldives, Sri Lanka, India, Nepal, Bhutan, and Bangladesh. Highrise engineers the entire multi-day spectacle: rigorous evaluation panels, nominee showcases, high-level networking forums, and a black-tie gala banquet broadcast live across regional media networks.',
    highlights: [
      'Over 1,000 regional properties nominated per edition',
      'Endorsed by 15+ national hospitality associations across South Asia',
      'Broadcast and covered across 30+ regional television and print outlets',
      'Seamless execution across Sri Lanka, India, and the Maldives'
    ]
  },
  {
    id: 'maldives-living-expo',
    title: 'Maldives Living Expo',
    client: 'Highrise IP / Premier Real Estate & Lifestyle Partners',
    category: 'Expos & Trade Shows',
    year: 'Annual (14th Edition 2026)',
    venue: 'Central Park, Hulhumalé / Dharubaaruge, Malé',
    location: 'Malé & Hulhumalé, Republic of Maldives',
    scale: '12,000+ Visitors · 60+ Exhibiting Brands',
    image: '/images/portfolio_living_expo_1791518805944.jpg',
    featured: true,
    summary:
      'The Maldives’ definitive annual property, interior design, smart living, and luxury lifestyle exhibition.',
    description:
      'The Maldives Living Expo stands as the premier marketplace for luxury real estate developers, interior designers, commercial banks, home automation specialists, and sustainable building technologies. Highrise builds an expansive, climate-controlled temporary pavilion featuring immersive walk-through architectural installations, mortgage advisory lounges, and developer launch stages.',
    highlights: [
      'Continual annual benchmark for luxury residential & commercial property launches',
      'Participation from premier regional developers across Maldives, Sri Lanka, UAE, and Malaysia',
      'Over MVR 100M+ in real estate and furnishing transactions initiated per cycle',
      'Features high-end sustainable building conferences and public design masterclasses'
    ]
  },
  {
    id: 'vacations-expo',
    title: 'Vacations Expo Maldives',
    client: 'Highrise IP / International Tourism Boards & Travel Trade',
    category: 'Expos & Trade Shows',
    year: 'Annual (8th Edition)',
    venue: 'Central Park, Hulhumalé',
    location: 'Hulhumalé, Republic of Maldives',
    scale: '45+ Exhibitors · Thousands of Outbound & Domestic Travelers',
    image: '/images/portfolio_vacations_expo_1791518817844.jpg',
    featured: true,
    summary:
      'The Maldives’ largest dedicated travel and tourism fair, connecting international travel boards, airlines, and local guesthouses.',
    description:
      'Vacations Expo was pioneered by Highrise as the first dedicated B2C and B2B travel exhibition in the Maldives. It brings together national tourism boards, international hospital chains (medical tourism), regional airlines, Hajj & Umrah operators, and local boutique island guesthouses directly to travel-seeking professionals and families.',
    highlights: [
      'Pioneered travel exhibition format in the Maldivian market',
      'Host to international tourism representations from Thailand, Malaysia, Sri Lanka, and India',
      'Exclusive airline flight launches and seasonal holiday packages',
      'B2B matchmaking suites connecting boutique island operators with global agents'
    ]
  },
  {
    id: 'sounds-of-maldives',
    title: 'Sounds of Maldives (SOM) World Tour',
    client: 'Highrise IP / Maldivian Artists Guild',
    category: 'Music & Cultural',
    year: '2011 – 2026',
    venue: 'Dubai · Singapore · Kuala Lumpur · Colombo · Bengaluru · Malé',
    location: 'International Capitals Tour',
    scale: '50+ Performing Maldivian Artists · Global Audiences',
    image: '/images/portfolio_sounds_maldives_1791518831574.jpg',
    featured: true,
    summary:
      'An iconic global cultural showcase taking authentic Maldivian boduberu, contemporary music, and arts to world stages.',
    description:
      'Sounds of Maldives is Highrise’s celebrated cultural ambassador initiative. By uniting master Boduberu drummers, contemporary jazz musicians, rock vocalists, and cultural storytellers, Highrise has staged landmark performances in Dubai, Singapore, Kuala Lumpur, Colombo, and Bangalore, spotlighting Maldivian creativity on prestigious international concert stages.',
    highlights: [
      'Staged across premier venues including Dubai, Marina Bay Singapore, and Kuala Lumpur',
      'Showcases traditional acoustic Boduberu alongside electric contemporary arrangements',
      'Garnered widespread international press coverage promoting Maldivian culture beyond resorts',
      'Provided international performance platforms for over 100 Maldivian musicians'
    ]
  },
  {
    id: 'maldives-food-beverage-show',
    title: 'Maldives Food & Beverage Show (F&B Show)',
    client: 'Highrise IP / Hospitality Importers & Culinary Brands',
    category: 'Expos & Trade Shows',
    year: 'Annual (7th & 8th Editions)',
    venue: 'Central Park / Hulhumalé Exhibition Pavilion',
    location: 'Hulhumalé, Republic of Maldives',
    scale: '70+ F&B Brands · Live Culinary Masterclasses',
    image: '/images/hero_highrise_gala_1791518771053.jpg',
    summary:
      'The premier culinary and food trade exhibition in the Maldives, connecting resort procurement teams with global suppliers.',
    description:
      'The F&B Show is the leading annual gathering of food and beverage importers, commercial kitchen manufacturers, specialty food producers, and resort executive chefs. Highrise curates live cooking demonstration theaters, barista throwdowns, supplier sample pavilions, and formal B2B procurement salons.',
    highlights: [
      'Critical supply-chain platform for the Maldives’ multibillion-dollar resort market',
      'Live Masterclass Arena featuring renowned executive chefs and culinary demonstrations',
      'Attracts general managers and procurement directors from 150+ luxury island resorts',
      'Extensive consumer tasting activations and direct retail zones'
    ]
  },
  {
    id: 'matato-maldives-travel-awards',
    title: 'MATATO Maldives Travel Awards (Founding Event)',
    client: 'Maldives Association of Travel Agents & Tour Operators (MATATO)',
    category: 'Gala & Awards',
    year: 'Historical Partner',
    venue: 'Premier Maldivian Luxury Resorts & Capital Venues',
    location: 'Republic of Maldives',
    scale: 'Top Luxury Resort Brands & Operators',
    image: '/images/portfolio_sata_stage_1791518782525.jpg',
    summary:
      'Highrise was the founding production partner to originate and manage the inaugural Maldives Travel Awards.',
    description:
      'Highrise made history by producing the very first Maldives Travel Awards on behalf of MATATO, establishing the foundational benchmarks for audiovisual production, nomination governance, stage architecture, and red-carpet gala execution that elevated the nation’s tourism award landscape.',
    highlights: [
      'Engineered the very first formal travel award ceremony in the history of the Maldives',
      'Set new standards for stage rigging, laser projection, and gala dining in the archipelago',
      'Established durable commercial sponsorship models for tourism associations',
      'Honored the founders and leaders of the Maldives luxury hospitality industry'
    ]
  },
  {
    id: 'indian-expo-maldives',
    title: 'Indian Expo Maldives',
    client: 'Highrise Pvt Ltd in collaboration with Event Solutions',
    category: 'Conferences & MICE',
    year: 'Bilateral Trade Edition',
    venue: 'Dharubaaruge Exhibition Centre, Malé',
    location: 'Malé, Republic of Maldives',
    scale: '100+ Indian & Maldivian Commercial Enterprises',
    image: '/images/portfolio_living_expo_1791518805944.jpg',
    summary:
      'A bilateral trade exhibition fostering commercial partnerships between Indian exporters and Maldivian business leaders.',
    description:
      'Produced in partnership with premier Indian event management firm Event Solutions, the Indian Expo brought together leading commercial banks (such as State Bank of India), manufacturing firms, healthcare providers, and consumer brands to foster direct trade corridors with the Maldives.',
    highlights: [
      'High-profile diplomatic presence including Ambassadors and Ministry delegations',
      'Structured B2B matchmaking sessions resulting in significant commercial supply agreements',
      'Comprehensive customs clearance, freight coordination, and turnkey booth fabrication',
      'Reinforced Highrise’s capability to deliver large-scale international bilateral trade expos'
    ]
  },
  {
    id: 'national-marine-boating-conclave',
    title: 'National Marine & Boating Conclave',
    client: 'Liveaboard Association of Maldives (LAM) / Ministry of Transport',
    category: 'Conferences & MICE',
    year: 'Conclave Series',
    venue: 'Malé & Paradise Island Convention Centre',
    location: 'Republic of Maldives',
    scale: '200+ Safari Vessel Owners & Marine Engineers',
    image: '/images/portfolio_vacations_expo_1791518817844.jpg',
    summary:
      'Strategic national policy and technical summit advancing marine safety, safari yacht tourism, and maritime logistics.',
    description:
      'Drawing on Highrise’s deep industry roots with the Liveaboard Association of Maldives, this high-level conclave brought together shipbuilders, safari vessel proprietors, marine insurers, coast guard officials, and international marina developers for policy roundtables and technical symposiums.',
    highlights: [
      'Drafting of key policy recommendations presented to national transport authorities',
      'Technical display of marine engines, satellite communications, and watermakers',
      'Keynote addresses by international maritime safety experts',
      'Exclusive networking dinner celebrating seafaring heritage and liveaboard tourism'
    ]
  }
];

export const BRANDS_AND_PUBLICATIONS: BrandItem[] = [
  {
    id: 'sata',
    name: 'South Asian Travel Awards (SATA)',
    tagline: 'The Gold Standard of South Asian Hospitality Recognition',
    type: 'Flagship Event',
    established: '2016',
    frequency: 'Annual',
    summary:
      'South Asia’s most prestigious regional travel and hospitality award platform, spanning six participating countries.',
    fullDescription:
      'Established in 2016 by Highrise, SATA is endorsed by multinational tourism boards and hospitality bodies across Maldives, Sri Lanka, India, Nepal, Bhutan, and Bangladesh. SATA recognizes excellence across destinations, luxury hotels, boutique resorts, travel technology, and safari yachts, rotating its grand annual gala across premier regional capital cities.',
    audience: 'Resort General Managers, Tourism Ministers, Airline Executives, Travel Media',
    keyStats: ['6 Participating Nations', '1,000+ Annual Nominations', '15+ Endorsing Associations', '9th & 10th Editions Across South Asia'],
    websiteUrl: 'https://southasiantravelawards.com'
  },
  {
    id: 'living-expo',
    name: 'Maldives Living Expo',
    tagline: 'The Definitive Property & Luxury Living Exhibition',
    type: 'Trade Exhibition',
    established: '2013',
    frequency: 'Annual (14th Edition 2026)',
    summary:
      'The premier Maldivian showcase for residential real estate, architecture, smart homes, and interior design.',
    fullDescription:
      'The Maldives Living Expo serves as the focal point for individuals, developers, and institutions seeking investment and design solutions. Spanning luxury condominium launches in Hulhumalé to overseas property acquisitions in Colombo and Dubai, the expo features custom pavilion construction, high-net-worth investor roundtables, and green home showcases.',
    audience: 'Property Investors, Homeowners, Architects, Interior Designers, Banks',
    keyStats: ['14 Successful Editions', '60+ Premier Exhibitors', '12,000+ Average Visitors', 'MVR 100M+ Transaction Volume Initiated'],
    websiteUrl: 'https://highriseint.com'
  },
  {
    id: 'vacations-expo',
    name: 'Vacations Expo',
    tagline: 'Connecting Island Travelers with the World',
    type: 'Trade Exhibition',
    established: '2016',
    frequency: 'Annual (8th Edition)',
    summary:
      'The largest travel, holiday, and outbound tourism exhibition in the Maldives.',
    fullDescription:
      'Vacations Expo was launched to meet the booming outbound and domestic travel demand in the Maldives. The exhibition gathers international tourism authorities, domestic island guesthouses, medical tourism conglomerates, safari operators, and leading airlines under one roof, offering exclusive promotional fares and travel packages to attendees.',
    audience: 'Outbound Travelers, Island Guesthouse Owners, Travel Agents, Medical Patients',
    keyStats: ['8 Editions Delivered', '40+ Exhibiting Brands', 'Thousands of Outbound Bookings', 'Direct Airline & Medical Tourism Pavilions'],
    websiteUrl: 'https://highriseint.com'
  },
  {
    id: 'fb-show',
    name: 'Food & Beverage Show (F&B Show)',
    tagline: 'Culinary Innovations for the Island Hospitality Sector',
    type: 'Trade Exhibition',
    established: '2017',
    frequency: 'Annual (7th & 8th Editions)',
    summary:
      'The leading annual exhibition dedicated to food service, culinary suppliers, beverage brands, and kitchen tech.',
    fullDescription:
      'The F&B Show is the epicenter of gastronomic business in the Maldives. Connecting major food importers, beverage distributors, cold-chain logistics providers, and commercial equipment manufacturers with executive resort chefs and food directors, the event also features live barista championships and culinary demonstrations.',
    audience: 'Executive Chefs, Resort F&B Directors, Importers, Culinary Enthusiasts',
    keyStats: ['70+ Exhibiting Brands', 'Live Culinary Arena', '150+ Resort Buyers in Attendance', 'Dedicated B2B Procurement Salons'],
    websiteUrl: 'https://highriseint.com'
  },
  {
    id: 'sounds-of-maldives',
    name: 'Sounds of Maldives (SOM)',
    tagline: 'Elevating Maldivian Rhythms and Culture to Global Arenas',
    type: 'Cultural Platform',
    established: '2011',
    frequency: 'International Tours',
    summary:
      'An acclaimed international music and cultural concert series celebrating Maldivian talent on world stages.',
    fullDescription:
      'Sounds of Maldives is Highrise’s visionary cultural export. By curating Maldivian musicians, boduberu drum masters, and vocalists, Highrise has staged landmark musical events in Singapore, Dubai, Kuala Lumpur, Colombo, and Bangalore, demonstrating that Maldivian culture possesses international vitality and stage power.',
    audience: 'International Music Lovers, Maldivian Diaspora, Cultural Diplomats, Global Press',
    keyStats: ['5 Global Metropolises Hosted', '100+ Artists Showcased', '15+ International Concert Events', 'Pioneering Boduberu Cultural Export'],
    websiteUrl: 'https://highriseint.com'
  },
  {
    id: 'the-island-chief',
    name: 'The Island Chief',
    tagline: 'The Maldives’ First Monthly Color Travel & Hospitality Tabloid',
    type: 'Publication & Media',
    established: '2016',
    frequency: 'Monthly (Print & Digital)',
    summary:
      'The definitive monthly trade newspaper and digital portal dedicated to the Maldives tourism and luxury resort industry.',
    fullDescription:
      'The Island Chief is the Maldives’ first consistent, monthly-published full-color tabloid and digital media platform dedicated entirely to the hospitality and aviation sector. Circulated directly to luxury resort general managers, ministry offices, airline lounges, and travel trade fairs worldwide, it delivers hard-hitting news, property reviews, and industry insights.',
    audience: 'Resort General Managers, Tourism Policymakers, Aviation Executives, Travel Trade',
    keyStats: ['Monthly Print & Global Digital Distribution', 'Distributed across All Maldivian Resorts', '10+ Years of Uninterrupted Journalism', 'Premier Media Partner for Regional Expos'],
    websiteUrl: 'https://theislandchief.com'
  },
  {
    id: 'floating-asia',
    name: 'Floating Asia',
    tagline: 'The Voice of Indian Ocean Liveaboards, Safari Yachts & Marine Adventures',
    type: 'Publication & Media',
    established: '2018',
    frequency: 'Quarterly & Digital Portal',
    summary:
      'A specialized luxury media platform dedicated to liveaboards, marine expeditions, scuba diving, and ocean conservation.',
    fullDescription:
      'Floating Asia caters to the elite marine tourism industry across the Maldives and the wider Indian Ocean. Covering superyachts, dive safaris, surf expeditions, maritime craftsmanship, and oceanic biodiversity, it serves as the ultimate catalog for luxury liveaboard charters and nautical lifestyle.',
    audience: 'Yacht Charterers, Scuba Divers, Marine Biologists, Boat Builders, Tour Operators',
    keyStats: ['Dedicated Indian Ocean Marine Focus', 'Endorsed by Liveaboard Association of Maldives', 'Direct Distribution to Safari Fleets', 'Comprehensive Liveaboard Directory'],
    websiteUrl: 'https://floatingasia.com'
  }
];

export const MANAGEMENT_TEAM: TeamMember[] = [
  {
    id: 'ismail-hameed',
    name: 'Ismail Hameed ("Issey")',
    role: 'Co-Founder & Director of Marketing & PR',
    category: 'Executive Leadership',
    email: 'ismail@highriseint.com',
    experience: '20+ Years in Marketing, Event Production & Public Relations',
    bio:
      'Widely recognized as one of the Maldives’ foremost event visionaries and marketing entrepreneurs, Ismail Hameed ("Highrise Issey") co-founded Highrise in 2007. Over two decades, he has conceptualized iconic regional brands including the South Asian Travel Awards (SATA), Vacations Expo, and the Sounds of Maldives international tours. He previously served as President and Co-Founder of the Liveaboard Association of Maldives (LAM) and was honored with the National Youth Award in Event Management (2014) and "Entrepreneur of the Year" at the Maldives Business Awards (2019).',
    specialization: [
      'International Event IP Formulation',
      'Strategic Public Relations & Media Management',
      'Regional Hospitality Network Diplomacy',
      'Government & Institutional Stakeholder Relations'
    ]
  },
  {
    id: 'ismail-shifraz',
    name: 'Ismail Shifraz',
    role: 'Managing Director & Co-Founder',
    category: 'Executive Leadership',
    email: 'shifraz@highriseint.com',
    experience: '18+ Years in Operational Leadership & Technical Event Engineering',
    bio:
      'Co-founding Highrise alongside Ismail Hameed, Ismail Shifraz directs the company’s corporate operations, international logistical frameworks, and technical event engineering. Becoming Managing Director in 2008, his meticulous operational governance ensures that complex multi-day expos and high-security regional galas operate with surgical precision across Maldives, Sri Lanka, and regional venues.',
    specialization: [
      'Turnkey Event Logistics & Rigging',
      'Corporate Strategy & Cross-Border Governance',
      'Vendor Contract Negotiation',
      'Production Operations Oversight'
    ]
  },
  {
    id: 'mariyam-niuma',
    name: 'Mariyam Niuma',
    role: 'Chief Financial Officer (CFO)',
    category: 'Finance & Operations',
    email: 'niuma@highriseint.com',
    experience: '18+ Years in Corporate Financial Management & Fiscal Strategy',
    bio:
      'Mrs. Mariyam Niuma joined Highrise as Finance Director in January 2008 and currently serves as Chief Financial Officer for Highrise Group. With over 18 years in corporate finance and accounts, having previously served as Senior Accountant at Lintel Investments, she directs corporate treasury, auditing, and international budget structuring across all group entities.',
    specialization: [
      'Corporate Financial Governance & Treasury',
      'Event Project Budgeting & Capital Allocation',
      'Cross-Border Financial Structuring',
      'Audit & Fiscal Compliance'
    ]
  },
  {
    id: 'mariyam-maaisha',
    name: 'Mariyam Maaisha',
    role: 'Director, Sales & Marketing',
    category: 'Commercial & PR',
    email: 'maaisha@highriseint.com',
    experience: '10+ Years in Commercial Partnerships & Brand Sponsorship',
    bio:
      'Ms. Mariyam Maaisha Shujau (Maai) joined Highrise in 2017 and serves as Director of Sales & Marketing for Highrise Group and Deputy Director of Communications for South Asian Travel Awards (SATA). Formerly with Maldives Airports Company Limited (MACL) and Public Service Media (PSM), she is also an executive board member at the National Boating Association of Maldives.',
    specialization: [
      'Marquee Sponsorship Architecture',
      'Exhibitor Sales & Relationship Management',
      'Brand Commercialization',
      'Client Retention Strategies'
    ]
  },
  {
    id: 'yusra-naseer',
    name: 'Yusra Naseer',
    role: 'Head of Finance & Administration',
    category: 'Finance & Operations',
    email: 'yusra@highriseint.com',
    experience: '9+ Years in Administrative Architecture & Operational Control',
    bio:
      'Ms. Yusra Naseer is the Head of Finance & Admin at Highrise Group of Companies. Having served in finance and accounts management across all group companies including Highrise Pvt Ltd, Maldives Publications, SATA, and The Trading Company, she oversees internal operations, vendor settlement protocols, and statutory compliance.',
    specialization: [
      'Internal Corporate Administration',
      'Vendor Contracting & Compliance',
      'Statutory & Regulatory Liaison',
      'Operational Process Optimization'
    ]
  },
  {
    id: 'mariyam-zeena',
    name: 'Mariyam Zeena',
    role: 'Corporate Communications Manager',
    category: 'Commercial & PR',
    email: 'zeena@highriseint.com',
    experience: '8+ Years in Media Relations, Editorial Direction & Corporate PR',
    bio:
      'Ms. Mariyam Zeena joined Highrise in 2019 and serves as Corporate Communications Manager and Content Executive for Highrise and Maldives Publications. Juggling high-level writing and editorial contributions with academic excellence, she spearheads press releases, stakeholder communications, and media partnerships.',
    specialization: [
      'Media Relations & Press Accreditation',
      'Corporate Editorial Strategy',
      'Crisis Communications Protocol',
      'Stakeholder PR Amplification'
    ]
  },
  {
    id: 'mohamed-hassaan',
    name: 'Mohamed Hassaan',
    role: 'Manager, Sales & Marketing — Events',
    category: 'Commercial & PR',
    email: 'sales@highriseint.com',
    experience: '8+ Years in B2B Event Marketing & Brand Activation Sales',
    bio:
      'Mohamed Hassaan leads sales and marketing for Highrise’s flagship consumer and trade events, including the F&B Show, Maldives Living Expo, and Vacations Expo. He works directly with national sponsors, international exhibitors, and hospitality brands to construct high-visibility showcase presences.',
    specialization: [
      'Exhibition Booth Commercialization',
      'Sponsorship Pitch Architecture',
      'Lead Generation & Account Servicing',
      'Event Promotion Strategy'
    ]
  },
  {
    id: 'ali-nawaaz',
    name: 'Ali Nawaaz',
    role: 'Lead Graphic & Production Designer',
    category: 'Design & Creative',
    email: 'design@highriseint.com',
    experience: '9+ Years in Visual Identity, Stage 3D Renders & Publication Art Direction',
    bio:
      'Ali Nawaaz directs graphic design, exhibition branding, visual identities, and promotional collateral for all Highrise projects and publications. From stage 3D mockups and award branding to luxury editorial layouts, his design direction sets the aesthetic tone for Highrise’s regional productions.',
    specialization: [
      'Stage & Set Design Concepts',
      'Event Branding & Visual Systems',
      'Editorial Layout Art Direction',
      'Signage & Environmental Graphics'
    ]
  },
  {
    id: 'richard-mendonca',
    name: 'Richard Mendonca',
    role: 'Creative Consultant',
    category: 'Design & Creative',
    email: 'admin@highriseint.com',
    experience: '15+ Years in Experiential Concepts, Creative Staging & Cultural Direction',
    bio:
      'Richard Mendonca serves as Creative Consultant to Highrise Group, infusing international artistic sensibilities, experiential performance direction, and innovative show-flow choreography into flagship gala dinners, music showcases, and cross-cultural celebrations.',
    specialization: [
      'Gala Show-Flow Choreography',
      'Experiential Concept Innovation',
      'Artistic Direction & Talent Curating',
      'Thematic Stage Narratives'
    ]
  },
  {
    id: 'shahidudin',
    name: 'Shahidudin',
    role: 'Operations & Event Assistant',
    category: 'Finance & Operations',
    email: 'admin@highriseint.com',
    experience: '7+ Years in Logistics Staging, Equipment Handling & On-Site Support',
    bio:
      'Shahidudin provides hands-on ground support, equipment coordination, and venue logistics during high-pressure exhibition builds and gala stagings. His reliability ensures smooth back-of-house operations across every Maldivian event venue.',
    specialization: [
      'Venue Staging Coordination',
      'Ground Logistics & Freight Handling',
      'Exhibitor Move-In/Move-Out Supervision',
      'Technical Equipment Care'
    ]
  },
  {
    id: 'naret-mohsanga',
    name: 'Naret Mohsanga',
    role: 'Marketing Executive, South East Asia — Thailand',
    category: 'Regional Representation',
    email: 'thai@highriseint.com',
    experience: '10+ Years in ASEAN Hospitality Marketing & Trade Fair Promotion',
    bio:
      'Based in Bangkok, Naret coordinates South East Asian commercial representation for Highrise exhibitions and awards. He connects Thai travel agencies, hotel suppliers, and food & beverage manufacturers with Maldivian trade fairs.',
    specialization: [
      'ASEAN Exhibitor Recruitment',
      'Cross-Border Trade Liaison',
      'Thai Hospitality Partnerships',
      'Regional Media Engagement'
    ]
  },
  {
    id: 'suraj-khan',
    name: 'Suraj Khan',
    role: 'Director, MICE — India',
    category: 'Regional Representation',
    email: 'mice@highriseint.com',
    experience: '16+ Years in Indian MICE, Corporate Conclaves & South Asian Travel Trade',
    bio:
      'Suraj Khan spearheads Highrise’s MICE initiatives across the Indian subcontinent. Connecting corporate houses, event agencies, and hospitality leaders from Mumbai, Delhi, and Bangalore with Maldivian and regional conclaves, he expands SATA and Highrise’s presence in India.',
    specialization: [
      'Indian MICE Delegation Coordination',
      'Bilateral Corporate Partnerships',
      'Hospitality Summit Promotion',
      'SATA Indian Chapter Growth'
    ]
  },
  {
    id: 'prashant-pradhan',
    name: 'Prashant Pradhan',
    role: 'SATA Regional Representative — Nepal',
    category: 'Regional Representation',
    email: 'sales@highriseint.com',
    experience: '15+ Years in Himalayan Tourism, Hospitality Promotion & Regional Trade',
    bio:
      'Representing the South Asian Travel Awards (SATA) across Nepal, Prashant coordinates nominations, jury visits, and national hospitality endorsements from leading hotel associations and tourism bodies in Kathmandu and Pokhara.',
    specialization: [
      'Nepal Hospitality Trade Diplomacy',
      'SATA Regional Coordination',
      'Himalayan Tourism Promotion',
      'Institutional Partner Management'
    ]
  },
  {
    id: 'tekendra-b-mahat',
    name: 'Tekendra B. Mahat',
    role: 'SATA Regional Representative — Nepal',
    category: 'Regional Representation',
    email: 'sales@highriseint.com',
    experience: '14+ Years in Hospitality Management & Regional Travel Conclaves',
    bio:
      'Serving as regional liaison for SATA in Nepal alongside Prashant, Tekendra fosters partnerships between the Nepalese travel sector, national airlines, and the broader South Asian hospitality community, ensuring strong institutional representation at the annual awards.',
    specialization: [
      'Regional Hospitality Outreach',
      'Institutional Partner Management',
      'South Asian Travel Promotion',
      'Industry Stakeholder Relations'
    ]
  },
  {
    id: 'adam-manaf-ali',
    name: 'Adam Manaf Ali',
    role: 'Assistant Editor — The Island Chief & Publications',
    category: 'Editorial & Media',
    email: 'editor@theislandchief.com',
    experience: '8+ Years in Hospitality Journalism, Media Publishing & Feature Writing',
    bio:
      'Serving as Assistant Editor at Highrise Pvt Ltd and The Island Chief, Adam Manaf Ali drives industry reporting, resort reviews, aviation features, and regional trade journalism. His editorial leadership ensures timely, high-impact reporting across Highrise’s print and digital publications, connecting key Maldivian and international hospitality stakeholders.',
    specialization: [
      'Travel & Hospitality Feature Journalism',
      'Editorial Curation & Print Publishing',
      'Resort Profiles & Executive Interviews',
      'Aviation & Marine Tourism Coverage'
    ]
  }
];

