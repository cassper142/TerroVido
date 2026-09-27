import type { Locale } from '../i18n/dictionaries';

export type ProductSlug =
  | '3d-system'
  | 'tvpi-series'
  | 'expander'
  | 'construction-series'
  | 'nks-1000-gpr'
  | 'xseries';

export interface TechnicalSpecs {
  sensor: string;
  battery: string;
  runtime: string;
  charge: string;
  weight: string;
  ip: string;
  wlan: string;
  languages: Record<Locale, string>;
  depthMaxMeters: number;
}

export interface ProductEdition {
  id: string;
  label: string;
  included: Record<Locale, string[]>;
}

export interface Product {
  slug: ProductSlug;
  order: number;
  label: string;
  titles: Record<Locale, string>;
  shortDescriptions: Record<Locale, string>;
  features: Record<Locale, string[]>;
  technicalSpecs: TechnicalSpecs;
  editions: ProductEdition[];
  heroPrompt: string;
}

export const PRODUCTS: Product[] = [
  {
    slug: '3d-system',
    order: 1,
    label: '3D System',
    titles: {
      en: 'Tero Vido 3D System',
      de: 'Tero Vido 3D System',
    },
    shortDescriptions: {
      en: 'High-precision 3D measuring device for detection and exact localisation of anomalies underground — engineered for professional field use.',
      de: 'Hochpräzises 3D-Messgerät zur Detektion und exakten Lokalisierung von Anomalien im Erdreich — entwickelt für den professionellen Feldeinsatz.',
    },
    features: {
      en: [
        '3-axis digital sensor technology',
        'Real-time 3D visualisation on tablet',
        'Depth measurement up to 18 meters',
        'Interchangeable probe system (Vertical, H50, H100)',
        '10 user interface languages',
        'Robust Peli transport case included',
        'Made in Germany',
      ],
      de: [
        '3-Achsen Digitale Sensortechnologie',
        'Echtzeit-3D-Visualisierung auf Tablet',
        'Tiefenmessung bis 18 Meter',
        'Wechselsondensystem (Vertical, H50, H100)',
        '10 Benutzeroberflächensprachen',
        'Robuster Peli-Transportkoffer inklusive',
        'Made in Germany',
      ],
    },
    technicalSpecs: {
      sensor: '3-axis digital sensor',
      battery: 'LiPo 800 mAh',
      runtime: '15 h',
      charge: '1 h mains / 4 h car',
      weight: '2.4 kg',
      ip: 'IP54',
      wlan: '2.4 GHz USB dongle',
      languages: {
        en: 'EN, DE, FR, ES, IT, PT, RU, TR, AR, ZH',
        de: 'EN, DE, FR, ES, IT, PT, RU, TR, AR, ZH',
      },
      depthMaxMeters: 18,
    },
    editions: [
      {
        id: 'basic',
        label: 'Basic',
        included: {
          en: [
            '3D System control unit',
            'Vertical 85 cm probe',
            'LiPo battery 800 mAh',
            '2.4 GHz USB dongle',
            'Software license (Win/Android/iOS)',
            'Transport case',
          ],
          de: [
            '3D System Steuergerät',
            'Vertical 85 cm Sonde',
            'LiPo Akku 800 mAh',
            '2.4 GHz USB Dongle',
            'Softwarelizenz (Win/Android/iOS)',
            'Transportkoffer',
          ],
        },
      },
      {
        id: 'basic-plus',
        label: 'Basic Plus',
        included: {
          en: [
            'Everything in Basic',
            'H50 50 cm horizontal probe',
            'H100 100 cm horizontal probe',
            'Spare battery',
            'External charger',
          ],
          de: [
            'Alles aus Basic',
            'H50 50 cm Horizontal-Sonde',
            'H100 100 cm Horizontal-Sonde',
            'Ersatzakku',
            'Externes Ladegerät',
          ],
        },
      },
      {
        id: 'pro',
        label: 'Pro',
        included: {
          en: [
            'Everything in Basic Plus',
            'Integrated temperature sensor',
            'Extended 2-year warranty',
            'Priority technical support',
            'Peli Air premium case',
            'On-site training (1 day)',
          ],
          de: [
            'Alles aus Basic Plus',
            'Integrierter Temperatursensor',
            'Erweiterte 2-Jahres-Garantie',
            'Priorisierter technischer Support',
            'Peli Air Premium-Koffer',
            'Vor-Ort-Schulung (1 Tag)',
          ],
        },
      },
    ],
    heroPrompt:
      'Tero Vido 3D System professional ground detection device standing upright on grassy field, tablet display showing 3D subsurface scan, golden hour light, modern product photography, depth of field',
  },
  {
    slug: 'tvpi-series',
    order: 2,
    label: 'TVPI Series',
    titles: {
      en: 'TVPI Series — Pulse Induction 3D',
      de: 'TVPI Serie — Pulse Induction 3D',
    },
    shortDescriptions: {
      en: 'Pulse induction 3D detector series with 120 Hz coil technology — designed for deep targets and highly mineralised soils.',
      de: 'Pulse-Induktions-3D-Detektor-Serie mit 120-Hz-Spulentechnologie — entwickelt für tiefe Ziele und stark mineralisierte Böden.',
    },
    features: {
      en: [
        '120 Hz pulse induction coil technology',
        '3D multi-coil scanning (35×40, 95×95, 95×180)',
        '3.6 MHz MCU for real-time processing',
        'LiFePO4 battery for long field days',
        '2.4 GHz WLAN 11 Mbps connectivity',
        'CE / FCC / WEEE / ICC certified',
      ],
      de: [
        '120-Hz-Pulse-Induktions-Spulentechnologie',
        '3D-Multi-Spulen-Scanning (35×40, 95×95, 95×180)',
        '3.6 MHz MCU für Echtzeitverarbeitung',
        'LiFePO4-Akku für lange Einsatztage',
        '2.4 GHz WLAN 11 Mbps Konnektivität',
        'CE / FCC / WEEE / ICC zertifiziert',
      ],
    },
    technicalSpecs: {
      sensor: 'PI 120 Hz coil',
      battery: 'LiFePO4 1100 mAh',
      runtime: '4 h',
      charge: '2 h',
      weight: '3.1 kg',
      ip: 'IP44',
      wlan: '2.4 GHz WLAN 11 Mbps',
      languages: {
        en: 'EN, DE, FR, ES, IT, PT, RU, TR, AR',
        de: 'EN, DE, FR, ES, IT, PT, RU, TR, AR',
      },
      depthMaxMeters: 12,
    },
    editions: [
      {
        id: 'standard',
        label: 'Standard',
        included: {
          en: [
            'TVPI control unit',
            '35×40 frame coil Ø40 cm',
            'LiFePO4 battery 1100 mAh',
            'WLAN module',
            'Software license',
            'Shoulder strap',
          ],
          de: [
            'TVPI Steuergerät',
            '35×40 Rahmen-Spulen Ø40 cm',
            'LiFePO4 Akku 1100 mAh',
            'WLAN-Modul',
            'Softwarelizenz',
            'Schultergurt',
          ],
        },
      },
      {
        id: 'professional',
        label: 'Professional',
        included: {
          en: [
            'Everything in Standard',
            '95×95 cm coil frame',
            'Spare LiFePO4 battery',
            'Car charger',
            'Protective hard case',
          ],
          de: [
            'Alles aus Standard',
            '95×95 cm Spulenrahmen',
            'Ersatz LiFePO4 Akku',
            'KFZ-Ladegerät',
            'Schutz-Hartkoffer',
          ],
        },
      },
      {
        id: 'premium',
        label: 'Premium',
        included: {
          en: [
            'Everything in Professional',
            '95×180 cm large coil frame',
            'Extended 2-year warranty',
            'Advanced data export module',
            'On-site training (2 days)',
          ],
          de: [
            'Alles aus Professional',
            '95×180 cm großer Spulenrahmen',
            'Erweiterte 2-Jahres-Garantie',
            'Erweitertes Datenexport-Modul',
            'Vor-Ort-Schulung (2 Tage)',
          ],
        },
      },
    ],
    heroPrompt:
      'Tero TVPI Series pulse induction 3D detector with large 95x180 coil frame laid out on archaeology excavation site, soil visible, professional field equipment, sunlight, documentary product shot',
  },
  {
    slug: 'expander',
    order: 3,
    label: 'Expander',
    titles: {
      en: 'Tero Vido Expander',
      de: 'Tero Vido Expander',
    },
    shortDescriptions: {
      en: 'Next-generation compact 3D underground detector — lightweight, tablet-operated, with extendable probes and integrated infrared thermometer.',
      de: 'Kompakter 3D-Bodendetektor der nächsten Generation — leicht, tablet-gesteuert, mit ausziehbaren Sonden und integriertem Infrarot-Thermometer.',
    },
    features: {
      en: [
        '3-axis digital sensor in compact form factor',
        'Extendable probes (50 cm – 90 cm)',
        'Integrated infrared thermometer',
        'Tablet-only operation via OpenGL software',
        'Cross-platform: Windows / Android / iOS',
        'Peli rugged case included',
        'Splashproof construction',
      ],
      de: [
        '3-Achsen-Digitalsensor im kompakten Format',
        'Ausziehbare Sonden (50 cm – 90 cm)',
        'Integriertes Infrarot-Thermometer',
        'Rein tablet-gesteuert per OpenGL-Software',
        'Plattformübergreifend: Windows / Android / iOS',
        'Peli-Robustkoffer inklusive',
        'Spritzwassergeschützte Konstruktion',
      ],
    },
    technicalSpecs: {
      sensor: '3-axis digital sensor',
      battery: 'LiFePO4 1100 mAh',
      runtime: '6 h',
      charge: '6 h',
      weight: '1.6 kg',
      ip: 'IP00 splashproof',
      wlan: '2.4 GHz WLAN 11 Mbps',
      languages: {
        en: 'EN, DE, FR, ES, IT, PT, RU, TR',
        de: 'EN, DE, FR, ES, IT, PT, RU, TR',
      },
      depthMaxMeters: 10,
    },
    editions: [
      {
        id: 'standard',
        label: 'Standard',
        included: {
          en: [
            'Expander detector unit',
            'Extendable probe 50–90 cm',
            'LiFePO4 battery 1100 mAh',
            'USB-C charging cable',
            'OpenGL tablet app license',
            'Peli case',
          ],
          de: [
            'Expander Detektoreinheit',
            'Ausziehbare Sonde 50–90 cm',
            'LiFePO4 Akku 1100 mAh',
            'USB-C Ladekabel',
            'OpenGL Tablet-App Lizenz',
            'Peli-Koffer',
          ],
        },
      },
      {
        id: 'gold',
        label: 'Gold',
        included: {
          en: [
            'Everything in Standard',
            'Infrared thermometer module (pre-installed)',
            'Rugged 10" tablet pre-configured',
            'Extended battery pack',
            'Spare probe tips (set of 4)',
            'Priority support 12 months',
          ],
          de: [
            'Alles aus Standard',
            'Infrarot-Thermometer-Modul (vorinstalliert)',
            'Robustes 10"-Tablet vorkonfiguriert',
            'Erweitertes Akku-Pack',
            'Ersatz-Sondenspitzen (4er-Set)',
            'Priorisierter Support 12 Monate',
          ],
        },
      },
    ],
    heroPrompt:
      'Tero Vido Expander compact 3D detector extended probe held by hand over building rubble on construction site, infrared thermometer visible, rugged tablet next to it, daylight, editorial product photo',
  },
  {
    slug: 'construction-series',
    order: 4,
    label: 'Construction Series',
    titles: {
      en: 'Tero Vido Construction Series',
      de: 'Tero Vido Construction Serie',
    },
    shortDescriptions: {
      en: 'Professional ground survey detectors dedicated to construction sites — locate rebar, pipes, cables and voids before you cut or drill. Learn more at terovido-construction.de.',
      de: 'Professionelle Bodenscanner-Detektoren für Baustellen — orten Sie Bewehrung, Rohre, Kabel und Hohlräume vor dem Schneiden oder Bohren. Mehr auf terovido-construction.de.',
    },
    features: {
      en: [
        'Optimised for construction site environments',
        'Rebar, pipe, cable and void detection',
        'Non-destructive subsurface surveying',
        'Integrated with construction workflows',
        'Compliant with DIN construction standards',
        'Dedicated construction software suite',
      ],
      de: [
        'Optimiert für Baustellenumgebungen',
        'Bewehrungs-, Rohr-, Kabel- und Hohlraumdetektion',
        'Zerstörungsfreie Untergrundvermessung',
        'Integriert in Bauabläufe',
        'Konform zu DIN-Baunormen',
        'Eigenständige Bau-Software-Suite',
      ],
    },
    technicalSpecs: {
      sensor: 'Multi-mode array sensor',
      battery: 'Li-Ion 5200 mAh',
      runtime: '10 h',
      charge: '3 h',
      weight: '2.9 kg',
      ip: 'IP65',
      wlan: '2.4/5 GHz dual-band WLAN',
      languages: {
        en: 'EN, DE, FR, ES, IT, PL, NL, RU',
        de: 'EN, DE, FR, ES, IT, PL, NL, RU',
      },
      depthMaxMeters: 3,
    },
    editions: [
      {
        id: 'single',
        label: 'Single',
        included: {
          en: [
            'Construction Series detector',
            'Rechargeable Li-Ion battery',
            'Construction survey software license',
            'Heavy-duty site case',
            'Calibration certificate',
            'Access to terovido-construction.de portal',
          ],
          de: [
            'Construction Serie Detektor',
            'Wiederaufladbarer Li-Ion-Akku',
            'Bauvermessungs-Softwarelizenz',
            'Stabiler Baustellenkoffer',
            'Kalibrierzertifikat',
            'Zugang zum terovido-construction.de Portal',
          ],
        },
      },
    ],
    heroPrompt:
      'Tero Vido Construction Series ground scanner on concrete construction slab with visible rebar marks, safety helmet in background, building site, industrial product photography',
  },
  {
    slug: 'nks-1000-gpr',
    order: 5,
    label: 'NKS-1000 3D GPR',
    titles: {
      en: 'NKS-1000 3D GPR System',
      de: 'NKS-1000 3D GPR System',
    },
    shortDescriptions: {
      en: 'Ground Penetrating Radar system for metallic and non-metallic targets — detects tunnels, cavities, pipes and cables in a single pass.',
      de: 'Bodenradar-System für metallische und nicht-metallische Ziele — detektiert Tunnel, Hohlräume, Rohre und Kabel in einem einzigen Durchgang.',
    },
    features: {
      en: [
        'Dual-frequency GPR array antenna',
        'Detects metallic AND non-metallic objects',
        'Tunnel and large cavity detection',
        'Pipe and cable mapping (water, gas, power, fibre)',
        'High-resolution 3D depth slices',
        'Real-time B-scan and C-scan views',
        'Sub-centimetre positioning accuracy',
      ],
      de: [
        'Zweifrequenz-GPR-Array-Antenne',
        'Detektiert metallische UND nicht-metallische Objekte',
        'Tunnel- und große Hohlraumdetektion',
        'Rohr- und Kabelkartierung (Wasser, Gas, Strom, Faser)',
        'Hochauflösende 3D-Tiefenschnitte',
        'Echtzeit-B-Scan- und C-Scan-Ansichten',
        'Positionierungsgenauigkeit unter einem Zentimeter',
      ],
    },
    technicalSpecs: {
      sensor: 'Dual-frequency GPR array',
      battery: 'LiFePO4 2200 mAh',
      runtime: '8 h',
      charge: '4 h',
      weight: '4.7 kg',
      ip: 'IP54',
      wlan: '2.4 GHz / 5 GHz WLAN + GNSS',
      languages: {
        en: 'EN, DE, FR, ES, IT, PT, RU, AR, ZH, JA',
        de: 'EN, DE, FR, ES, IT, PT, RU, AR, ZH, JA',
      },
      depthMaxMeters: 6,
    },
    editions: [
      {
        id: 'single',
        label: 'Single',
        included: {
          en: [
            'NKS-1000 GPR control and antenna unit',
            'LiFePO4 2200 mAh battery',
            'GNSS receiver module',
            '3D GPR processing software',
            'Report generation module',
            'Roller transport case',
          ],
          de: [
            'NKS-1000 GPR Steuer- und Antenneneinheit',
            'LiFePO4 2200 mAh Akku',
            'GNSS-Empfängermodul',
            '3D GPR-Verarbeitungssoftware',
            'Berichtserstellungs-Modul',
            'Roll-Transportkoffer',
          ],
        },
      },
    ],
    heroPrompt:
      'NKS-1000 3D GPR ground penetrating radar being pushed on wheels along pavement, subsurface cross-section visualization on screen showing pipes and cavities, professional surveying scene',
  },
  {
    slug: 'xseries',
    order: 6,
    label: 'Xseries',
    titles: {
      en: 'Tero Vido Xseries — Premium Deep Scan',
      de: 'Tero Vido Xseries — Premium Deep Scan',
    },
    shortDescriptions: {
      en: 'Flagship new-generation premium deep-scan platform — the most advanced Tero Vido detection system, combining multi-sensor fusion with AI-assisted interpretation.',
      de: 'Flaggschiff-Plattform der nächsten Generation für Premium-Tiefenscans — das fortschrittlichste Tero Vido Detektionssystem mit Multi-Sensor-Fusion und KI-gestützter Interpretation.',
    },
    features: {
      en: [
        'Multi-sensor fusion (induction + GPR + capacitive)',
        'AI-assisted signal interpretation',
        'Extended deep-range detection architecture',
        'On-device neural processing unit',
        '4K rugged detachable display',
        'Hot-swappable modular batteries',
        'Cloud sync and mission planning',
        'Lifetime software updates',
      ],
      de: [
        'Multi-Sensor-Fusion (Induktion + GPR + kapazitiv)',
        'KI-gestützte Signalinterpretation',
        'Erweiterte Tiefenreichweiten-Detektionsarchitektur',
        'On-Device Neural Processing Unit',
        '4K robustes abnehmbares Display',
        'Hot-Swap-fähige modulare Akkus',
        'Cloud-Synchronisation und Missionsplanung',
        'Lebenslange Software-Updates',
      ],
    },
    technicalSpecs: {
      sensor: 'Multi-sensor fusion platform',
      battery: 'Modular LiFePO4 2×2200 mAh',
      runtime: '12 h (dual pack)',
      charge: '2 h fast charge',
      weight: '3.8 kg',
      ip: 'IP67',
      wlan: 'Wi-Fi 6 + BT5 + 4G LTE + GNSS RTK',
      languages: {
        en: 'EN, DE, FR, ES, IT, PT, RU, TR, AR, ZH, JA, KO',
        de: 'EN, DE, FR, ES, IT, PT, RU, TR, AR, ZH, JA, KO',
      },
      depthMaxMeters: 25,
    },
    editions: [
      {
        id: 'single',
        label: 'Single',
        included: {
          en: [
            'Xseries control unit with NPU',
            'Modular deep-scan probe',
            'Dual hot-swap LiFePO4 batteries',
            '4K detachable rugged display',
            'AI interpretation license',
            'Cloud mission portal (12 months)',
            'Premium aluminium flight case',
            'Onboarding training (2 days)',
          ],
          de: [
            'Xseries Steuergerät mit NPU',
            'Modulare Deep-Scan-Sonde',
            'Dual Hot-Swap LiFePO4 Akkus',
            '4K abnehmbares robustes Display',
            'KI-Interpretations-Lizenz',
            'Cloud Missionsportal (12 Monate)',
            'Premium Aluminium Flight-Case',
            'Onboarding-Schulung (2 Tage)',
          ],
        },
      },
    ],
    heroPrompt:
      'Tero Vido Xseries premium deep scan detector standing on mountain ridge at dramatic sunset, futuristic carbon fibre design, glowing status LEDs, detachable 4K display, cinematic hero shot',
  },
] as const;

export const PRODUCTS_BY_SLUG: Record<ProductSlug, Product> = PRODUCTS.reduce(
  (acc, product) => {
    acc[product.slug] = product;
    return acc;
  },
  {} as Record<ProductSlug, Product>,
);

export type { Locale };
