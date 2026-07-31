import { ServiceItem, BuildProject } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'coloured-ppf',
    title: 'Coloured PPF',
    subtitle: 'HYPER-PIGMENTED PROTECTION',
    category: 'ppf',
    description: 'Advanced TPU self-healing film infused with deep paint-grade color pigments. Provides identical appearance to high-end custom paint with complete rock chip and scratch defense.',
    badge: 'NEW TECH /// 210 MICRON',
    specs: ['Self-Healing Polymer Matrix', 'Hydrophobic Surface Coating', '0% Orange Peel Texture', '10-Year Anti-Yellowing Guarantee'],
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    estimatedTime: '4 - 6 Days',
    startingPrice: '$4,800',
    features: [
      'Paint-grade gloss and deep metallic finishes',
      'Instant self-healing against swirl marks and micro-scratches',
      'Protects original factory OEM paint intact',
      'Computerized pre-cut templates for seamless edge wrapping'
    ]
  },
  {
    id: 'clear-ppf',
    title: 'Clear Stealth PPF',
    subtitle: 'INVISIBLE ARMOR',
    category: 'ppf',
    description: 'Optically clear 200-micron thermoplastic polyurethane shielding. Formulated with ultra-durable hydrophobic topcoats to repel debris, harsh chemicals, and UV degradation.',
    badge: 'MIL-SPEC /// ULTRA CLEAR',
    specs: ['99.8% Optical Clarity', 'High-Impact TPU Absorber', 'Self-Healing Heat Activation', '8-Year Factory Warranty'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    estimatedTime: '3 - 5 Days',
    startingPrice: '$3,900',
    features: [
      'Invisible protection preserves OEM paint brilliance',
      'Resists stone chips, bug acids, and road tar',
      'Non-yellowing UV barrier',
      'Hydrophobic top coat for effortless wash maintenance'
    ]
  },
  {
    id: 'matte-ppf',
    title: 'Satin & Matte PPF',
    subtitle: 'TRANSFORMATIVE SATIN FINISH',
    category: 'ppf',
    description: 'Transforms gloss OEM paint into a sleek, satin-matte texture while delivering full TPU impact protection. Designed to match factory frost and matte paint finishes effortlessly.',
    badge: 'SATIN /// VELVET FINISH',
    specs: ['Non-Reflective Satin Texture', 'Self-Healing Heat Reactive', 'Dirt & Oil Repellent', '10-Year Warranty'],
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80',
    estimatedTime: '4 - 6 Days',
    startingPrice: '$4,500',
    features: [
      'Converts any glossy finish to a subtle satin sheen',
      'Hides existing paint minor imperfections',
      'Stains and fingerprint resistant',
      'Precision plotter cut edges to prevent peel'
    ]
  },
  {
    id: 'ceramic-coating',
    title: '9H Ceramic Coating',
    subtitle: 'MOLECULAR MATRIX SHIELD',
    category: 'coating',
    description: 'Multi-layer Si02 quartz ceramic formula bonding at a molecular level with the vehicle clear coat. Produces hyper-hydrophobic surface tension and glass-like depth.',
    badge: '9H HARDNESS /// ULTRA GLOSS',
    specs: ['Si02 Quartz Nanotechnology', 'Extreme Water Contact Angle', 'Chemical Resistance pH 2-13', '5-Year Durability'],
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80',
    estimatedTime: '2 - 3 Days',
    startingPrice: '$1,800',
    features: [
      'Unmatched depth of gloss and mirror reflection',
      'Repels mud, dirt, water spots, and environmental grime',
      'Reduces washing frequency by 70%',
      'Includes wheel face and glass hydrophobic treatment'
    ]
  },
  {
    id: 'paint-correction',
    title: 'Precision Paint Correction',
    subtitle: 'SURFACE RECOVERY & OPTICS',
    category: 'correction',
    description: 'Multi-stage machine compounding and jeweling polishing process. Eliminates swirl marks, heavy scratches, oxidation, and buffer trails down to micron level precision.',
    badge: 'MICRON ACCURACY /// JEWELING',
    specs: ['Defect Elimination Up To 95%', 'Multi-Stage Dual Action Polish', 'Paint Thickness Gauge Audit', 'Prep for PPF & Coating'],
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80',
    estimatedTime: '2 - 4 Days',
    startingPrice: '$1,200',
    features: [
      'Digital paint depth measurement before and after',
      'Removes micro-marring, etching, and holograms',
      'Restores factory clarity and metallic flake contrast',
      'Essential foundational step before protective films'
    ]
  },
  {
    id: 'aero-bodykits',
    title: 'Carbon Aero & Bodykits',
    subtitle: 'MOTORSPORT AERODYNAMICS',
    category: 'aero',
    description: 'Bespoke carbon fiber aerodynamic components, custom front splitters, rear diffusers, side skirts, and widebody conversions engineered for performance and aggressive stance.',
    badge: 'AUTOCLAVE CARBON /// BESPOKE',
    specs: ['Pre-Preg 3K Dry Carbon Fiber', 'Wind Tunnel Tested Dynamics', 'Precision OEM Mounting Points', 'UV Clear Coat Protected'],
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    estimatedTime: '5 - 10 Days',
    startingPrice: '$6,500',
    features: [
      'Authentic pre-preg autoclave carbon weave',
      'Custom fitment and panel gap alignment',
      'Functional downforce enhancements',
      'Integrated stealth lighting and mesh intake inserts'
    ]
  }
];

