export const SITE = {
  name: 'Akademia Tertil',
  tagline: 'Mësim Kurani Online për Femra',
  description:
    'Akademia Tertil ofron mësim Kurani online për femra: mësimi i shkronjave, abetarja El-Kaideh En-Nuranijeh, Texhuid praktik dhe Xhuzi Amme me lexim. Mësime cilësore nga shtëpia juaj.',
  url: 'https://akademiatertil.com',
  locale: 'sq-AL',
  language: 'sq',
  region: 'AL',
  instagram: {
    handle: 'akademia_tertil',
    url: 'https://www.instagram.com/akademia_tertil/',
  },
  // SEO: long-tail Albanian keywords that real students search for
  keywords: [
    'mësim kurani',
    'mësim kurani online',
    'mësim kurani për femra',
    'mësim kurani shqip',
    'mësim arabishtje',
    'mësim arabishtje online',
    'texhuid',
    'texhuid online',
    'texhuid praktik',
    'abetare nuranije',
    'el-kaideh en-nuranijeh',
    'xhuzi amme',
    'mësimi i shkronjave arabe',
    'kuran shqip',
    'akademi islame online',
    'kurse kurani',
    'mësues kurani',
  ],
} as const;

export type Course = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  audience: string;
  longDescription: string;
  level: 'Fillestar' | 'I mesëm' | 'I avancuar';
  duration: string;
  // Used for the page's <title> and h1 — picked for SEO intent
  seoTitle: string;
  seoDescription: string;
};

export const COURSES: Course[] = [
  {
    slug: 'mesim-shkronjave-arabe',
    title: 'Mësimi i shkronjave arabe',
    shortTitle: 'Mësimi i shkronjave',
    description:
      'Hapi i parë në rrugëtimin tuaj me Kuran: njohja me alfabetin arab dhe shqiptimi i saktë i shkronjave.',
    audience: 'Fillestare absolute · Femra dhe fëmijë',
    longDescription:
      'Në këtë kurs do të mësoni nga zero shkronjat e alfabetit arab, format e tyre në fillim, mes dhe fund të fjalës, si dhe shqiptimin e saktë (mexharixhin) të secilës shkronjë. Mësimi zhvillohet online, hap pas hapi, me ushtrime praktike pas çdo seance.',
    level: 'Fillestar',
    duration: '4–6 javë',
    seoTitle: 'Mësimi i shkronjave arabe online | Akademia Tertil',
    seoDescription:
      'Mësoni shkronjat arabe nga zero — online, hap pas hapi, për femra dhe fëmijë. Bazë e fortë për leximin e Kuranit.',
  },
  {
    slug: 'abetare-nuranije',
    title: 'Mësimi i abetares El-Kaideh En-Nuranijeh',
    shortTitle: 'Abetare Nuranije',
    description:
      'Metoda më e njohur botërore për të mësuar leximin e Kuranit në mënyrë të saktë dhe sistematike.',
    audience: 'Fillestare · Femra dhe fëmijë',
    longDescription:
      'El-Kaideh En-Nuranijeh është abetarja klasike që përdoret në mbarë botën për të mësuar leximin e Kuranit. Përmes mësimeve online do të kaloni çdo faqe të kësaj abetareje me udhëzime praktike, duke ndërtuar themele të forta për leximin e Mus’hafit.',
    level: 'Fillestar',
    duration: '8–12 javë',
    seoTitle: 'Mësimi i abetares El-Kaideh En-Nuranijeh online | Akademia Tertil',
    seoDescription:
      'Mësimi i abetares Nuranije online për femra dhe fëmijë — metodë sistematike për lexim të saktë të Kuranit.',
  },
  {
    slug: 'texhuid-praktik',
    title: 'Texhuid praktik',
    shortTitle: 'Texhuid praktik',
    description:
      'Rregullat e Texhuidit në mënyrë praktike, të zbatuara drejtpërdrejt mbi leximin tuaj.',
    audience: 'Të mesëm · Femra që dinë të lexojnë Kuran',
    longDescription:
      'Ky kurs fokusohet në zbatimin praktik të rregullave të Texhuidit — gjatësia e zanoreve (medet), rregullat e nunit dhe mimit të sakin, idgam, ihfa, kalkale dhe më shumë. Çdo rregull shpjegohet me shembuj nga Kurani dhe pastaj praktikohet drejtpërdrejt me mësuesen.',
    level: 'I mesëm',
    duration: '10–14 javë',
    seoTitle: 'Texhuid praktik online për femra | Akademia Tertil',
    seoDescription:
      'Mësoni Texhuidin praktik online — rregullat e leximit të Kuranit, zbatuar hap pas hapi. Vetëm për femra.',
  },
  {
    slug: 'xhuzi-amme',
    title: 'Mësimi i Xhuzit Amme me lexim',
    shortTitle: 'Xhuzi Amme',
    description:
      'Lexim dhe sqarim i sureve të Xhuzit të fundit — pjesa më e lexuar e Kuranit në namaz.',
    audience: 'Të mesëm · Femra',
    longDescription:
      'Xhuzi Amme përmban suret që ne i lexojmë më së shpeshti në namaz. Në këtë kurs do të lexoni me mësuese çdo sure të këtij xhuzi me Texhuid të saktë, do të njihni kuptimin e përgjithshëm dhe do të ndihmoheni me memorizimin nëse e dëshironi.',
    level: 'I mesëm',
    duration: '12 javë',
    seoTitle: 'Mësimi i Xhuzit Amme online | Lexim me Texhuid | Akademia Tertil',
    seoDescription:
      'Mësoni leximin e Xhuzit Amme online me Texhuid të saktë — për femra. Suret që përdorim çdo ditë në namaz.',
  },
];
