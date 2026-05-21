export type ServiceSection = { heading: string; bullets: string[] };
export type Service = {
  slug: string; icon: string; title: string; titleAr: string;
  shortDesc: string; subtitle: string; sections: ServiceSection[];
};

export const services: Service[] = [
  {
    "slug": "mep-engineering",
    "icon": "Wrench",
    "title": "Engineering & Contracting (MEP)",
    "titleAr": "الهندسة والمقاولات (ميكانيكية · كهربائية · صحية)",
    "shortDesc": "Mechanical · Electrical · Plumbing — Complete MEP Engineering Solutions",
    "subtitle": "Mechanical · Electrical · Plumbing — Complete MEP Engineering Solutions",
    "sections": [
      {
        "heading": "Services Covered",
        "bullets": [
          "General construction — residential, commercial, hotels, hospitals",
          "Civil & building finishing works (painting, plastering, granite)",
          "Doors, windows, fitted kitchens, and steel staircases",
          "Flooring works — parquet, wooden, and specialty coverings",
          "Complete electrical systems, wiring, and lighting installation",
          "HVAC systems — air-conditioning, ducts, refrigeration, heating",
          "Plumbing, sanitary, and water distribution systems",
          "Pumps, solar energy systems, and power-related works",
          "Umbrellas, fencing, and external installations"
        ]
      }
    ]
  },
  {
    "slug": "civil-structural",
    "icon": "Building2",
    "title": "Civil & Structural Works",
    "titleAr": "الأعمال المدنية والإنشائية",
    "shortDesc": "Heavy civil, foundations, structural steel and superstructure works",
    "subtitle": "Heavy civil, foundations, structural steel and superstructure works",
    "sections": [
      {
        "heading": "Foundation Works",
        "bullets": [
          "Shallow and deep foundation systems",
          "Driven and bored piles",
          "Ground improvement solutions",
          "Pile testing and quality assurance",
          "Marine and waterfront foundations"
        ]
      },
      {
        "heading": "Structural Steel Erection",
        "bullets": [
          "Heavy steel structure erection",
          "High-rise steel installation",
          "Industrial plant structures",
          "Bolted and welded connections",
          "Quality inspection & documentation"
        ]
      },
      {
        "heading": "Road & Infrastructure",
        "bullets": [
          "Road and highway construction",
          "Drainage and stormwater systems",
          "Curbs, kerbs, and paving works",
          "Earthworks and site leveling",
          "Infrastructure trenching and backfilling"
        ]
      },
      {
        "heading": "Building Superstructure",
        "bullets": [
          "Reinforced concrete frames",
          "Block and masonry works",
          "Slab and beam construction",
          "Columns and shear walls",
          "Construction sequencing & shoring"
        ]
      }
    ]
  },
  {
    "slug": "electrical-works",
    "icon": "Zap",
    "title": "Electrical Works",
    "titleAr": "الأعمال الكهربائية",
    "shortDesc": "Complete Electrical Engineering Solutions for Industrial & Commercial Projects",
    "subtitle": "Complete Electrical Engineering Solutions for Industrial & Commercial Projects",
    "sections": [
      {
        "heading": "Industrial Power Distribution",
        "bullets": [
          "MDB / SDB / MCC / PCC design & installation",
          "Real-time monitoring",
          "Protection devices",
          "Earthing systems"
        ]
      },
      {
        "heading": "Lighting Design & Installation",
        "bullets": [
          "LED systems with 80%+ energy savings",
          "Smart controls",
          "Emergency and decorative lighting"
        ]
      },
      {
        "heading": "Substation Construction",
        "bullets": [
          "11kV–400kV design and construction",
          "GIS / AIS switchgear",
          "SCADA, transformer commissioning"
        ]
      },
      {
        "heading": "High-Voltage Cable Installation",
        "bullets": [
          "11kV–400kV cable installation",
          "Jointing",
          "Underground / overhead routing",
          "Fault location"
        ]
      },
      {
        "heading": "Emergency Power Systems",
        "bullets": [
          "Generator and UPS installation",
          "ATS",
          "Load bank testing",
          "24/7 maintenance support"
        ]
      },
      {
        "heading": "Electrical Panel Manufacturing",
        "bullets": [
          "Custom panel design",
          "MDB / SDB / MCC manufacturing",
          "IEC 61439 compliance",
          "FAT testing"
        ]
      }
    ]
  },
  {
    "slug": "hvac-systems",
    "icon": "Wind",
    "title": "HVAC Systems",
    "titleAr": "أنظمة التكييف والتهوية والتبريد",
    "shortDesc": "Heating, Ventilation & Air Conditioning — design through commissioning",
    "subtitle": "Heating, Ventilation & Air Conditioning — design through commissioning",
    "sections": [
      {
        "heading": "HVAC Capabilities",
        "bullets": [
          "Complete HVAC system design and engineering",
          "VRF, chilled water, and packaged systems",
          "Chillers, Pumps, AHU, FCU, VAV, Split AC supply & installation",
          "HVAC ductwork fabrication and supports",
          "Copper coiling, insulation works",
          "DDC Control Panel, AHU systems, Package Units",
          "Building automation and DDC controls",
          "Testing, balancing, and commissioning",
          "Preventive and corrective HVAC maintenance"
        ]
      },
      {
        "heading": "Cold Room & Display Refrigerator Maintenance",
        "bullets": [
          "Our company deals specifically with the maintenance of any type of cold room and commercial refrigerator to ensure maximum efficiency and longevity. Our engineers are well-versed in this area and undergo special training in the latest technologies to provide our customers with exemplary services. Our competent team of technicians has the capability to maintain maximum efficiency and monitor the systems constantly. We are always ready to serve our clients in an efficient manner."
        ]
      }
    ]
  },
  {
    "slug": "plumbing-mechanical",
    "icon": "Droplets",
    "title": "Plumbing & Mechanical Works",
    "titleAr": "السباكة والأعمال الميكانيكية",
    "shortDesc": "Plumbing systems, mechanical works, and turnkey mechanical solutions",
    "subtitle": "Plumbing systems, mechanical works, and turnkey mechanical solutions",
    "sections": [
      {
        "heading": "Plumbing Systems",
        "bullets": [
          "Water supply system design and installation",
          "Sanitation and drainage systems",
          "Rainwater collection systems",
          "Gas line systems for buildings",
          "Pipe laying, tanks, and sanitary fittings",
          "Kitchen fittings and drainage lines",
          "Maintenance and repair by qualified technicians"
        ]
      },
      {
        "heading": "Mechanical Works",
        "bullets": [
          "Hydraulic works and pressure systems",
          "Firefighting plumbing and mains",
          "Pump and boiler mechanisms",
          "Generators and diesel pump systems",
          "Turnkey mechanical project solutions",
          "Valve and actuator installation",
          "Mechanical room equipment installation"
        ]
      }
    ]
  },
  {
    "slug": "fire-protection",
    "icon": "Flame",
    "title": "Fire Protection Systems",
    "titleAr": "أنظمة الحماية من الحرائق",
    "shortDesc": "Advanced Fire Detection, Suppression & Life Safety Solutions",
    "subtitle": "Advanced Fire Detection, Suppression & Life Safety Solutions",
    "sections": [
      {
        "heading": "Fire Alarm Systems",
        "bullets": [
          "Addressable detection",
          "Voice evacuation",
          "Remote monitoring",
          "NFPA 72 & SBC 801 compliant"
        ]
      },
      {
        "heading": "Automatic Sprinkler Systems",
        "bullets": [
          "Wet, dry, pre-action & deluge systems",
          "Hydraulic design",
          "NFPA 13 & NFPA 25 compliant"
        ]
      },
      {
        "heading": "Fire Fighting Systems",
        "bullets": [
          "Complete firefighting mains",
          "Hose reels, hydrants",
          "Suppression networks"
        ]
      },
      {
        "heading": "Clean Agent Suppression",
        "bullets": [
          "FM-200, Novec 1230, Inergen",
          "For server rooms & critical areas",
          "NFPA 2001 compliant"
        ]
      },
      {
        "heading": "Foam Fire Suppression",
        "bullets": [
          "Low / high-expansion foam",
          "For aircraft hangars & flammable liquid storage",
          "NFPA 11"
        ]
      },
      {
        "heading": "Kitchen Fire Suppression",
        "bullets": [
          "Wet chemical, UL-300",
          "Automatic shutoff",
          "NFPA 96 & NFPA 17A",
          "Semi-annual inspection"
        ]
      },
      {
        "heading": "Fire Pump Systems",
        "bullets": [
          "Electric & diesel fire pumps",
          "NFPA 20",
          "Automatic controllers",
          "Annual flow testing"
        ]
      },
      {
        "heading": "Emergency Evacuation",
        "bullets": [
          "Evacuation signage",
          "Emergency lighting",
          "PA/VA systems",
          "Muster point management"
        ]
      },
      {
        "heading": "Fire Alarm & Detection Solutions",
        "bullets": [
          "Addressable fire detection systems",
          "Multi-criteria intelligent detectors",
          "Voice evacuation integration",
          "Remote monitoring and supervision",
          "Integration with building systems",
          "NFPA 72 and SBC 801 compliance",
          "Wireless detection options",
          "Heat and smoke detector installation",
          "Control panel programming and commissioning",
          "Annual inspection and servicing contracts"
        ]
      }
    ]
  },
  {
    "slug": "elv-security",
    "icon": "ShieldCheck",
    "title": "ELV & Security Systems",
    "titleAr": "الأنظمة الأمنية وضعيفة التيار",
    "shortDesc": "CCTV, access control, intrusion detection and integrated low-voltage systems",
    "subtitle": "CCTV, access control, intrusion detection and integrated low-voltage systems",
    "sections": [
      {
        "heading": "CCTV & Video Surveillance — Professional Surveillance Solutions",
        "bullets": [
          "HD IP camera systems (2MP to 8MP)",
          "Analogue and hybrid camera solutions",
          "Intelligent video analytics and AI detection",
          "Network video recorders (NVR) and cloud storage",
          "Video management software platforms",
          "Remote monitoring and mobile app access",
          "Pan-tilt-zoom (PTZ) camera installation",
          "Integration with access control systems",
          "Perimeter detection and intrusion systems",
          "24/7 monitoring and maintenance support"
        ]
      }
    ]
  },
  {
    "slug": "solar-energy",
    "icon": "Sun",
    "title": "Solar Energy Solutions",
    "titleAr": "حلول الطاقة الشمسية",
    "shortDesc": "End-to-end Solar Energy Solutions — Installation, Maintenance & Optimization",
    "subtitle": "End-to-end Solar Energy Solutions — Installation, Maintenance & Optimization",
    "sections": [
      {
        "heading": "Solar PV Installation",
        "bullets": [
          "Rooftop and ground-mounted photovoltaic systems for commercial, residential, and industrial use"
        ]
      },
      {
        "heading": "System Design & Engineering",
        "bullets": [
          "Feasibility studies, energy yield analysis, and complete solar system engineering"
        ]
      },
      {
        "heading": "Grid-Tied & Off-Grid",
        "bullets": [
          "Both on-grid and off-grid solar configurations with battery storage options"
        ]
      },
      {
        "heading": "Maintenance & Monitoring",
        "bullets": [
          "Regular cleaning, performance monitoring, inverter servicing, and panel replacement"
        ]
      }
    ]
  },
  {
    "slug": "facility-management",
    "icon": "Settings2",
    "title": "Facility Management & Maintenance",
    "titleAr": "إدارة المرافق والصيانة",
    "shortDesc": "Comprehensive Facility Management — Hard & Soft Services",
    "subtitle": "Comprehensive Facility Management — Hard & Soft Services",
    "sections": [
      {
        "heading": "Hard Services",
        "bullets": [
          "Operation & maintenance of buildings and facilities",
          "Preventive & corrective maintenance (AMC contracts)",
          "HVAC, electrical, plumbing, and mechanical maintenance",
          "Elevators, escalators, and automated doors",
          "Refrigeration and air purification systems",
          "General maintenance within facilities",
          "Emergency call-out services 24/7",
          "Asset management and condition surveys"
        ]
      },
      {
        "heading": "Soft Services",
        "bullets": [
          "Cleaning and janitorial services",
          "Pest control and fumigation",
          "Landscaping and grounds maintenance",
          "Security guarding services",
          "Reception and concierge management",
          "Waste management and recycling",
          "Catering and pantry services support",
          "Helpdesk and work order management"
        ]
      },
      {
        "heading": "Preventive Maintenance Programs (AMC)",
        "bullets": [
          "Comprehensive Multi-Trade — single point of contact for all MEP, civil, and ELV maintenance",
          "Customized Schedules — programs tailored to facility usage patterns, equipment age, and criticality",
          "Predictive Maintenance — using technology to detect issues before failures occur",
          "24/7 Emergency Response — round-the-clock team ready to address critical failures immediately",
          "Regulatory Compliance Testing — periodic testing and documentation to maintain Saudi code compliance",
          "Detailed Documentation — full maintenance logs, equipment histories, and reporting for asset management"
        ]
      }
    ]
  },
  {
    "slug": "building-finishing",
    "icon": "Paintbrush",
    "title": "Building Finishing & Fit-Out Works",
    "titleAr": "أعمال التشطيبات والديكور",
    "shortDesc": "Premium interior and exterior finishing, fit-out and architectural metalwork",
    "subtitle": "Premium interior and exterior finishing, fit-out and architectural metalwork",
    "sections": [
      {
        "heading": "Building Finishing Works",
        "bullets": [
          "Interior and exterior painting, granite installation, plastering, and complete finishing"
        ]
      },
      {
        "heading": "Floor Covering Works",
        "bullets": [
          "Installation and maintenance of parquet, hardwood, ceramic, marble, and specialty floor coverings"
        ]
      },
      {
        "heading": "Doors & Windows Installation",
        "bullets": [
          "Supply, fabrication, and installation of door and window frames, steel doors, aluminum systems, and architectural glazing"
        ]
      },
      {
        "heading": "Fitted Kitchens & Steel Works",
        "bullets": [
          "Custom fitted kitchen design and installation, steel staircase fabrication, and specialist metalwork"
        ]
      },
      {
        "heading": "Umbrellas & Fencing",
        "bullets": [
          "Professional installation of shade umbrellas, canopies, fencing systems, and external installations"
        ]
      },
      {
        "heading": "General Fit-Out Works",
        "bullets": [
          "Full interior fit-out for offices, retail units, and hospitality properties"
        ]
      }
    ]
  },
  {
    "slug": "general-contracting",
    "icon": "HardHat",
    "title": "General Contracting",
    "titleAr": "المقاولات العامة",
    "shortDesc": "Full-Scope General Contracting Services",
    "subtitle": "Full-Scope General Contracting Services",
    "sections": [
      {
        "heading": "Scope",
        "bullets": [
          "New construction — residential, commercial, hotels, hospitals",
          "Building extensions and additions",
          "Demolition and site clearance works",
          "Renovation and refurbishment of existing buildings",
          "Temporary works and scaffolding",
          "Procurement, logistics, and materials management",
          "Subcontractor coordination and management",
          "Project scheduling (CPM) and milestone management",
          "Quality inspections and snagging/defect management",
          "Handover documentation and as-built drawings"
        ]
      }
    ]
  },
  {
    "slug": "trading-supply",
    "icon": "Truck",
    "title": "Trading & Supply",
    "titleAr": "التجارة والتوريد",
    "shortDesc": "Material Supply, Procurement & Trading Services",
    "subtitle": "Material Supply, Procurement & Trading Services",
    "sections": [
      {
        "heading": "Building Materials",
        "bullets": [
          "Cement, steel, and aggregate supply",
          "Block, brick, and masonry materials",
          "Tile, marble, and granite supply",
          "Paints, coatings, and sealants",
          "Thermal and acoustic insulation",
          "Waterproofing membranes"
        ]
      },
      {
        "heading": "MEP Materials & Equipment",
        "bullets": [
          "Electrical cables and conduits",
          "Switchgear and distribution boards",
          "HVAC equipment and parts",
          "Plumbing fittings and pipes",
          "Pumps, motors, and drives",
          "Control panels and automation parts"
        ]
      },
      {
        "heading": "Finishing Materials",
        "bullets": [
          "Flooring materials (tile, parquet, vinyl)",
          "Ceiling systems and grids",
          "Wall cladding and finishes",
          "Doors, windows, and hardware",
          "Kitchen and bathroom fittings",
          "Specialty coatings and treatments"
        ]
      }
    ]
  }
];

export const getService = (slug: string) => services.find(s => s.slug === slug);
