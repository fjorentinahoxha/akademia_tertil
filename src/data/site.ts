export const SITE = {
  name: 'Akademia Tertil',
  tagline: 'Mësim Kurani Online për Femra',
  description:
    'Akademia Tertil ofron mësim Kurani online për femra: mësimi i shkronjave, abetarja El-Kaideh En-Nuranijeh, Texhuid praktik dhe Xhuzi Amme me lexim. Mësime cilësore nga shtëpia juaj.',
  url: 'https://akademia-tertil.com',
  locale: 'sq-AL',
  language: 'sq',
  region: 'AL',
  instagram: {
    handle: 'akademia_tertil',
    url: 'https://www.instagram.com/akademia_tertil/',
  },
  schedule: {
    frequency: 'Një herë në javë',
    pauseNote: 'Pushim gjatë muajit të Ramazanit',
  },
  currency: { code: 'ALL', label: 'lekë' },
  // SEO: long-tail Albanian keywords that real students search for
  keywords: [
    'mësim kurani',
    'mësim kurani online',
    'mësim kurani për femra',
    'mësim kurani shqip',
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
  /** Monthly fee in new Albanian lekë (ALL). */
  monthlyPrice: number;
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
    audience: 'Fillestare absolute · Vetëm për femra',
    longDescription:
      'Në këtë kurs do të mësoni nga zero shkronjat e alfabetit arab, format e tyre në fillim, mes dhe fund të fjalës, si dhe shqiptimin e saktë (مخارج الحروف) të secilës shkronjë. Mësimi zhvillohet online, hap pas hapi, me ushtrime praktike pas çdo seance.',
    level: 'Fillestar',
    duration: 'Në bazë të ecurisë së grupit',
    monthlyPrice: 1500,
    seoTitle: 'Mësimi i shkronjave arabe online | Akademia Tertil',
    seoDescription:
      'Mësoni shkronjat arabe nga zero — online, hap pas hapi, vetëm për femra. Bazë e fortë për leximin e Kuranit.',
  },
  {
    slug: 'abetare-nuranije',
    title: 'Mësimi i abetares El-Kaideh En-Nuranijeh',
    shortTitle: 'Abetare Nuranije',
    description:
      'Metoda më e njohur botërore për të mësuar leximin e Kuranit në mënyrë të saktë dhe sistematike.',
    audience: 'Fillestare · Vetëm për femra',
    longDescription:
      'El-Kaideh En-Nuranijeh është abetarja klasike që përdoret në mbarë botën për të mësuar leximin e Kuranit. Përmes mësimeve online do të kaloni çdo faqe të kësaj abetareje me udhëzime praktike, duke ndërtuar themele të forta për leximin e Mus’hafit.',
    level: 'Fillestar',
    duration: 'Në bazë të ecurisë së grupit',
    monthlyPrice: 2000,
    seoTitle: 'Mësimi i abetares El-Kaideh En-Nuranijeh online | Akademia Tertil',
    seoDescription:
      'Mësimi i abetares Nuranije online vetëm për femra — metodë sistematike për lexim të saktë të Kuranit.',
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
    duration: 'Në bazë të ecurisë së grupit',
    monthlyPrice: 1500,
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
    duration: 'Në bazë të ecurisë së grupit',
    monthlyPrice: 1500,
    seoTitle: 'Mësimi i Xhuzit Amme online | Lexim me Texhuid | Akademia Tertil',
    seoDescription:
      'Mësoni leximin e Xhuzit Amme online me Texhuid të saktë — për femra. Suret që përdorim çdo ditë në namaz.',
  },
  {
    slug: 'xhuzi-tebarek',
    title: 'Mësimi i Xhuzit Tebarek me lexim',
    shortTitle: 'Xhuzi Tebarek',
    description:
      'Lexim me Texhuid i xhuzit të 29-të të Kuranit — fillon me suren Mulk dhe përmban disa nga suret më të dashura.',
    audience: 'Të mesëm · Femra',
    longDescription:
      'Xhuzi Tebarek (xhuzi i 29-të) fillon me suren Mulk dhe përmban suret Mulk, Kalem, Hakka, Mearixh, Nuh, Xhin, Muzemmil, Mudethir, Kijame, Insan dhe Murselat. Në këtë kurs do të lexoni çdo sure me mësuesen, me Texhuid të saktë, do të njihni kuptimin e përgjithshëm dhe do të ndihmoheni edhe me memorizimin nëse dëshironi.',
    level: 'I mesëm',
    duration: 'Në bazë të ecurisë së grupit',
    monthlyPrice: 1500,
    seoTitle: 'Mësimi i Xhuzit Tebarek online | Lexim me Texhuid | Akademia Tertil',
    seoDescription:
      'Mësoni leximin e Xhuzit Tebarek online me Texhuid — surja Mulk dhe suret e tjera të xhuzit të 29-të. Vetëm për femra.',
  },
  {
    slug: 'surja-kehf',
    title: 'Mësimi i sures Kehf',
    shortTitle: 'Surja Kehf',
    description:
      'Lexim me Texhuid i sures Kehf — surja e xhumasë, me 110 ajete dhe katër tregime madhështore.',
    audience: 'Të mesëm · Femra',
    longDescription:
      'Surja Kehf është sura që i Dërguari i Allahut ﷺ na ka porositur ta lexojmë çdo të premte. Përmban 110 ajete dhe katër tregime madhështore — të rinjtë e shpellës, kopshtarin mosmirënjohës, Musain a.s. me Hidrin, dhe Dhulkarnejnin. Në këtë kurs do të lexoni çdo ajet me mësuesen, me Texhuid të saktë, do të njihni kuptimin e tregimeve dhe mësimet e tyre, dhe mund të ndihmoheni edhe me memorizimin.',
    level: 'I mesëm',
    duration: 'Në bazë të ecurisë së grupit',
    monthlyPrice: 2000,
    seoTitle: 'Mësimi i sures Kehf online | Surja e xhumasë | Akademia Tertil',
    seoDescription:
      'Mësoni leximin e sures Kehf online me Texhuid — surja e xhumasë me 110 ajete. Vetëm për femra.',
  },
];