export const BUILD_PROJECTS: BuildProject[] = [
  {
    id: 'project-range-rover-l460',
    title: 'Range Rover L460 Stealth Package',
    clientModel: 'Range Rover SV Long Wheelbase',
    year: '2025',
    category: 'ppf',
    categoryLabel: 'SATIN PPF & CERAMIC',
    tag: 'FEATURED /// SPEC 01.44',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Full body Satin Stealth PPF conversion on OEM Gloss Metallic Black. Complete black-out badging, 9H Ceramic coating on calipers and wheels, custom tinted rear optics.',
    specs: {
      service: 'Full Stealth Satin PPF + Wheel Ceramic',
      filmThickness: '210 Micron TPU',
      warranty: '10 Years Studio Guarantee',
      turnaround: '6 Days',
      location: 'Z LAB Indirapuram'
    },
    beforeAfterImage: {
      before: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      after: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80'
    }
  },
  {
    id: 'project-maybach-s680',
    title: 'Maybach S680 Two-Tone Custom PPF',
    clientModel: 'Mercedes-Maybach S680 V12',
    year: '2024',
    category: 'finishes',
    categoryLabel: 'BESPOKE FINISH',
    tag: 'DUAL TONE /// COLOURED PPF',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Bespoke two-tone application using Satin Anthracite Coloured PPF upper with Clear Gloss protection on lower chassis. Custom coachline pinstripe in hyper-silver.',
    specs: {
      service: 'Dual-Tone Coloured PPF + Pinstripe',
      filmThickness: '215 Micron TPU',
      warranty: '10 Years',
      turnaround: '7 Days',
      location: 'Z LAB Indirapuram'
    }
  },
  {
    id: 'project-g63-brabus',
    title: 'Shadow Series AMG G63 Brabus Aero',
    clientModel: 'Mercedes-AMG G63',
    year: '2025',
    category: 'bodykits',
    categoryLabel: 'AERO & BODYKIT',
    tag: 'WIDEBODY /// DRY CARBON',
    image: 'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Complete Widestar dry carbon conversion with vented bonnet hood, LED roof lightbar, forged carbon rear wing, and full matte stealth PPF defense.',
    specs: {
      service: 'Widestar Carbon Bodykit + Matte PPF',
      filmThickness: '200 Micron',
      warranty: '10 Years',
      turnaround: '8 Days',
      location: 'Z LAB Indirapuram'
    }
  },
  {
    id: 'project-porsche-gt3rs',
    title: 'Porsche 911 GT3 RS Track Spec',
    clientModel: 'Porsche 911 GT3 RS (992)',
    year: '2024',
    category: 'motorsport',
    categoryLabel: 'TRACK & MOTORSPORT',
    tag: 'TRACK SHIELD /// 220 MICRON',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Heavy duty high-impact track protection film applied to front bumper, carbon hood ducts, rear wheel arches, and active rear wing blade. High thermal resistance film.',
    specs: {
      service: 'Full Track Armor PPF + Windshield Defense',
      filmThickness: '220 Micron High Impact TPU',
      warranty: '10 Years',
      turnaround: '5 Days',
      location: 'Z LAB Indirapuram'
    }
  },
  {
    id: 'project-amg-gt-black',
    title: 'AMG GT Black Series Liquid Copper',
    clientModel: 'Mercedes-AMG GT Black Series',
    year: '2024',
    category: 'finishes',
    categoryLabel: 'COLOUR CHANGE PPF',
    tag: 'HYPER-PIGMENT /// COLOURED PPF',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Transformative Liquid Metallic Copper Coloured PPF film application with gloss black contrast roof and wing elements. Zero edge exposure.',
    specs: {
      service: 'Full Coloured PPF Transformation',
      filmThickness: '210 Micron',
      warranty: '10 Years',
      turnaround: '6 Days',
      location: 'Z LAB Indirapuram'
    }
  },
  {
    id: 'project-cleanroom-inspection',
    title: 'Z LAB ISO-7 Cleanroom Preparation',
    clientModel: 'Audi RS6 Avant Dynamic',
    year: '2025',
    category: 'ppf',
    categoryLabel: 'STUDIO PROCESS',
    tag: 'CLEANROOM /// ISO 7',
    image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Decontamination process in the sterile Z LAB inspection bay before custom plotter film application. Includes multi-stage light audit.',
    specs: {
      service: 'Paint Audit + Decontamination + PPF',
      filmThickness: '200 Micron',
      warranty: '10 Years',
      turnaround: '4 Days',
      location: 'Z LAB Indirapuram'
    }
  }
];

