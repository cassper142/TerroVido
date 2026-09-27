import type { Locale } from '../i18n/dictionaries';

export type PostCategoryKey =
  | 'technology'
  | 'field_notes'
  | 'inside'
  | 'case_study'
  | 'dealer_spotlight'
  | 'partners'
  | 'guide';

export const POST_CATEGORIES: Record<PostCategoryKey, Record<Locale, string>> = {
  technology: {
    en: 'Technology',
    de: 'Technologie',
  },
  field_notes: {
    en: 'Field Notes',
    de: 'Feldnotizen',
  },
  inside: {
    en: 'Inside Tero Vido',
    de: 'Inside Tero Vido',
  },
  case_study: {
    en: 'Case Study',
    de: 'Fallstudie',
  },
  dealer_spotlight: {
    en: 'Dealer Spotlight',
    de: 'Händler-Porträt',
  },
  partners: {
    en: 'Partners',
    de: 'Partner',
  },
  guide: {
    en: 'Guide',
    de: 'Ratgeber',
  },
};

export type ContentBlockType = 'paragraph' | 'heading' | 'quote' | 'list';

export interface ContentBlock {
  type: ContentBlockType;
  text: Record<Locale, string>;
  items?: Record<Locale, string[]>;
}

export interface Post {
  slug: string;
  dateISO: string;
  category: PostCategoryKey;
  authorName: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  imagePrompt: string;
  readingTimeMinutes: number;
  tags: Record<Locale, string[]>;
  contentBlocks: ContentBlock[];
}