export type Testimonial = {
  /** ISO language code so screen readers + Google know which language each quote is in. */
  lang: 'sq' | 'en';
  author: string;
  text: string;
};

// Real WhatsApp messages from students, transcribed verbatim (no edits to the
// students' voice). Order is loose — masonry layout reads top-to-bottom per column.
export const TESTIMONIALS: Testimonial[] = [
  {
    lang: 'sq',
    author: 'Nxënëse e Akademisë',
    text: 'Kam pasur nderin të ndjek dhe vazhdoj të ndjek kursin e abetares kuranore me zyshen e përkushtuar. Ajo është dritë udhëzuese, me qartësinë dhe urtësinë e saj që depërtojnë në zemër. Të mësosh dhe të lexosh fjalën e Allahut nën udhëheqjen e saj është bekim i vërtetë. Falë përkushtimit të saj të jashtëzakonshëm, çdo mësim është një hap drejt dritës dhe paqes shpirtërore. E rekomandoj me gjithë zemër këtë kurs për këdo që dëshiron të përjetojë mësimin e leximit e fjalës hyjnore.',
  },
  {
    lang: 'sq',
    author: 'Nxënëse e Akademisë',
    text: 'Faleminderit zysha për përkushtimin tuaj. Mësimi i Kuranit ka qenë një vendim që duhej marrë prej kohësh. Elhamdulilah që e nisa edhe këtë Ramazan munda të lexoja edhe të ndjeja qetësinë e Kuranit. Në fillim mendoja se do të ishte e vështirë, por përkundrazi me ndihmën e Allahut dhe tuajen ishte gjithmonë edhe më e lehtë. Tani edhe në makinë dëgjoj vetëm Kuran sepse dua të më rritet veshi edhe e shijoj shumë. Imagjinoj veten në të ardhmen që edhe unë të recitoj aq rrjedhshëm. Mirësi e madhe — kushdo që e nis s’ka për të dalë i humbur, kjo është e sigurt. Faleminderit zysha për këshillat, për përkushtimin dhe disiplinën tuaj. Jam e bekuar që të kam zysh.',
  },
  {
    lang: 'en',
    author: 'Nxënëse e Akademisë',
    text: 'Thank you, zysha, for being such a great teacher! You made the lesson easy and fun, you also are super kind and patient. This always makes me so proud of you — you are one of the best teachers I’ve ever had! Well done for such a great job you are doing. May Allah bless you and all your family.',
  },
  {
    lang: 'sq',
    author: 'Nxënëse e Akademisë',
    text: 'Selam alejkum. Doja të ndaja përshtypjen time për mësimin e leximit të Kuranit. Mësimi i Kuranit ka ardhur në një moment sprove në jetën time dhe erdhi si ndriçim për shpirtin tim. Për çdo leksion me zyshen mu mbushte shpirti me më shumë dashuri për Zotin dhe me më shumë kurajo për të mësuar leximin. Mbështetja e zysheve me inkurajim më ka bërë të mos heq dorë dhe të mësoj leximin e librit më të bukur në botë. Kam bërë universitet, po subhanallah kur hapa Kuranin dhe dija të lexoja ka qenë një emocion aq i bukur, aq wow, saqë u ndjeva sikur kisha mbaruar jo një universitet po dy, elhamdulilah. Leximi i Kuranit të jep një relaks, një ndjesi përmbushjeje që unë e kam ndjerë vetëm gjatë leximit. Elhamdulilah që Allahu ma ka dhënë këtë mundësi dhe elhamdulilah që më mundësoi ta mësoj me zyshen më të mirë, e cila ka durim dhe jep më shumë se sa e ka ora e mësimit. Allahu të shpërbleftë zysha, Allahu ju shpërbleftë edhe juve goca — jemi një grup shumë i bukur.',
  },
  {
    lang: 'sq',
    author: 'Nxënëse e Akademisë',
    text: 'Selam alejkum. Është hera e parë që bëj kurs për Kuranin dhe jam ndjerë shumë mirë në këtë grup — shpjegimi është shumë i qartë dhe i kuptueshëm. Allahu të shpërbleftë për mundin.',
  },
  {
    lang: 'sq',
    author: 'Nxënëse e Akademisë',
    text: 'Zyshe, dua t’ju falënderoj shumë për mënyrën si jepni mësim! Ju keni gjithmonë durim me ne dhe na motivoni që të japim më të mirën. Më pëlqen shumë atmosfera pozitive në orë — ndihem rehat dhe më vjen dëshirë të mësoj. Allahu ta shpërbleftë për gjithçka.',
  },
  {
    lang: 'sq',
    author: 'Nxënëse e Akademisë',
    text: 'Selam alejkum. Zysh, Allahu jua shpërbleftë ju për përkushtimin tuaj. Ndonjëherë na merr kjo botë përpara edhe harrojmë Ahiretin. Ndonëse online, mësimi i Kuranit me ju na bëhet akoma edhe më i lehtë. Je kaq e durueshme, e përkushtuar, e butë edhe këmbëngulëse, që ne të mësojmë edhe të arrijmë kënaqësinë e Allahut. Sa mirë bëra që e nisa mësimin me ju edhe motrat — po e shijoj shumë. S’ka nevojë të mendohesh dy herë. Allahu ju shpërbleftë, ju nderoftë në këtë botë edhe në botën tjetër.',
  },
  {
    lang: 'sq',
    author: 'Nxënëse e Akademisë',
    text: 'Falënderimi i takon Allahut që më ka përzgjedhur të lexoj Kuranin, dhe që më përzgjodhi ta jetoj muajin e bekuar të Ramazanit. Edhe pse nuk jam shumë e mirë me leximin — sepse është viti i dytë që po e lexoj — këtë vit e kam lexuar Kuranin me zemër dhe me shumë përqendrim, jo thjesht për të lexuar fjalët. Para çdo sureje kërkoja kuptimin e saj, emrin, hyrjen, zhvillimin dhe mesazhin, dhe meditoja mbi çdo ajet. Çdo pjesë më prekte shpirtin dhe më jepte një kënaqësi që nuk e kisha përjetuar më parë. Kam mësuar shumë për emrat e Allahut dhe kuptimin e tyre dhe i kam kthyer në lutje. Gjatë lutjeve nuk kam harruar edhe mësueset e mia, sepse pa ato nuk do kisha qenë e përqendruar dhe e kujdesshme në rregullat e texhvidit. Për ndihmën dhe përkushtimin e tyre jam shumë mirënjohëse. Shpresoj që kushdo që e lexon këtë mesazh të ndiejë po atë kënaqësi dhe qetësi që unë përjetova, dhe ta përjetojë Kuranin me zemër.',
  },
];
