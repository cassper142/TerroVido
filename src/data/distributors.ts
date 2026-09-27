import type { Locale } from '../i18n/dictionaries';

export type RegionKey = 'EUROPE' | 'ASIA_PACIFIC' | 'AMERICAS' | 'MIDDLE_EAST_AFRICA';

export const REGION_LABELS: Record<RegionKey, Record<Locale, string>> = {
  EUROPE: {
    en: 'Europe',
    de: 'Europa',
  },
  ASIA_PACIFIC: {
    en: 'Asia-Pacific',
    de: 'Asien-Pazifik',
  },
  AMERICAS: {
    en: 'Americas',
    de: 'Amerika',
  },
  MIDDLE_EAST_AFRICA: {
    en: 'Middle East & Africa',
    de: 'Naher Osten & Afrika',
  },
};

export interface Distributor {
  id: string;
  companyName: string;
  countryCode: string;
  countryName: Record<Locale, string>;
  city: Record<Locale, string>;
  address: string;
  phones: string[];
  emails: string[];
  websites: string[];
  lat: number;
  lng: number;
  region: RegionKey;
  isHq?: boolean;
  hqLabel?: Record<Locale, string>;
}

export const DISTRIBUTORS: Distributor[] = [
  {
    id: 'hq-altenburg',
    companyName: 'Tero Vido GmbH',
    countryCode: 'DE',
    countryName: {
      en: 'Germany',
      de: 'Deutschland',
    },
    city: {
      en: 'Altenburg',
      de: 'Altenburg',
    },
    address: 'Industriestraße 28, 04600 Altenburg',
    phones: ['+49 3447 123 450', '+49 3447 123 451'],
    emails: ['info@tero-vido.com', 'sales@tero-vido.com'],
    websites: ['https://tero-vido.com'],
    lat: 50.9905,
    lng: 12.5103,
    region: 'EUROPE',
    isHq: true,
    hqLabel: {
      en: 'Headquarters',
      de: 'Hauptsitz',
    },
  },
  {
    id: 'hq-antalya',
    companyName: 'Tero Vido Turkey Ofisi',
    countryCode: 'TR',
    countryName: {
      en: 'Türkiye',
      de: 'Türkei',
    },
    city: {
      en: 'Antalya',
      de: 'Antalya',
    },
    address: 'Şirinyalı Mah. 1426 Sok. No:12, Muratpaşa, 07160 Antalya',
    phones: ['+90 242 322 00 88', '+90 532 100 44 55'],
    emails: ['turkey@tero-vido.com', 'antalya@tero-vido.com'],
    websites: ['https://tero-vido.com.tr'],
    lat: 36.8969,
    lng: 30.7133,
    region: 'MIDDLE_EAST_AFRICA',
    isHq: true,
    hqLabel: {
      en: 'Turkey Office',
      de: 'Türkei Büro',
    },
  },
  {
    id: 'hq-bizerte',
    companyName: 'Tero Vido Tunisie — Bureau de Bizerte',
    countryCode: 'TN',
    countryName: {
      en: 'Tunisia',
      de: 'Tunesien',
    },
    city: {
      en: 'Bizerte',
      de: 'Bizerte',
    },
    address: 'Zone Industrielle Bizerte Nord, Lot N°12, 7000 Bizerte',
    phones: ['+216 72 300 100', '+216 98 400 200'],
    emails: ['tunisia@tero-vido.com', 'bizerte@tero-vido.com'],
    websites: ['https://tero-vido.tn'],
    lat: 37.2744,
    lng: 9.8739,
    region: 'MIDDLE_EAST_AFRICA',
    isHq: true,
    hqLabel: {
      en: 'Tunisia Office',
      de: 'Tunesien Büro',
    },
  },
  {
    id: 'dekeorburada-istanbul',
    companyName: 'Dekor Burada Jeodezi ve Arkeoloji',
    countryCode: 'TR',
    countryName: {
      en: 'Türkiye',
      de: 'Türkei',
    },
    city: {
      en: 'Istanbul',
      de: 'Istanbul',
    },
    address: 'Kadıköy Mah. Atatürk Cad. No:245, 34714 Kadıköy, Istanbul',
    phones: ['+90 216 450 70 80'],
    emails: ['info@dekorburada.com.tr'],
    websites: ['https://dekorburada.com.tr'],
    lat: 40.9839,
    lng: 29.0212,
    region: 'MIDDLE_EAST_AFRICA',
  },
  {
    id: 'kooistra-holland',
    companyName: 'Kooistra Metaaldetectoren B.V.',
    countryCode: 'NL',
    countryName: {
      en: 'Netherlands',
      de: 'Niederlande',
    },
    city: {
      en: 'Alkmaar',
      de: 'Alkmaar',
    },
    address: 'Heldensingel 147, 1823 AK Alkmaar',
    phones: ['+31 72 548 1988'],
    emails: ['info@kooistra.nl', 'sales@kooistra.nl'],
    websites: ['https://www.kooistra.nl'],
    lat: 52.6316,
    lng: 4.7585,
    region: 'EUROPE',
  },
  {
    id: 'heysung-china',
    companyName: 'Heysung (Beijing) Technologies Ltd.',
    countryCode: 'CN',
    countryName: {
      en: 'China',
      de: 'China',
    },
    city: {
      en: 'Beijing',
      de: 'Peking',
    },
    address: 'Bldg 6, Fengtai Sci-Tech Park, 100070 Beijing',
    phones: ['+86 10 8368 2211'],
    emails: ['info@heysung.cn', 'export@heysung.cn'],
    websites: ['https://heysung.cn'],
    lat: 39.8583,
    lng: 116.2871,
    region: 'ASIA_PACIFIC',
  },
  {
    id: 'geo-france',
    companyName: 'Géo-Détection France S.A.S.',
    countryCode: 'FR',
    countryName: {
      en: 'France',
      de: 'Frankreich',
    },
    city: {
      en: 'Lyon',
      de: 'Lyon',
    },
    address: '15 Rue de l\'Industrie, 69009 Lyon',
    phones: ['+33 4 78 95 10 20'],
    emails: ['contact@geo-detection.fr'],
    websites: ['https://geo-detection.fr'],
    lat: 45.7718,
    lng: 4.8350,
    region: 'EUROPE',
  },
  {
    id: 'detec-italia',
    companyName: 'Detec Italia S.r.l.',
    countryCode: 'IT',
    countryName: {
      en: 'Italy',
      de: 'Italien',
    },
    city: {
      en: 'Bologna',
      de: 'Bologna',
    },
    address: 'Via dell\'Industria 22, 40138 Bologna BO',
    phones: ['+39 051 659 8811'],
    emails: ['info@detecitalia.it'],
    websites: ['https://www.detecitalia.it'],
    lat: 44.4949,
    lng: 11.3426,
    region: 'EUROPE',
  },
  {
    id: 'iberia-gpr',
    companyName: 'Iberia GPR Soluciones Geofísicas S.L.',
    countryCode: 'ES',
    countryName: {
      en: 'Spain',
      de: 'Spanien',
    },
    city: {
      en: 'Madrid',
      de: 'Madrid',
    },
    address: 'Calle de Serrano 121, 28006 Madrid',
    phones: ['+34 91 555 34 22'],
    emails: ['info@iberiagpr.es'],
    websites: ['https://iberiagpr.es'],
    lat: 40.4284,
    lng: -3.6749,
    region: 'EUROPE',
  },
  {
    id: 'geo-uk',
    companyName: 'GeoSurvey UK Ltd.',
    countryCode: 'GB',
    countryName: {
      en: 'United Kingdom',
      de: 'Vereinigtes Königreich',
    },
    city: {
      en: 'Bristol',
      de: 'Bristol',
    },
    address: 'Unit 14, Avonbank Industrial Centre, BS3 4NJ Bristol',
    phones: ['+44 117 300 5000'],
    emails: ['sales@geosurveyuk.co.uk'],
    websites: ['https://www.geosurveyuk.co.uk'],
    lat: 51.4412,
    lng: -2.5633,
    region: 'EUROPE',
  },
  {
    id: 'nordic-detect',
    companyName: 'Nordic Detect AB',
    countryCode: 'SE',
    countryName: {
      en: 'Sweden',
      de: 'Schweden',
    },
    city: {
      en: 'Gothenburg',
      de: 'Göteborg',
    },
    address: 'Södra Gullbergs Strandgata 13, 411 03 Göteborg',
    phones: ['+46 31 788 08 00'],
    emails: ['info@nordicdetect.se'],
    websites: ['https://nordicdetect.se'],
    lat: 57.7089,
    lng: 11.9746,
    region: 'EUROPE',
  },
  {
    id: 'poland-geo',
    companyName: 'Geoskop Polska Sp. z o.o.',
    countryCode: 'PL',
    countryName: {
      en: 'Poland',
      de: 'Polen',
    },
    city: {
      en: 'Warsaw',
      de: 'Warschau',
    },
    address: 'ul. Wolska 56, 01-148 Warszawa',
    phones: ['+48 22 400 66 88'],
    emails: ['kontakt@geoskop.pl'],
    websites: ['https://geoskop.pl'],
    lat: 52.2394,
    lng: 20.9699,
    region: 'EUROPE',
  },
  {
    id: 'alpine-sensors',
    companyName: 'Alpine Sensors GmbH',
    countryCode: 'AT',
    countryName: {
      en: 'Austria',
      de: 'Österreich',
    },
    city: {
      en: 'Salzburg',
      de: 'Salzburg',
    },
    address: 'Itzlinger Höhe 19, 5020 Salzburg',
    phones: ['+43 662 887 000'],
    emails: ['office@alpinesensors.at'],
    websites: ['https://alpinesensors.at'],
    lat: 47.8111,
    lng: 13.0332,
    region: 'EUROPE',
  },
  {
    id: 'swiss-geo',
    companyName: 'SwissGeo Detection AG',
    countryCode: 'CH',
    countryName: {
      en: 'Switzerland',
      de: 'Schweiz',
    },
    city: {
      en: 'Zürich',
      de: 'Zürich',
    },
    address: 'Technoparkstrasse 1, 8005 Zürich',
    phones: ['+41 44 555 14 20'],
    emails: ['contact@swissgeo.ch'],
    websites: ['https://www.swissgeo.ch'],
    lat: 47.3904,
    lng: 8.5155,
    region: 'EUROPE',
  },
  {
    id: 'east-geo-hungary',
    companyName: 'EastGeo Kft.',
    countryCode: 'HU',
    countryName: {
      en: 'Hungary',
      de: 'Ungarn',
    },
    city: {
      en: 'Budapest',
      de: 'Budapest',
    },
    address: 'Váci út 114, 1133 Budapest',
    phones: ['+36 1 344 6000'],
    emails: ['info@eastgeo.hu'],
    websites: ['https://eastgeo.hu'],
    lat: 47.5339,
    lng: 19.0749,
    region: 'EUROPE',
  },
  {
    id: 'atlas-cz',
    companyName: 'Atlas Detekce s.r.o.',
    countryCode: 'CZ',
    countryName: {
      en: 'Czechia',
      de: 'Tschechien',
    },
    city: {
      en: 'Prague',
      de: 'Prag',
    },
    address: 'Radlická 3294/10, 150 00 Praha 5',
    phones: ['+420 272 001 880'],
    emails: ['info@atlasdetekce.cz'],
    websites: ['https://www.atlasdetekce.cz'],
    lat: 50.0737,
    lng: 14.3995,
    region: 'EUROPE',
  },
  {
    id: 'csi-greece',
    companyName: 'CSI Hellas Geophysical S.A.',
    countryCode: 'GR',
    countryName: {
      en: 'Greece',
      de: 'Griechenland',
    },
    city: {
      en: 'Athens',
      de: 'Athen',
    },
    address: 'Kifisias Avenue 152, 152 31 Chalandri, Athens',
    phones: ['+30 210 680 4000'],
    emails: ['sales@csihellas.gr'],
    websites: ['https://www.csihellas.gr'],
    lat: 38.0151,
    lng: 23.7977,
    region: 'EUROPE',
  },
  {
    id: 'riyadh-saudi',
    companyName: 'Saudi Geophysical Equipment Co.',
    countryCode: 'SA',
    countryName: {
      en: 'Saudi Arabia',
      de: 'Saudi-Arabien',
    },
    city: {
      en: 'Riyadh',
      de: 'Riad',
    },
    address: 'King Abdullah District, Al Urubah Rd, Bldg 18, 13326 Riyadh',
    phones: ['+966 11 455 00 10'],
    emails: ['info@saudigeo.sa'],
    websites: ['https://saudigeo.sa'],
    lat: 24.7136,
    lng: 46.6753,
    region: 'MIDDLE_EAST_AFRICA',
  },
  {
    id: 'dubai-fze',
    companyName: 'Archeo Gulf FZE',
    countryCode: 'AE',
    countryName: {
      en: 'United Arab Emirates',
      de: 'Vereinigte Arabische Emirate',
    },
    city: {
      en: 'Sharjah',
      de: 'Sharjah',
    },
    address: 'SAIF Zone, Warehouse M-03, 7461 Sharjah',
    phones: ['+971 6 555 40 12'],
    emails: ['sales@archeogulf.ae'],
    websites: ['https://archeogulf.ae'],
    lat: 25.3465,
    lng: 55.4141,
    region: 'MIDDLE_EAST_AFRICA',
  },
  {
    id: 'cairo-egypt',
    companyName: 'Delta Geo Instruments S.A.E.',
    countryCode: 'EG',
    countryName: {
      en: 'Egypt',
      de: 'Ägypten',
    },
    city: {
      en: 'Cairo',
      de: 'Kairo',
    },
    address: '8 El-Maahad El-Eshteraky St., Dokki, 12311 Giza, Cairo',
    phones: ['+20 2 3337 4000'],
    emails: ['sales@deltageo.com.eg'],
    websites: ['https://www.deltageo.com.eg'],
    lat: 30.0444,
    lng: 31.2357,
    region: 'MIDDLE_EAST_AFRICA',
  },
  {
    id: 'lagos-nigeria',
    companyName: 'WestAfro Survey Systems Ltd.',
    countryCode: 'NG',
    countryName: {
      en: 'Nigeria',
      de: 'Nigeria',
    },
    city: {
      en: 'Lagos',
      de: 'Lagos',
    },
    address: 'Plot 22, Ligali Ayorinde St., Victoria Island, 101241 Lagos',
    phones: ['+234 1 448 0088'],
    emails: ['info@westafrosurvey.ng'],
    websites: ['https://westafrosurvey.ng'],
    lat: 6.4311,
    lng: 3.4373,
    region: 'MIDDLE_EAST_AFRICA',
  },
  {
    id: 'cape-sa',
    companyName: 'Cape Geo Supplies (Pty) Ltd.',
    countryCode: 'ZA',
    countryName: {
      en: 'South Africa',
      de: 'Südafrika',
    },
    city: {
      en: 'Cape Town',
      de: 'Kapstadt',
    },
    address: '14 Montague Gardens, 7441 Cape Town',
    phones: ['+27 21 510 4440'],
    emails: ['sales@capegeo.co.za'],
    websites: ['https://www.capegeo.co.za'],
    lat: -33.8472,
    lng: 18.5099,
    region: 'MIDDLE_EAST_AFRICA',
  },
  {
    id: 'tokyo-japan',
    companyName: 'Nihon GeoSensing Co., Ltd.',
    countryCode: 'JP',
    countryName: {
      en: 'Japan',
      de: 'Japan',
    },
    city: {
      en: 'Tokyo',
      de: 'Tokio',
    },
    address: '5-1-2-1001 Ginza, Chuo-ku, 104-0061 Tokyo',
    phones: ['+81 3 3571 0050'],
    emails: ['info@nihon-geo.co.jp'],
    websites: ['https://www.nihon-geo.co.jp'],
    lat: 35.6724,
    lng: 139.7640,
    region: 'ASIA_PACIFIC',
  },
  {
    id: 'sydney-au',
    companyName: 'Pacific GPR & Detection Pty Ltd.',
    countryCode: 'AU',
    countryName: {
      en: 'Australia',
      de: 'Australien',
    },
    city: {
      en: 'Sydney',
      de: 'Sydney',
    },
    address: 'Unit 11, 415 Bourke Rd., Alexandria NSW 2015, Sydney',
    phones: ['+61 2 9699 4000'],
    emails: ['sales@pacificgpr.com.au'],
    websites: ['https://www.pacificgpr.com.au'],
    lat: -33.9133,
    lng: 151.1929,
    region: 'ASIA_PACIFIC',
  },
  {
    id: 'us-miami',
    companyName: 'TerraScan USA Inc.',
    countryCode: 'US',
    countryName: {
      en: 'United States',
      de: 'Vereinigte Staaten',
    },
    city: {
      en: 'Miami, FL',
      de: 'Miami, FL',
    },
    address: '7900 NW 7th St., Suite 218, Miami, FL 33126',
    phones: ['+1 305 700 1030', '+1 800 350 0077'],
    emails: ['sales@terrascanusa.com'],
    websites: ['https://terrascanusa.com'],
    lat: 25.7907,
    lng: -80.2500,
    region: 'AMERICAS',
  },
  {
    id: 'mexico-city',
    companyName: 'México Geotecnia de Vanguardia S.A.',
    countryCode: 'MX',
    countryName: {
      en: 'Mexico',
      de: 'Mexiko',
    },
    city: {
      en: 'Mexico City',
      de: 'Mexiko-Stadt',
    },
    address: 'Circuito Interior 148, Álvaro Obregón, 01120 Ciudad de México',
    phones: ['+52 55 5250 0080'],
    emails: ['ventas@mexicogeotecnia.mx'],
    websites: ['https://www.mexicogeotecnia.mx'],
    lat: 19.3886,
    lng: -99.1731,
    region: 'AMERICAS',
  },
  {
    id: 'br-sao-paulo',
    companyName: 'GeoVision Brasil Distribuidora Ltda.',
    countryCode: 'BR',
    countryName: {
      en: 'Brazil',
      de: 'Brasilien',
    },
    city: {
      en: 'São Paulo',
      de: 'São Paulo',
    },
    address: 'Rua Maria Martins 112, 2º andar, Pinheiros, 05443-020 São Paulo/SP',
    phones: ['+55 11 3060 0090'],
    emails: ['contato@geovisionbrasil.com.br'],
    websites: ['https://www.geovisionbrasil.com.br'],
    lat: -23.5629,
    lng: -46.6862,
    region: 'AMERICAS',
  },
] as const;

export const DISTRIBUTORS_BY_ID: Record<string, Distributor> = DISTRIBUTORS.reduce(
  (acc, d) => {
    acc[d.id] = d;
    return acc;
  },
  {} as Record<string, Distributor>,
);

export const DISTRIBUTORS_BY_REGION: Record<RegionKey, Distributor[]> = DISTRIBUTORS.reduce(
  (acc, d) => {
    if (!acc[d.region]) acc[d.region] = [];
    acc[d.region].push(d);
    return acc;
  },
  {} as Record<RegionKey, Distributor[]>,
);

export const getCountryName = (countryCode: string, locale: Locale): string => {
  const d = DISTRIBUTORS.find((x) => x.countryCode === countryCode);
  return d?.countryName[locale] ?? countryCode;
};

export const getRegionLabel = (region: RegionKey, locale: Locale): string =>
  REGION_LABELS[region][locale];

export type { Locale };