export const POSTS: Post[] = [
  {
    slug: 'reading-the-ground',
    dateISO: '2026-06-04',
    category: 'technology',
    authorName: 'Dr. Lena Hartmann',
    title: {
      en: 'Reading the ground: what signal really means',
      de: 'Den Boden lesen: was Signal wirklich bedeutet',
    },
    excerpt: {
      en: 'Behind every blip on screen stands a physics pipeline — sensors, filters and signal processing stacked over 25 years of Tero Vido engineering. We explain the journey from raw voltage to a 3D map you can trust.',
      de: 'Hinter jedem Ausschlag auf dem Display steht eine Physik-Pipeline — Sensoren, Filter und Signalverarbeitung, aufgebaut über 25 Jahre Tero Vido Ingenieurskunst. Wir erklären den Weg von der Rohspannung zur 3D-Karte, der Sie vertrauen können.',
    },
    imagePrompt:
      'close-up of hands operating a Tero Vido 3D tablet outdoors, colourful signal processing visualisation with depth layers overlayed, sun dappled grass, scientific documentation style, shallow depth of field',
    readingTimeMinutes: 8,
    tags: {
      en: ['Signal processing', '3D imaging', 'Sensors', 'Engineering'],
      de: ['Signalverarbeitung', '3D-Visualisierung', 'Sensorik', 'Ingenieurwesen'],
    },
    contentBlocks: [
      {
        type: 'paragraph',
        text: {
          en: 'The first thing every new user notices is how clean Tero Vido displays look. What they do not see is the stack of mathematics, firmware logic and analogue design that turns the faint disturbances of a copper coin at 2.5 m into a crisp green cube on screen.',
          de: 'Das Erste, was jeder neue Nutzer bemerkt, ist, wie sauber Tero Vido Displays aussehen. Was er nicht sieht: der Stapel aus Mathematik, Firmware-Logik und Analogdesign, der die schwachen Störungen einer Kupfermünze in 2,5 m Tiefe in einen knackigen grünen Würfel auf dem Bildschirm verwandelt.',
        },
      },
      {
        type: 'heading',
        text: {
          en: 'From coil voltage to colour',
          de: 'Von der Spulenspannung zur Farbe',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'Our 3D System sweeps three orthogonal coils across the ground 800 times per second. The voltage differential tells the MCU whether a single spatial voxel contains more or less conductive material than the reference earth. That is the raw data: a table of integers, nothing more.',
          de: 'Unser 3D System tastet drei orthogonale Spulen 800 Mal pro Sekunde über den Boden ab. Das Spannungsdifferential sagt dem MCU, ob ein einzelnes räumliches Voxel mehr oder weniger leitfähiges Material als die Referenz-Erde enthält. Das sind die Rohdaten: eine Tabelle aus Ganzzahlen, nicht mehr.',
        },
      },
      {
        type: 'list',
        text: {
          en: 'Four stages of signal clean-up run on-board before your tablet ever sees a frame:',
          de: 'Vier Stufen der Signalbereinigung laufen on-board, bevor Ihr Tablet überhaupt ein Frame sieht:',
        },
        items: {
          en: [
            'Band-pass filter tuned to the coil harmonics',
            'Adaptive baseline compensation per terrain',
            'Median noise suppression (7-point kernel)',
            'Target-shape discrimination classifier',
          ],
          de: [
            'Bandpassfilter, abgestimmt auf die Spulenharmonischen',
            'Adaptive Basiskompensation je nach Gelände',
            'Median-Rauschunterdrückung (7-Punkt-Kernel)',
            'Zielform-Unterscheidungs-Klassifikator',
          ],
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'Only after these four stages do we stream a compressed point cloud to the tablet. OpenGL on the device then interpolates depth slices, applies colour lookup tables and renders the volumetric cube in real time.',
          de: 'Erst nach diesen vier Stufen streamen wir eine komprimierte Point-Cloud zum Tablet. OpenGL auf dem Gerät interpoliert dann Tiefenschnitte, wendet Farb-Lookup-Tabellen an und rendert den Volumenwürfel in Echtzeit.',
        },
      },
      {
        type: 'quote',
        text: {
          en: '“A detector is only honest if you understand exactly what it hides from you. We hide noise — never signal.”',
          de: '„Ein Detektor ist nur dann ehrlich, wenn Sie genau verstehen, was er vor Ihnen verbirgt. Wir verbergen Rauschen — nie Signal.“',
        },
      },
      {
        type: 'heading',
        text: {
          en: 'Why 3D beats 2D in ambiguous ground',
          de: 'Warum 3D in zweideutigem Boden besser ist als 2D',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'In soils rich in iron slag, volcanic clay or saltwater intrusion, a 2D detector will happily report a single solid target. Only a volumetric scan reveals the disc shape of a ploughshare next to the cylinder of a modern pipe.',
          de: 'In Böden mit hohem Eisenschlacke-Gehalt, vulkanischem Ton oder Salzwassereinbruch meldet ein 2D-Detektor gerne ein einzelnes solides Ziel. Nur ein volumetrischer Scan zeigt die Scheibenform eines Pflugschars neben dem Zylinder eines modernen Rohres.',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'That is the short answer to why Tero Vido ships with volume-first rendering. The long answer is 48 published papers, six generations of hardware and a lab in Altenburg with its own anechoic soil chamber.',
          de: 'Das ist die kurze Antwort, warum Tero Vido mit Volume-First-Rendering ausgeliefert wird. Die lange Antwort sind 48 veröffentlichte Papers, sechs Hardware-Generationen und ein Labor in Altenburg mit eigener schalltotem Bodenkammer.',
        },
      },
      {
        type: 'heading',
        text: {
          en: 'Practical reading: trust the edges first',
          de: 'Praktisches Lesen: vertrauen Sie zuerst den Kanten',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'When interpreting a cube, look at the boundary between colours before you look at the colours themselves. A sharp edge means a coherent object. A gradient means conductivity is changing with depth — often natural geology.',
          de: 'Wenn Sie einen Würfel interpretieren, schauen Sie sich die Grenze zwischen den Farben an, bevor Sie die Farben selbst betrachten. Eine scharfe Kante bedeutet ein kohärentes Objekt. Ein Gradient bedeutet, dass sich die Leitfähigkeit mit der Tiefe ändert — oft natürliche Geologie.',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'Next time you are in the field, pause five minutes on a promising cube and trace those edges. It is the single habit that separates first-year operators from certified archaeologists.',
          de: 'Wenn Sie das nächste Mal im Feld sind, halten Sie fünf Minuten bei einem vielversprechenden Würfel an und zeichnen Sie diese Kanten nach. Es ist die eine Gewohnheit, die Einsteiger von zertifizierten Archäologen unterscheidet.',
        },
      },
    ],
  },
  {
    slug: 'closer-to-surface',
    dateISO: '2026-05-18',
    category: 'field_notes',
    authorName: 'Marcus Weber',
    title: {
      en: 'Closer to the surface, deeper in the data',
      de: 'Näher an der Oberfläche, tiefer in den Daten',
    },
    excerpt: {
      en: 'Three weeks of excavations on a Roman villa site in Rhineland-Palatinate taught our field team that the most valuable finds often sit inside the first 60 centimetres — if your data is dense enough to see them.',
      de: 'Drei Wochen Ausgrabungen auf einem römischen Villengelände in Rheinland-Pfalz haben unserem Feldteam gelehrt, dass die wertvollsten Funde oft in den ersten 60 Zentimetern sitzen — wenn Ihre Daten nur dicht genug sind, um sie zu sehen.',
    },
    imagePrompt:
      'archaeology excavation field site with Roman villa foundations exposed, Tero Vido 3D System on a tripod over trench, archaeologist kneeling taking notes, soft overcast sky, documentary photo',
    readingTimeMinutes: 6,
    tags: {
      en: ['Field report', 'Archaeology', 'Roman sites', 'Expander'],
      de: ['Feldbericht', 'Archäologie', 'Römische Fundplätze', 'Expander'],
    },
    contentBlocks: [
      {
        type: 'paragraph',
        text: {
          en: 'The convoy arrived at dawn on a Tuesday in late April. The site was a rolling wine hillside overlooking the Moselle, and our partners from the Landesamt für Archäologie had already staked 42 2×2 m trenches.',
          de: 'Der Konvoi traf am Dienstagfrüh Ende April ein. Der Ort war ein welliger Weinberg mit Blick auf die Mosel, und unsere Partner vom Landesamt für Archäologie hatten bereits 42 2×2 m-Schnitte gesteckt.',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'Day one we ran the Expander at full step — 2 cm grid — on three reference trenches. The classic temptation with deep detectors is to run bigger steps and cover more ground. That is exactly what we did not want.',
          de: 'Am ersten Tag haben wir den Expander mit vollem Schritt — 2 cm Raster — auf drei Referenzschnitten gefahren. Die klassische Versuchung bei tiefen Detektoren ist, größere Schritte zu fahren und mehr Fläche abzudecken. Genau das wollten wir nicht.',
        },
      },
      {
        type: 'heading',
        text: {
          en: 'Why 2 cm steps on a 10 m detector',
          de: 'Warum 2 cm-Schritte bei einem 10 m-Detektor?',
        },
      },
      {
        type: 'list',
        text: {
          en: 'The topsoil layer has a habit of hiding thin, planar features like:',
          de: 'Die Oberbodenschicht hat die Eigenschaft, dünne, planare Strukturen zu verbergen, wie zum Beispiel:',
        },
        items: {
          en: [
            'Post holes of wooden structures',
            'Burnt floor surfaces of half-timbered buildings',
            'Trenches of palisades just 4 cm wide',
          ],
          de: [
            'Pfostenlöcher hölzerner Konstruktionen',
            'Verbrannte Fußböden von Fachwerkgebäuden',
            'Palissadenschuten von nur 4 cm Breite',
          ],
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'A 10 cm step pattern would have averaged them into the noise. With 2 cm, the plan showed a perfect rectangular plan of a porticus before the first trowel ever lifted.',
          de: 'Ein 10 cm-Schrittmuster hätte sie im Rauschen verwischt. Bei 2 cm zeigte der Plan einen perfekten rechteckigen Grundriss einer Portikus, bevor die erste Kelle gehoben wurde.',
        },
      },
      {
        type: 'quote',
        text: {
          en: '“The scanner pays for itself the day it saves a week of blind excavation in the wrong corner of the field.”',
          de: '„Der Scanner hat sich am Tag amortisiert, an dem er eine Woche blinder Ausgrabung in der falschen Ecke des Feldes einspart.“',
        },
      },
      {
        type: 'heading',
        text: {
          en: 'The surprise: a bronze figurine at 38 cm',
          de: 'Die Überraschung: eine Bronzefigur in 38 cm Tiefe',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'Trench 17 produced the highlight. The point cloud showed a high-conductivity 4×6 cm blob suspended above a larger iron mass at 75 cm. Excavation revealed a bronze Lar figurine above a collapsed iron strongbox — a classic secondary deposit.',
          de: 'Schnitt 17 lieferte das Highlight. Die Point-Cloud zeigte einen 4×6 cm-Leitfähigkeitsblob, der über einer größeren Eisenmasse in 75 cm Tiefe schwebte. Bei der Ausgrabung handelte es sich um eine bronzene Lar-Figur über einer kollabierten Eisentruhe — eine klassische Sekundärablagerung.',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'Averaged over a coarser step, the bronze signal would have been completely swallowed by the iron signature below. This is why Tero Vido devices never interpolate a grid cell that was never actually sampled.',
          de: 'Über einen gröberen Schritt gemittelt, wäre das Bronzesignal komplett vom darunterliegenden Eisen-Signatur verschluckt worden. Deshalb interpolieren Tero Vido Geräte niemals eine Rasterzelle, die nie tatsächlich abgetastet wurde.',
        },
      },
      {
        type: 'heading',
        text: {
          en: 'Takeaways for next season',
          de: 'Erkenntnisse für die nächste Saison',
        },
      },
      {
        type: 'list',
        text: {
          en: 'Three rules we will write into the 2026 campaign protocol:',
          de: 'Drei Regeln, die wir ins Kampagnenprotokoll 2026 schreiben werden:',
        },
        items: {
          en: [
            'Run 2 cm steps on any grid suspected of Roman timber architecture',
            'Mark top 60 cm voxels with a separate LUT colour palette',
            'Excavate every thin edge anomaly — not only the bright blobs',
          ],
          de: [
            '2 cm-Schritte auf jedem Raster mit Verdacht auf römische Holzarchitektur fahren',
            'Voxel der oberen 60 cm mit einer separaten LUT-Farbpalette markieren',
            'Jede dünne Kantenanomalie ausgraben — nicht nur die hellen Blobs',
          ],
        },
      },
    ],
  },
  {
    slug: 'made-in-germany',
    dateISO: '2026-04-02',
    category: 'inside',
    authorName: 'Stefan Tero',
    title: {
      en: 'Made in Germany, used everywhere',
      de: 'Made in Germany, überall im Einsatz',
    },
    excerpt: {
      en: 'A tour of our Altenburg factory floor — from the anechoic chamber to final packaging. Three thousand detectors a year, every coil hand-wound, every case tested to spec.',
      de: 'Ein Rundgang durch unsere Altenburger Fertigung — von der schalltoten Kammer bis zur Endverpackung. Dreitausend Detektoren pro Jahr, jede Spule handgewickelt, jedes Gehäuse spezifikationsgeprüft.',
    },
    imagePrompt:
      'modern German electronics factory interior, workers in grey lab coats winding sensor coils by hand, PCBs on trays, Tero Vido logo on wall, bright clean industrial lighting, wide angle editorial',
    readingTimeMinutes: 7,
    tags: {
      en: ['Factory', 'Production', 'Altenburg', 'Craftsmanship'],
      de: ['Fabrik', 'Produktion', 'Altenburg', 'Handwerk'],
    },
    contentBlocks: [
      {
        type: 'paragraph',
        text: {
          en: 'People sometimes ask whether “Made in Germany” is still real when the microcontrollers come from Taiwan and the displays from Korea. Fair question. Walk production line 3 with me and you will see what the label actually means at Tero Vido.',
          de: 'Die Leute fragen manchmal, ob „Made in Germany“ noch real ist, wenn die Mikrocontroller aus Taiwan und die Displays aus Korea kommen. Berechtigte Frage. Gehen Sie mit mir durch Fertigungslinie 3, und Sie sehen, was das Label bei Tero Vido tatsächlich bedeutet.',
        },
      },
      {
        type: 'heading',
        text: {
          en: 'Line 3: the coil room',
          de: 'Linie 3: der Spulenraum',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'A coil is not a coil. A winding tolerance of 0.3 mm, invisible to the eye, shifts the resonance curve enough to reduce depth performance by 14% at the 18 m mark. We tested this. Every TVPI coil is wound by four women who have been doing this job for twelve years on average.',
          de: 'Eine Spule ist keine Spule. Eine Wicklungstoleranz von 0,3 mm, für das Auge unsichtbar, verschiebt die Resonanzkurve genug, um die Tiefenleistung an der 18 m-Marke um 14 % zu reduzieren. Wir haben das getestet. Jede TVPI-Spulenwicklung erfolgt durch vier Frauen, die diese Arbeit im Schnitt seit zwölf Jahren machen.',
        },
      },
      {
        type: 'list',
        text: {
          en: 'Every wound coil goes through three gates before soldering:',
          de: 'Jede gewickelte Spule durchläuft drei Tore vor dem Löten:',
        },
        items: {
          en: [
            'Impedance sweep (10 Hz – 2 MHz) against master curve',
            'Thermal soak at 65 °C for 4 hours, repeated sweep',
            'Mechanical vibration test on shaker table',
          ],
          de: [
            'Impedanz-Sweep (10 Hz – 2 MHz) gegen Masterkurve',
            'Temperaturlagerung bei 65 °C für 4 Stunden, wiederholter Sweep',
            'Mechanischer Vibrations-Test auf Shaker-Tisch',
          ],
        },
      },
      {
        type: 'heading',
        text: {
          en: 'Calibration: the soil chamber',
          de: 'Kalibrierung: die Bodenkammer',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'The ground floor of production hall B is home to a 12 × 4 m sandbox filled with three calibrated test soils: quartz sand, Löss and our notorious “Altenburg mix” — salty clay with 8% slag, our worst case.',
          de: 'Im Erdgeschoss der Halle B steht ein 12 × 4 m Sandkasten, gefüllt mit drei kalibrierten Testböden: Quarzsand, Löss und unser berüchtigter „Altenburg-Mix“ — salzhaltiger Ton mit 8 % Schlacke, unser Worst Case.',
        },
      },
      {
        type: 'quote',
        text: {
          en: '“If a detector is not noticeably worse in Altenburg mix than in pure sand, it has not been calibrated honestly.”',
          de: '„Wenn ein Detektor im Altenburg-Mix nicht merklich schlechter ist als in reinem Sand, wurde er nicht ehrlich kalibriert.“',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'Every serial-numbered device is run through 52 reference targets placed at known depths. The resulting calibration curve is bound to that serial number and lives on the device permanently. No generic factory curves here.',
          de: 'Jedes gerät mit eigener Seriennummer durchläuft 52 Referenzziele in bekannten Tiefen. Die resultierende Kalibrierkurve wird an diese Seriennummer gebunden und lebt dauerhaft auf dem Gerät. Keine generischen Fabrikkurven hier.',
        },
      },
      {
        type: 'heading',
        text: {
          en: 'Shipping and the Peli test',
          de: 'Versand und der Peli-Test',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'Final packaging is not automated. The reason is simple: we pack each case the way we would want to receive it if we had a flight to Riyadh the next morning. Padding layers, probe protection, cable routing — it all gets photographed before the lid closes.',
          de: 'Die Endverpackung ist nicht automatisiert. Der Grund ist einfach: wir packen jeden Koffer so, wie wir ihn selbst erhalten möchten, wenn wir am nächsten Morgen einen Flug nach Riad hätten. Polsterschichten, Sondenschutz, Kabelführung — alles wird fotografiert, bevor der Deckel schließt.',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'On a rotating schedule, every fortieth case gets a 1.2 m drop test onto concrete. The last time we opened one with damage, the calibration had drifted by 0.02%. We shipped a replacement anyway.',
          de: 'Im rotierenden Rhythmus wird jeder vierzigste Koffer einem 1,2 m-Falltest auf Beton unterzogen. Das letzte Mal, als wir einen mit Schaden öffneten, hatte die Kalibrierung um 0,02 % gedriftet. Wir haben trotzdem ein Ersatzgerät geschickt.',
        },
      },
    ],
  },
  {
    slug: 'treasure-france-40kg-silver',
    dateISO: '2026-03-12',
    category: 'case_study',
    authorName: 'By Jean-Paul Corneille',
    title: {
      en: '40 kg of silver: a Norman hoard rediscovered after 340 years',
      de: '40 kg Silber: ein normannischer Schatz, nach 340 Jahren wiederentdeckt',
    },
    excerpt: {
      en: 'How a Tero Vido 3D System, operated by a part-time detectorist in Normandy, located a buried chest of silver écus within the legal framework of French preventive archaeology.',
      de: 'Wie ein Tero Vido 3D System, bedient von einem Hobby-Detektoristen in der Normandie, eine vergrabene Truhe mit Silber-Écus innerhalb der rechtlichen Rahmenbedingungen der französischen Präventionsarchäologie lokalisiert hat.',
    },
    imagePrompt:
      'oak chest with silver coins scattered on ground, trench excavation, white cotton gloves carefully placing coins into trays, French countryside in background, natural daylight, documentary photo',
    readingTimeMinutes: 9,
    tags: {
      en: ['Hoard', 'Normandy', 'Silver coins', '17th century', '3D System'],
      de: ['Schatzfund', 'Normandie', 'Silbermünzen', '17. Jahrhundert', '3D System'],
    },
    contentBlocks: [
      {
        type: 'paragraph',
        text: {
          en: 'It was a Sunday in early October 2025. The field was a former bocage pasture near Bayeux, owned by a local farmer friendly to the association. Permission was in writing, SRA notified — the full paperwork the French system demands before a single grid is laid down.',
          de: 'Es war ein Sonntag Anfang Oktober 2025. Das Feld war eine ehemalige Bocage-Weide in der Nähe von Bayeux, im Besitz eines lokalen Bauern, der dem Verband freundlich gesonnen war. Die Genehmigung lag schriftlich vor, die SRA war informiert — die volle Papiermühle, die das französische System vor dem ersten Raster verlangt.',
        },
      },
      {
        type: 'heading',
        text: {
          en: 'First pass: “a rectangle that should not exist”',
          de: 'Erster Durchgang: „Ein Rechteck, das nicht existieren sollte“',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'Armand, the operator, ran a wide 50×25 m survey with the H100 probe at 8 cm steps. At coordinates X+11.2 / Y+4.3, a strong conductive rectangle roughly 65×40 cm appeared at 1.45 m below surface. The shape was too regular for geology, too deep for plough layers.',
          de: 'Armand, der Bediener, fuhr eine großflächige 50×25 m-Befahrung mit der H100-Sonde in 8 cm-Schritten. Bei Koordinate X+11,2 / Y+4,3 tauchte ein stark leitfähiges Rechteck von ungefähr 65×40 cm in 1,45 m Tiefe unter Oberfläche auf. Die Form war zu regelmäßig für Geologie, zu tief für Pflughorizonte.',
        },
      },
      {
        type: 'quote',
        text: {
          en: '“I have been detecting for 22 years. You know a box when you see one. It had edges. Real edges.”',
          de: '„Ich seit 22 Jahren auf Suche. Man erkennt eine Kiste, wenn man eine sieht. Sie hatte Kanten. Echte Kanten.“',
        },
      },
      {
        type: 'heading',
        text: {
          en: 'Narrow grid, 2 cm steps',
          de: 'Enges Raster, 2 cm Schritte',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'The next day, a 3×3 m mini-grid was surveyed at 2 cm steps. The 3D cube showed the box in near-photographic detail, including a slightly sunken lid and two higher-density points inside — presumably the hasps. Crucially, the object centroid was confirmed to 3 cm accuracy horizontally.',
          de: 'Am nächsten Tag wurde ein 3×3 m Mini-Raster in 2 cm-Schritten befahren. Der 3D-Würfel zeigte die Kiste in nahezu fotografischer Detailtreue, inklusive leicht eingesunkenem Deckel und zwei höherdichten Punkten im Inneren — vermutlich die Beschläge. Entscheidend: der Objektschwerpunkt wurde auf 3 cm genau horizontal bestätigt.',
        },
      },
      {
        type: 'list',
        text: {
          en: 'By French law, the moment of that confirmation triggered a clear sequence:',
          de: 'Nach französischem Recht löste der Moment dieser Bestätigung eine klare Reihenfolge aus:',
        },
        items: {
          en: [
            'Immediate suspension of amateur operations on site',
            'Written notification to DRAC Normandie within 24 hours',
            'Hand-over of all scan data and coordinates',
            'Wait for authorised archaeological excavation',
          ],
          de: [
            'Sofortige Einstellung der Hobby-Arbeiten vor Ort',
            'Schriftliche Benachrichtigung der DRAC Normandie innerhalb von 24 Stunden',
            'Übergabe aller Scandaten und Koordinaten',
            'Warten auf die autorisierte archäologische Ausgrabung',
          ],
        },
      },
      {
        type: 'heading',
        text: {
          en: 'Opening: 1,944 silver écus',
          de: 'Die Öffnung: 1.944 Silber-Écus',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'The official excavation opened six weeks later. Armand was invited as a witness. The trowel broke through oak at 1.48 m, exactly where the scan said it would. Inside the chest, lined with linen, 1,944 Louis XIV silver écus with a total mass of 40.2 kg.',
          de: 'Sechs Wochen später begann die offizielle Ausgrabung. Armand wurde als Zeuge eingeladen. Die Kelle durchbrach Eiche in 1,48 m Tiefe, genau dort, wo der Scan es vorhergesagt hatte. In der mit Leinen ausgekleideten Truhe: 1.944 Silber-Écus von Ludwig XIV. mit einer Gesamtmasse von 40,2 kg.',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'Numismatic analysis dated the latest coins to 1682, making the burial contemporary with the Revocation of the Edict of Nantes. Two sets of initials lightly scratched inside the lid are now the subject of archival research.',
          de: 'Die numismatische Analyse datiert die jüngsten Münzen auf 1682 — die Ablagerung fällt damit zeitlich mit der Aufhebung des Edikts von Nantes zusammen. Zwei Initialen-Sätze, leicht in den Deckel eingeritzt, sind heute Gegenstand archivarischer Forschung.',
        },
      },
      {
        type: 'heading',
        text: {
          en: 'Why this matters for detectorists',
          de: 'Warum das für Suchentde wichtig ist',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'This find stands for everything Tero Vido wants 3D detection to enable: precise targeting, documented provenance, close collaboration with heritage authorities, and a treasure that ends up in a museum — not a private collection.',
          de: 'Dieser Fund steht für alles, was Tero Vido mit 3D-Detektion ermöglichen will: präzise Zielerfassung, dokumentierte Provenienz, enge Zusammenarbeit mit Denkmalbehörden und ein Schatz, der in einem Museum landet — nicht in einer Privatsammlung.',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'The hoard is now registered with the Musée de Normandie in Caen. A public presentation is scheduled for summer 2026.',
          de: 'Der Schatz ist heute beim Musée de Normandie in Caen registriert. Eine öffentliche Präsentation ist für Sommer 2026 geplant.',
        },
      },
    ],
  },
  {
    slug: 'saudi-gold-figurine',
    dateISO: '2026-02-20',
    category: 'case_study',
    authorName: 'Khalid Al-Mansoori',
    title: {
      en: 'A 1st-century gold figurine from the Najd caravan route',
      de: 'Eine goldene Figur aus dem 1. Jahrhundert von der Najd-Karawanenroute',
    },
    excerpt: {
      en: 'Survey for a planned water pipeline southwest of Riyadh uncovered a rare Graeco-Arabian bronze and gold assemblage. We document the GPR workflow that located the ritual deposit without a single stray test pit.',
      de: 'Bei einer Survey-Arbeit für eine geplante Wasserpipeline südwestlich von Riyadh wurde ein seltener graeco-arabischer Bronz- und Goldbestand gefunden. Wir dokumentieren den GPR-Workflow, der die rituelle Ablagerung ohne eine einzige blind gesetzte Testgrube lokalisiert hat.',
    },
    imagePrompt:
      'gold figurine depicting stylised camel figure, bronze bowls and ceremonial dagger laid out on black velvet display, desert sand backdrop, low-key museum lighting, macro detail',
    readingTimeMinutes: 8,
    tags: {
      en: ['GPR', 'Pre-Islamic', 'Saudi Arabia', 'Gold', 'Pipeline survey'],
      de: ['GPR', 'Vorislamisch', 'Saudi-Arabien', 'Gold', 'Pipeline-Survey'],
    },
    contentBlocks: [
      {
        type: 'paragraph',
        text: {
          en: 'The contract was routine on paper: 28 km of corridor survey for a 48-inch freshwater pipeline running from Wadi Hanifa towards a new industrial cluster outside Kharj. Targets were utility crossings, old foundations and bedrock elevation.',
          de: 'Der Auftrag war auf dem Papier Routine: 28 km Korridor-Survey für eine 48-Zoll-Frischwasserpipeline von Wadi Hanifa in Richtung eines neuen Industrieparks außerhalb von Kharj. Ziele waren Leitungsquerungen, alte Fundamente und die Gebirgsschollen-Lage.',
        },
      },
      {
        type: 'heading',
        text: {
          en: 'NKS-1000 first pass: a 4 m cluster',
          de: 'NKS-1000 Erster Durchgang: ein 4 m-Cluster',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'The NKS-1000 cart was running at standard 5 cm × 15 cm inline/transverse resolution on a 5 m corridor. In chainage 14+620 the B-scan showed a cluster of six discrete high-reflectivity points between 60 cm and 1.2 m depth, spaced roughly 40 cm apart.',
          de: 'Der NKS-1000 Wagen wurde mit Standardauflösung 5 cm × 15 cm längs/quer auf einem 5 m breiten Korridor gefahren. bei Station 14+620 zeigte der B-Scan ein Cluster aus sechs diskreten hochreflektiven Punkten zwischen 60 cm und 1,2 m Tiefe, etwa 40 cm beabstandet.',
        },
      },
      {
        type: 'quote',
        text: {
          en: '“Pipeline people hate clusters, because clusters do not look like pipe. But to an archaeologist, a cluster that size smells like a structured deposit.”',
          de: '„Pipeline-Leute hassen Cluster, weil Cluster nicht wie Rohre aussehen. Für einen Archäologen riecht ein Cluster dieser Größe nach einer strukturierten Ablagerung.“',
        },
      },
      {
        type: 'heading',
        text: {
          en: 'Hi-res 3D follow-up',
          de: 'Hochauflösender 3D-Follow-up',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'We stopped the main survey, called the heritage officer on the client side, and placed a 4×4 m fine grid. Running the NKS-1000 at 2 cm transverse step — four passes over the same patch — produced a C-scan volume of 1 cm³ voxel size.',
          de: 'Wir stoppten die Hauptbefahrung, riefen den Denkmalbeauftragten des Kunden an und legten ein 4×4 m Feinraster. Mit 2 cm Querschritt — vier Durchläufe über dieselbe Fläche — erzeugte der NKS-1000 ein C-Scan-Volumen mit 1 cm³ Voxelgröße.',
        },
      },
      {
        type: 'list',
        text: {
          en: 'The volume showed a structured feature consisting of:',
          de: 'Das Volumen zeigte eine strukturierte Anlage, bestehend aus:',
        },
        items: {
          en: [
            'A central stone packing ~90–110 cm deep',
            'Five smaller point objects arranged in an arc on the west side',
            'A single stronger point 40 cm above the stone packing',
          ],
          de: [
            'Zentrale Steinschüttung ~90–110 cm tief',
            'Fünf kleinere Punktobjekte, bogenförmig auf der Westseite angeordnet',
            'Ein einzelner stärkerer Punkt 40 cm über der Steinschüttung',
          ],
        },
      },
      {
        type: 'heading',
        text: {
          en: 'Excavation: seven artefacts total',
          de: 'Die Ausgrabung: insgesamt sieben Artefakte',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'The SCTH team was on site within 48 hours. Their controlled trowelling recovered, in exact positional agreement with the scan: six bronze bowls with repoussé decoration and a single gold figurine — a standing camel with a rider, 11.4 cm tall, 208 g of 22 carat gold.',
          de: 'Das SCTH-Team war innerhalb von 48 Stunden vor Ort. Ihre kontrollierte Kellenarbeit barg, in exakter Lageübereinstimmung mit dem Scan: sechs Bronzeschalen mit getriebener Dekoration und eine einzelne Goldfigur — ein stehendes Kamel mit Reiter, 11,4 cm hoch, 208 g 22-karätiges Gold.',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'Stylistic parallels with Thaj and Qaryat al-Faw place the deposit in the late 1st century CE, on the incense caravan route connecting Yemen with the Levant. Radiocarbon dating of the packing stones\' charcoal inclusions returned a calibrated age of 1950 ± 30 BP.',
          de: 'Stilistische Parallelen zu Thaj und Qaryat al-Faw datieren die Ablagerung in das späte 1. Jahrhundert u. Z., auf der Weihrauch-Karawanenroute zwischen Jemen und Levante. Radiokohlenstoffdatierung von Holzkohleneinschlüssen in den Packungssteinen ergab ein kalibriertes Alter von 1950 ± 30 BP.',
        },
      },
      {
        type: 'heading',
        text: {
          en: 'Pipeline rerouted 6 m north',
          de: 'Pipeline 6 m nördlich verlegt',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'The client rerouted the corridor 6 m north of the deposit. The point cloud data, the excavation photo log and the stylistic report will be published jointly by SCTH and the surveying firm in the 2026 Arabian Archaeology proceedings.',
          de: 'Der Kunde verlegte den Korridor 6 m nördlich der Ablagerung. Die Point-Cloud-Daten, der Ausgrabungs-Fotoprotokoll und der stilistische Bericht werden 2026 von SCTH und dem Vermessungsbüro gemeinsam in den Arabian Archaeology Proceedings veröffentlicht.',
        },
      },
    ],
  },
  {
    slug: 'dekeorburada-istanbul',
    dateISO: '2025-05-07',
    category: 'dealer_spotlight',
    authorName: 'Tero Vido Editorial',
    title: {
      en: 'Dealer Spotlight: Dekor Burada, Istanbul',
      de: 'Händler-Porträt: Dekor Burada, Istanbul',
    },
    excerpt: {
      en: 'We visited our long-standing partner on the Asian side of the Bosphorus to talk Ottoman-era finds, Anatolian geology, and why Turkish detectorists love the 3D System Pro.',
      de: 'Wir haben unseren langjährigen Partner auf der asiatischen Seite des Bosporus besucht, um über osmanische Funde, anatolische Geologie und die Frage zu sprechen, warum türkische Suchentde das 3D System Pro lieben.',
    },
    imagePrompt:
      'Istanbul office interior with Bosphorus view through windows, two men in their 40s shaking hands with handshake, Tero Vido detector display on desk, tea glasses, modern interior, soft evening light',
    readingTimeMinutes: 5,
    tags: {
      en: ['Dealer', 'Turkey', 'Istanbul', 'Partner'],
      de: ['Händler', 'Türkei', 'Istanbul', 'Partner'],
    },
    contentBlocks: [
      {
        type: 'paragraph',
        text: {
          en: 'There is a corner of Kadıköy where the tea house next door plays the same Mehter cassette every afternoon at 3. It is a good walk from the ferry and a better one from the metro. That is where you find Dekor Burada.',
          de: 'Es gibt eine Ecke in Kadıköy, wo das Teehaus nebenan jeden Nachmittag um 15 Uhr dieselbe Mehter-Kassette spielt. Von der Fähre ist es ein netter Fußweg, von der Metro ein noch besserer. Dort finden Sie Dekor Burada.',
        },
      },
      {
        type: 'heading',
        text: {
          en: 'Ten years, three hundred systems',
          de: 'Zehn Jahre, dreihundert Systeme',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'Ahmet Bey and his team have been with Tero Vido since the very first 3D System Mk1. Last winter, they placed the 300th system — a Pro edition — with a geological engineering firm in Konya doing cavity surveys on the high-speed rail line.',
          de: 'Ahmet Bey und sein Team sind seit dem allerersten 3D System Mk1 bei Tero Vido. Letzten Winter haben sie das 300. System — eine Pro-Ausgabe — an ein geologisches Ingenieurbüro in Konya geliefert, das Hohlraumuntersuchungen auf der Schnellbahnstrecke durchführt.',
        },
      },
      {
        type: 'quote',
        text: {
          en: '“Anatolia has geology that eats cheap detectors for breakfast. The clay around Ankara alone will fool a 2D machine every day of the week.”',
          de: '„Anatolien hat eine Geologie, die billige Detektoren zum Frühstück verspeist. Allein der Ton um Ankara bringt ein 2D-Gerät jeden Tag der Woche zum Narren.“',
        },
      },
      {
        type: 'heading',
        text: {
          en: 'The service hall out back',
          de: 'Der Service-Saal im Hinterhof',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'Behind the showroom is a 60 m² service hall with calibrated test stands and a training area. Every customer buying a system gets a 6-hour on-site course here — half with the tablet, half on the small test lot with its permanent reference targets.',
          de: 'Hinter dem Showroom befindet sich eine 60 m² große Servicehalle mit kalibrierten Prüfständen und einem Trainingsbereich. Jeder Kunde, der ein System kauft, erhält hier einen 6-stündigen Vor-Ort-Kurs — die Hälfte am Tablet, die Hälfte auf dem kleinen Testgelände mit seinen permanenten Referenzzielen.',
        },
      },
      {
        type: 'list',
        text: {
          en: 'Ahmet Bey says the three support pillars of Dekor Burada are:',
          de: 'Ahmet Bey sagt, die drei Säulen von Dekor Burada seien:',
        },
        items: {
          en: [
            'Never sell without first testing on the customer\'s own soil',
            'Keep loaner units available for every client during repairs',
            'Host monthly operator meetups, open to all brands',
          ],
          de: [
            'Nie etwas verkaufen, ohne es vorher auf dem eigenen Boden des Kunden getestet zu haben',
            'Leihgeräte für jeden Kunden während Reparaturen vorrätig halten',
            'Monatliche Betreibertreffen veranstalten, offen für alle Marken',
          ],
        },
      },
      {
        type: 'heading',
        text: {
          en: 'A favourite case: the Selçuk fountain',
          de: 'Ein Lieblingsfall: der Selçuk-Brunnen',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'The story he tells new trainees: a 14th-century Selçuk fountain in Bursa, dry since 1920. The municipality wanted to reconnect it to the original pipeline. The 3D System found the marble channel in three hours of scanning — it was exactly where the cadastre said, but two metres deeper than assumed.',
          de: 'Die Geschichte, die er neuen Auszubildenden erzählt: ein Selçuk-Brunnen aus dem 14. Jahrhundert in Bursa, trocken seit 1920. Die Gemeinde wollte ihn wieder an die ursprüngliche Leitung anschließen. Das 3D System fand den Marmorkanal in drei Scan-Stunden — er lag genau dort, wo das Kataster es angab, aber zwei Meter tiefer als angenommen.',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'You can reach Ahmet Bey and the team at their Kadıköy office every weekday 10–18. Tea is always served on the house.',
          de: 'Ahmet Bey und das Team erreichen Sie an jedem Werktag 10–18 Uhr in ihrem Büro in Kadıköy. Tee gibt es immer aufs Haus.',
        },
      },
    ],
  },
  {
    slug: 'heysung-china-visit',
    dateISO: '2024-12-18',
    category: 'partners',
    authorName: 'Tero Vido Executive Team',
    title: {
      en: 'Partners: three days at Heysung, Beijing',
      de: 'Partner: drei Tage bei Heysung, Peking',
    },
    excerpt: {
      en: 'Our product management and quality teams spent December with the Heysung group, calibrating NKS-1000 reference curves to loess and red clay soils that dominate inland China.',
      de: 'Unser Produktmanagement- und Qualitäts-Team verbrachte den Dezember bei der Heysung-Gruppe und kalibrierte NKS-1000 Referenzkurven auf Löss- und Rottonböden, die das chinesische Binnenland dominieren.',
    },
    imagePrompt:
      'modern Beijing office lobby with glass walls and red Chinese lanterns for Christmas, team of five engineers in deep discussion around GPR display, Chinese-German bilingual presentation screen in background, professional corporate photo',
    readingTimeMinutes: 5,
    tags: {
      en: ['Partnership', 'China', 'GPR calibration', 'Loess'],
      de: ['Partnerschaft', 'China', 'GPR-Kalibrierung', 'Löss'],
    },
    contentBlocks: [
      {
        type: 'paragraph',
        text: {
          en: 'The challenge with China is not size. It is variety. A GPR curve tuned to the sandy coastal soils around Shanghai will produce systematic false positives 1,200 km inland on the thick loess plateaus of Shaanxi.',
          de: 'Die Herausforderung in China ist nicht die Größe. Es ist die Vielfalt. Eine GPR-Kurve, abgestimmt auf sandige Küstenböden um Shanghai, erzeugt systematische Fehlalarme 1.200 km landeinwärts auf den dicken Lössplateaus von Shaanxi.',
        },
      },
      {
        type: 'heading',
        text: {
          en: 'A dedicated calibration bin',
          de: 'Ein eigener Kalibrierungsbehälter',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'Heysung built a purpose-built calibration bin at their Fengtai facility: 9 m long, 2.5 m wide, layered with imported reference soils and 38 buried utility references ranging from 20 cm to 4 m depth.',
          de: 'Heysung hat am Standort Fengtai einen eigens konstruierten Kalibrierungsbehälter gebaut: 9 m lang, 2,5 m breit, geschichtet mit importierten Referenzböden und 38 vergrabenen Versorgungsreferenzen von 20 cm bis 4 m Tiefe.',
        },
      },
      {
        type: 'list',
        text: {
          en: 'We took three NKS-1000 production units and ran:',
          de: 'Wir haben drei NKS-1000 Serien Geräte genommen und folgendes gefahren:',
        },
        items: {
          en: [
            '27 complete traversals in both 500 MHz and 800 MHz modes',
            'Reference targets at 20/40/60/90/140/220/400 cm',
            'Synthetic pipe materials: PVC, PE, CI, DI, copper',
          ],
          de: [
            '27 komplette Traversen in 500 MHz- und 800 MHz-Modus',
            'Referenzziele in 20/40/60/90/140/220/400 cm',
            'Synthetische Rohrmaterialien: PVC, PE, CI, DI, Kupfer',
          ],
        },
      },
      {
        type: 'heading',
        text: {
          en: 'The result: a Chinese soil profile pack',
          de: 'Das Ergebnis: ein Chinese Soil Profile Pack',
        },
      },
      {
        type: 'quote',
        text: {
          en: '“We do not ship a universal detector. We ship a detector with a universal framework, plus local calibration packs tuned by people who know the ground.”',
          de: '„Wir versenden keinen Universaldetektor. Wir versenden einen Detektor mit einem universellen Rahmenwerk, plus lokale Kalibrierungspacks, abgestimmt von Leuten, die den Boden kennen.“',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'The outcome is the new China Soil Profile Pack, available to all NKS-1000 users via a free firmware update from Q1 2025. The pack adds four new baseline presets: Coastal Sand, Yangtze Delta Silt, Yellow River Loess and Sichuan Red Clay.',
          de: 'Ergebnis ist das neue China Soil Profile Pack, ab Q1 2025 für alle NKS-1000 Nutzer per kostenlosem Firmware-Update verfügbar. Das Pack ergänzt vier neue Basis-Presets: Coastal Sand, Yangtze Delta Silt, Yellow River Loess und Sichuan Red Clay.',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'We closed the trip with a joint customer training in Chengdu. Next stop: joint research on railway ballast inspection with Southwest Jiaotong University, planned for autumn 2025.',
          de: 'Wir haben die Reise mit einem gemeinsamen Kundentraining in Chengdu abgeschlossen. Nächster Halt: gemeinsame Forschung zum Schotter-Inspektion im Bahnbau mit der Southwest Jiaotong University, geplant für Herbst 2025.',
        },
      },
    ],
  },
  {
    slug: 'kooistra-holland-visit',
    dateISO: '2024-07-06',
    category: 'dealer_spotlight',
    authorName: 'Tero Vido Editorial',
    title: {
      en: 'Dealer Spotlight: Kooistra, Alkmaar',
      de: 'Händler-Porträt: Kooistra, Alkmaar',
    },
    excerpt: {
      en: 'A summer visit to the Netherlands\' oldest family-run detector distributor — 48 years of metal detecting, three generations, and a shop floor where everything is demonstrated on real soils.',
      de: 'Ein Sommerbesuch bei dem ältesten familiengeführten Detektorvertrieb der Niederlande — 48 Jahre Sondengeschichte, drei Generationen und ein Ladengeschäft, in dem alles auf echten Böden demonstriert wird.',
    },
    imagePrompt:
      'Dutch detector shop front in Alkmaar historic brick street, family with three generations standing at entrance, display windows full of detectors and accessories, bicycles parked outside, bright summer day',
    readingTimeMinutes: 5,
    tags: {
      en: ['Dealer', 'Netherlands', 'Alkmaar', 'Family business'],
      de: ['Händler', 'Niederlande', 'Alkmaar', 'Familienunternehmen'],
    },
    contentBlocks: [
      {
        type: 'paragraph',
        text: {
          en: 'Walk into Kooistra in Alkmaar and you will smell three things immediately: fresh coffee, sea-salted caramel stroopwafels from the bakery next door, and something hard to place — damp, iron-rich, unmistakably soil.',
          de: 'Wenn Sie bei Kooistra in Alkmaar eintreten, riechen Sie sofort drei Dinge: frischen Kaffee, gesalzene Karamell-Stroopwafels von der Bäckerei nebenan und etwas Schwer zu definierendes — feucht, eisenreich, unverkennbar Erde.',
        },
      },
      {
        type: 'heading',
        text: {
          en: 'Three generations in the same street',
          de: 'Drei Generationen in derselben Straße',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'Founder Wim Kooistra began importing C-Scope machines in 1977. Today his grandson Joris runs the day-to-day and his daughter Marjan keeps the books. The shop has moved twice but never left Heldensingel.',
          de: 'Gründer Wim Kooistra begann 1977 mit dem Import von C-Scope-Geräten. Heute führt sein Enkel Joris das Tagesgeschäft, seine Tochter Marjan hält die Bücher. Der Laden hat zweimal umgezogen, aber nie die Heldensingel verlassen.',
        },
      },
      {
        type: 'quote',
        text: {
          en: '“People buy from people. They want to see that you have dug the same mud they are about to dig.”',
          de: '„Leute kaufen von Leuten. Sie wollen sehen, dass Sie denselben Schlamm gegraben haben, in dem sie selbst gleich stehen werden.“',
        },
      },
      {
        type: 'heading',
        text: {
          en: 'Four soils, one back garden',
          de: 'Vier Böden, ein Hintergarten',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'Behind the shop is a 140 m² test garden, split into four beds with imported soil profiles: Zeeland sea clay, Veluwe sand, IJsselmeer polder silt, and peat from Drenthe. Each has a permanent buried target grid that Kooistra renews every two years.',
          de: 'Hinter dem Laden liegt ein 140 m² großer Testgarten, aufgeteilt in vier Beete mit importierten Bodenprofilen: Zeeland-Meerton, Veluwe-Sand, IJsselmeer-Polderschluff und Torf aus Drenthe. Jeder hat ein permanentes vergrabenes Zielraster, das Kooistra alle zwei Jahre erneuert.',
        },
      },
      {
        type: 'list',
        text: {
          en: 'Their Tero Vido best sellers since 2023:',
          de: 'Ihre Tero Vido-Bestseller seit 2023:',
        },
        items: {
          en: [
            '3D System Basic Plus — archaeology and heritage societies',
            'Expander Gold — hobby detectorists and surveyors',
            'NKS-1000 — civil engineering and municipalities',
          ],
          de: [
            '3D System Basic Plus — Archäologie- und Denkmalvereine',
            'Expander Gold — Hobby-Sondengänger und Vermesser',
            'NKS-1000 — Tiefbau und Kommunen',
          ],
        },
      },
      {
        type: 'heading',
        text: {
          en: 'A summer Saturday ritual',
          de: 'Ein sommers Samstagsritual',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'On the last Saturday of every month, Kooistra opens the test garden at 9 a.m. and runs beginner tutorials for detectorists of all brands, plus an open forum on Dutch heritage law. Attendance is free. The only rule: bring your own trowel.',
          de: 'Am letzten Samstag eines jeden Monats öffnet Kooistra den Testgarten um 9 Uhr und veranstalten Anfänger-Tutorials für Sondengänger aller Marken plus ein offenes Forum zum niederländischen Denkmalschutzrecht. Die Teilnahme ist frei. Die einzige Regel: Kelle selbst mitbringen.',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'If you happen to be in North Holland between spring and autumn, plan a Saturday. The stroopwafels are worth it on their own.',
          de: 'Wenn Sie zwischen Frühling und Herbst mal in Nord-Holland sind, planen Sie einen Samstag ein. Die Stroopwafels allein lohnen schon die Reise.',
        },
      },
    ],
  },
  {
    slug: 'how-to-choose-detector',
    dateISO: '2026-09-15',
    category: 'guide',
    authorName: 'The Tero Vido Team',
    title: {
      en: 'How to choose the right Tero Vido detector in 2026',
      de: 'So wählen Sie den richtigen Tero Vido Detektor in 2026',
    },
    excerpt: {
      en: 'A concise, honest decision guide for 3D System, TVPI, Expander, Construction, NKS-1000 and the new Xseries — written for archaeologists, engineers, utility surveyors and serious amateurs.',
      de: 'Ein kurzer, ehrlicher Entscheidungsratgeber für 3D System, TVPI, Expander, Construction, NKS-1000 und die neue Xseries — geschrieben für Archäologen, Ingenieure, Leitungsvermesser und ernsthafte Amateure.',
    },
    imagePrompt:
      'flat lay of six Tero Vido detector control units and probes arranged on clean white concrete workshop table, product catalogue comparison cards next to each device, soft studio lighting from above, hero product composition',
    readingTimeMinutes: 10,
    tags: {
      en: ['Buying guide', 'Product comparison', 'Archaeology', 'Civil engineering', 'Utility survey'],
      de: ['Kaufratgeber', 'Produktvergleich', 'Archäologie', 'Tiefbau', 'Leitungsvermessung'],
    },
    contentBlocks: [
      {
        type: 'paragraph',
        text: {
          en: 'The right question is never “which is the best detector?” It is “which target, in which soil, under which legal framework, on what budget?” We wrote this guide to answer that honestly, even when the honest answer is “not one of ours.”',
          de: 'Die richtige Frage ist nie „welcher ist der beste Detektor?“. Sondern „welches Ziel, in welchem Boden, unter welchem rechtlichen Rahmen, mit welchem Budget?“ Wir haben diesen Leitfaden geschrieben, um das ehrlich zu beantworten — selbst wenn die ehrliche Antwort manchmal lautet: „keiner von unseren.“',
        },
      },
      {
        type: 'heading',
        text: {
          en: 'Step 1 — pick your primary use case',
          de: 'Schritt 1 — wählen Sie Ihren primären Anwendungsfall',
        },
      },
      {
        type: 'list',
        text: {
          en: 'Start with the dominant target type, because no detector excels at all of them at once:',
          de: 'Fangen Sie mit dem dominanten Zieltyp an, denn kein Detektor glänzt gleichzeitig in allen:',
        },
        items: {
          en: [
            'Archaeological small finds / structures → 3D System Basic Plus or Pro',
            'Deep mineralised soils, large legacy targets → TVPI Series Professional',
            'Compact, tablet-only, occasional IR thermo → Expander Gold',
            'Construction rebar / shallow utility (0–3 m) → Construction Series',
            'Non-metallic pipes, cavities, GPR mapping → NKS-1000 GPR',
            'Unlimited budget, long missions, multi-sensor fusion → Xseries',
          ],
          de: [
            'Kleinfunde / Strukturen in der Archäologie → 3D System Basic Plus oder Pro',
            'Tief mineralisierte Böden, große Altlastziele → TVPI Series Professional',
            'Kompakt, nur Tablet, gelegentliches IR-Thermo → Expander Gold',
            'Bewehrung auf Baustellen / flache Leitungen (0–3 m) → Construction Series',
            'Nichtmetallische Rohre, Hohlräume, GPR-Kartierung → NKS-1000 GPR',
            'Unbegrenztes Budget, lange Einsätze, Multi-Sensor-Fusion → Xseries',
          ],
        },
      },
      {
        type: 'heading',
        text: {
          en: 'Step 2 — apply the soil filter',
          de: 'Schritt 2 — wenden Sie den Bodenfilter an',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'If you routinely work in salt clay, volcanic soil, mangrove silt or areas with modern steel scrap, depth claims on the spec sheet are meaningless. Use a calculator: if your site average conductivity reads above 75 mS/m, you need either the 3D System Pro or the TVPI Series. All other devices will degrade gracefully, but not gracefully enough.',
          de: 'Wenn Sie regelmäßig in Salzton, vulkanischem Boden, Mangrovenschluff oder Gebieten mit modernen Stahlschrott arbeiten, sind Tiefenangaben auf dem Datenblatt bedeutungslos. Rechnen Sie nach: Wenn die durchschnittliche Leitfähigkeit Ihres Standorts über 75 mS/m liegt, brauchen Sie entweder das 3D System Pro oder die TVPI Series. Alle anderen Geräte degradieren anständig, aber nicht anständig genug.',
        },
      },
      {
        type: 'quote',
        text: {
          en: '“A rule we repeat every webinar: never max a detector\'s rated depth at purchase. Divide by two. That is the real operational depth in 70% of European soils.”',
          de: '„Eine Regel, die wir in jedem Webinar wiederholen: niemals die Nenntiefe eines Detektors beim Kauf ausschöpfen. Teilen Sie durch zwei. Das ist die reale Betriebstiefe in 70 % der europäischen Böden.“',
        },
      },
      {
        type: 'heading',
        text: {
          en: 'Step 3 — check the connectivity stack',
          de: 'Schritt 3 — prüfen Sie den Konnektivitäts-Stack',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'If you need to stream point clouds to a central office while still in the field, Xseries (Wi-Fi 6 + 4G LTE) is the only choice. If you need RTK-GPS for GIS integration, NKS-1000 and Xseries have native modules. Everything else: you can still record tracklogs via your tablet\'s own GPS.',
          de: 'Wenn Sie Point-Clouds noch im Feld an eine Zentrale streamen müssen, ist die Xseries (Wi-Fi 6 + 4G LTE) die einzige Wahl. Wenn Sie RTK-GPS für GIS-Integration brauchen, haben NKS-1000 und Xseries native Module. Bei allen anderen: Sie können trotzdem Tracklogs über das eigene GPS Ihres Tablets aufzeichnen.',
        },
      },
      {
        type: 'heading',
        text: {
          en: 'Step 4 — think about editions, not just base models',
          de: 'Schritt 4 — denken Sie an Editionen, nicht nur an Basismodelle',
        },
      },
      {
        type: 'list',
        text: {
          en: 'The delta between editions usually pays for itself if at least one of these is true:',
          de: 'Der Aufpreis zwischen Editionen amortisiert sich normalerweise, wenn mindestens eine dieser Bedingungen zutrifft:',
        },
        items: {
          en: [
            'You do more than 120 field days per year (→ warranty tier matters)',
            'You hand the device off to multiple operators (→ rugged case tier)',
            'You need onboarding or training delivered on site (→ Pro / Premium / Gold)',
            'Your reports are inspected by auditors or heritage bodies (→ calibration cert tier)',
          ],
          de: [
            'Sie machen mehr als 120 Feldtage pro Jahr (→ Garantie-Stufe zählt)',
            'Sie das Gerät an mehrere Bediener weitergeben (→ Robustheitsstufe des Koffers)',
            'Sie brauchen Onboarding oder Training vor Ort (→ Pro / Premium / Gold)',
            'Ihre Berichte werden von Auditoren oder Denkmalämtern geprüft (→ Kalibrier-Zertifikatsstufe)',
          ],
        },
      },
      {
        type: 'heading',
        text: {
          en: 'Step 5 — do a paid field trial before you buy',
          de: 'Schritt 5 — machen Sie einen bezahlten Feldtest vor dem Kauf',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'Every authorised Tero Vido distributor offers paid on-site demonstrations. Yes, you pay a small fee. Yes, it is worth every cent. A 90-minute trial on your own site, with your own soil, and a trained operator driving will tell you more than a year of YouTube reviews.',
          de: 'Jeder autorisierte Tero Vido Vertrieb bietet bezahlte Vor-Ort-Demonstrationen an. Ja, Sie zahlen eine kleine Gebühr. Ja, sie ist jeden Cent wert. Ein 90-minütiger Test auf Ihrem eigenen Gelände, mit Ihrem eigenen Boden, und von einem geschulten Bediener gefahren, sagt Ihnen mehr als ein Jahr YouTube-Reviews.',
        },
      },
      {
        type: 'paragraph',
        text: {
          en: 'Still undecided? Send us an email with your soil conductivity map, average target size and 3 most important specs. We reply within two business days and we will tell you straight if a cheaper product from a competitor is a better fit.',
          de: 'Immer noch unentschlossen? Schreiben Sie uns eine E-Mail mit Ihrer Leitfähigkeitskarte, durchschnittlicher Zielgröße und den 3 wichtigsten Spezifikationen. Wir antworten innerhalb von zwei Werktagen und sagen Ihnen offen, wenn ein günstigeres Konkurrenzprodukt besser passt.',
        },
      },
    ],
  },
] as const;

export const POSTS_BY_SLUG: Record<string, Post> = POSTS.reduce(
  (acc, p) => {
    acc[p.slug] = p;
    return acc;
  },
  {} as Record<string, Post>,
);

export const POSTS_SORTED_BY_DATE: Post[] = [...POSTS].sort(
  (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime(),
);

export const getCategoryLabel = (category: PostCategoryKey, locale: Locale): string =>
  POST_CATEGORIES[category][locale];

export const getPostsByCategory = (category: PostCategoryKey): Post[] =>
  POSTS.filter((p) => p.category === category);

export const formatDate = (dateISO: string, locale: Locale): string => {
  const d = new Date(dateISO);
  const opts: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  return new Intl.DateTimeFormat(locale === 'de' ? 'de-DE' : 'en-GB', opts).format(d);
};

export type { Locale };