export const FACILITY_INFO = {
  name: 'Z LAB INDIRAPURAM',
  subtitle: 'HIGH-PERFORMANCE AUTOMOTIVE DESIGN & PROTECTION LAB',
  coordinates: '28.6416° N, 77.3712° E',
  address: 'Plot 42, Sector 14, Indirapuram, Delhi NCR / Ghaziabad 201014',
  phone: '+91 98765 43210',
  email: 'commissions@studioform.lab',
  hours: 'Mon - Sat: 09:00 - 20:00 IST | Sun: By Private Appointment',
  sections: [
    {
      num: '01',
      title: 'THE STERILE ENVIRONMENT',
      subtitle: 'ISO-7 CERTIFIED CLEANROOM APPLICATION BAYS',
      desc: 'Dust-free positive pressure air filtration system engineered to eliminate micro-particulates during protection film installation.',
      specs: ['HEPA H14 Air Filtration System', 'Constant 22°C Climate & Humidity Control', '360° High CRI 98+ Scangrip Light Rig', 'Anti-Static Decontamination Wash Bays']
    },
    {
      num: '02',
      title: 'HAND-BUILT WORKFLOW',
      subtitle: 'ZERO-BLADE CONTACT & COMPUTER PLOTTER PRECISION',
      desc: 'Precision CAD cut patterns customized down to 0.01mm for every panel contour, eliminating hand-blade contact with vehicle clear coat.',
      specs: ['Graphtec FC9000 Industrial Plotter System', 'DAP Global Vehicle Template Library', 'Tuck & Wrap Edges for Invisible Seams', 'Micro-Torque Panel Disassembly Protocol']
    }
  ]
};
