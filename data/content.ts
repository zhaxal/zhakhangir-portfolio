import { Lang } from "@/contexts/language-context";

export type Localized = Record<Lang, string>;

/** Strings that are identical in both locales (proper nouns, journal names). */
const both = (value: string): Localized => ({ en: value, ja: value });

export const site = {
  name: "Zhakhangir Anuarbek",
  /* Localised so the header matches the hero: the JA locale renders the name in
     katakana, and showing two different renderings at once reads as two people. */
  wordmark: { en: "Zhakhangir", ja: "ジャハンギル" } as Localized,
  email: "anuarbek.z.b@gmail.com",
  url: "https://portfolio.zhakhangir.site",
  urlLabel: "portfolio.zhakhangir.site",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/zhaxal" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/zhakhangir/" },
  { label: "Instagram", href: "https://www.instagram.com/zhaxal/" },
];

export const nav = {
  work: { en: "Projects", ja: "プロジェクト" },
  experience: { en: "Experience", ja: "経歴" },
  contact: { en: "Contact", ja: "連絡先" },
  cta: { en: "Contact", ja: "連絡する" },
};

export const hero = {
  eyebrow: { en: "° Niigata, Japan", ja: "° 新潟、日本" },
  intro: {
    en: "Software engineer with proficiency in web development, recently started learning hardware. Based in Niigata, Japan.",
    ja: "Web開発を得意とするソフトウェアエンジニア。最近ハードウェアも学び始めました。日本・新潟在住。",
  },
  capabilities: [
    { en: "Web Development", ja: "Web開発" },
    { en: "Computer Vision & Hardware", ja: "コンピュータビジョンとハードウェア" },
  ] as Localized[],
  line1: { en: "Zhakhangir", ja: "ジャハンギル" },
  line2: { en: "Anuarbek", ja: "アヌアルベク" },
  stat: {
    en: "Portfolio · 2019 — 2026",
    ja: "ポートフォリオ · 2019 — 2026",
  },
  /* The ↑↗↓ glyphs are decorative and live in the components, wrapped in
     aria-hidden — a screen reader announcing "north east arrow" 25 times is
     noise, and the link text already says where it goes. */
  scroll: { en: "Scroll", ja: "スクロール" },
};

export interface WorkCard {
  name: string;
  year: string;
  href: string;
  image: string;
}

export interface ProjectPlate {
  chip: Localized;
  year: string;
  image: string;
  /**
   * `object-position` for the 16:8 plate. Both device photos are portrait, so a
   * centred cover crop lands on hands and background rather than the hardware —
   * the focal point names the band worth showing. Defaults to `50% 50%`.
   */
  focus?: string;
  title: Localized;
  href?: string;
  description: Localized;
  tags: string[];
  reveal: "left" | "right";
}

export const work = {
  label: { en: "Selected work", ja: "主な実績" },
  title: { en: "Projects", ja: "プロジェクト" },
  moscowSport: {
    title: {
      en: "Moscow Sport — event platforms",
      ja: "モスクワ・スポーツ — イベント基盤",
    },
    description: {
      en: "Event websites I built across the years",
      ja: "長年にわたって制作したイベントサイト",
    },
    /* The grid is bounded to one screenful; the toggle carries the total so
       collapsing it never costs the volume evidence. {n} = cards.length. */
    showAll: { en: "See all {n}", ja: "{n}件すべて表示" },
    showFewer: { en: "Show fewer", ja: "表示を減らす" },
    cards: [
      {
        name: "Labyrinth Orienteering",
        year: "//2022–25",
        href: "https://rogaine.mosgorsport.ru",
        image: "/projects/rogaine.png",
      },
      {
        name: "Ski Track of Russia",
        year: "//2022–26",
        href: "https://ski.sport.mos.ru",
        image: "/projects/ski.jpg",
      },
      {
        name: '"On Your Marks!" Run',
        year: "//2023–26",
        href: "https://running.mosgorsport.ru",
        image: "/projects/zabeg.jpg",
      },
      {
        name: "Pole Vault Festival",
        year: "//2023–25",
        href: "https://pryzki.sport.mos.ru",
        image: "/projects/pryzki.jpg",
      },
      {
        name: "Ice of Our Hope",
        year: "//2023–25",
        href: "https://led.sport.mos.ru",
        image: "/projects/led.png",
      },
      {
        name: "Moscow Interesting",
        year: "//2025",
        href: "https://interesnaya.sport.mos.ru",
        image: "/projects/interesnaya.jpg",
      },
      {
        name: "Nation's Cross",
        year: "//2025",
        href: "https://cross.sport.mos.ru",
        image: "/projects/cross.jpg",
      },
      {
        name: "Technical Sports Festival",
        year: "//2025",
        href: "https://tech-fest.sport.mos.ru",
        image: "/projects/techfest.jpg",
      },
      {
        name: "GTO Point at VDNH",
        year: "//2021",
        href: "https://gtopoint.moscow.sport",
        image: "/projects/gto.jpg",
      },
    ] as WorkCard[],
  },
  plates: [
    {
      chip: { en: "Computer Vision", ja: "コンピュータビジョン" },
      year: "//2026",
      image: "/projects/greenhouse-device.jpg",
      // Lifts the band onto the tablet and its on-screen greenhouse view.
      focus: "50% 35%",
      title: {
        en: "Tomato-harvesting robot vision",
        ja: "トマト収穫ロボットの視覚システム",
      },
      description: {
        en: "Master’s thesis. Stereo depth and on-device ripeness detection on an edge device.",
        ja: "修士研究。エッジデバイス上でのステレオ深度と熟度判定。",
      },
      tags: ["Python", "YOLOv8", "OpenCV", "OAK-D Lite"],
      reveal: "left",
    },
    {
      chip: { en: "Edge AI", ja: "エッジAI" },
      year: "//2026",
      image: "/projects/looq-camera.jpg",
      // Drops the band onto the camera body so the LOOQ wordmark reads.
      focus: "50% 70%",
      title: {
        en: "Looq — portable smart camera",
        ja: "Looq — ポータブル・スマートカメラ",
      },
      href: "https://looq.jp",
      description: {
        en: "A battery-powered camera measuring visitor attention on-device, with its own hotspot and web UI.",
        ja: "バッテリー駆動のカメラが来訪者の注目度をオンデバイスで計測。自前のホットスポットとWeb UIを備えます。",
      },
      tags: ["Python", "Hailo NPU", "Raspberry Pi", "Next.js"],
      reveal: "right",
    },
  ] as ProjectPlate[],
};

export interface CapabilityRow {
  label: Localized;
  body: Localized;
  chips: string[];
}

export const capabilities = {
  label: { en: "Capabilities", ja: "できること" },
  title: [
    { en: "Skills &", ja: "スキルと" },
    { en: "Tools", ja: "ツール" },
  ] as Localized[],
  rows: [
    {
      label: { en: "Web Development", ja: "Web開発" },
      body: {
        en: "Building and running web apps end to end — the interface, the API, the database and the server it sits on.",
        ja: "インターフェースからAPI、データベース、稼働するサーバーまで、Webアプリを一貫して構築・運用します。",
      },
      chips: [
        "Next.js / React",
        "PostgreSQL / MongoDB",
        "Go / Node",
        "Docker / Nginx",
      ],
    },
    {
      label: {
        en: "Computer Vision & Hardware",
        ja: "コンピュータビジョンとハードウェア",
      },
      body: {
        en: "Getting vision models to run on small devices, and wiring up the cameras and sensors they read from.",
        ja: "小型デバイス上で視覚モデルを動かし、そこに繋がるカメラやセンサーを組み込みます。",
      },
      chips: [
        "YOLO / OpenCV",
        "Stereo depth",
        "Edge NPUs",
        "Raspberry Pi",
        "Sensors",
      ],
    },
  ] as CapabilityRow[],
};

export interface ExperienceRow {
  period: Localized;
  company: string;
  href: string;
  role: Localized;
  body: Localized;
}

export interface EducationCell {
  name: Localized;
  href: string;
  subtitle: Localized;
}

export const experience = {
  label: { en: "Experience", ja: "経歴" },
  title: [
    { en: "Where I've", ja: "これまでの" },
    { en: "Worked", ja: "仕事" },
  ] as Localized[],
  rows: [
    {
      period: { en: "2026", ja: "2026年" },
      company: "Looq · Japan",
      href: "https://looq.jp",
      role: {
        en: "Hardware / Software Engineering Intern",
        ja: "ハードウェア／ソフトウェアエンジニア インターン",
      },
      body: {
        en: "Built a portable smart camera running on-device vision models to measure visitor attention.",
        ja: "オンデバイスの視覚モデルで来訪者の注目度を計測するポータブル・スマートカメラを開発。",
      },
    },
    {
      period: { en: "2021 — 2026", ja: "2021年 — 2026年" },
      company: "Moscow Sport · Russia",
      href: "https://mosgorsport.ru",
      role: {
        en: "Fullstack Engineer, freelance",
        ja: "フルスタックエンジニア（フリーランス）",
      },
      body: {
        en: "10+ event web apps from scratch for 5,000+ users, owning backend, frontend and deployment.",
        ja: "5,000人以上が利用するイベントWebアプリを10件以上ゼロから開発し、バックエンドからデプロイまで担当。",
      },
    },
    {
      period: { en: "2023 — 2024", ja: "2023年 — 2024年" },
      company: "ApartX · Kazakhstan",
      href: "https://apartx.co",
      role: { en: "Fullstack Engineer", ja: "フルスタックエンジニア" },
      body: {
        en: "Biometric tenant verification across signup, booking and check-in, and calendar sync with Airbnb and Booking.com.",
        ja: "登録・予約・チェックインでの生体認証によるテナント確認と、AirbnbおよびBooking.comのカレンダー同期を実装。",
      },
    },
    {
      period: { en: "2021 — 2023", ja: "2021年 — 2023年" },
      company: "D. Serikbayev EKTU · Kazakhstan",
      href: "https://www.ektu.kz",
      role: { en: "R&D Engineer", ja: "R&Dエンジニア" },
      body: {
        en: "Led a GPS fleet-management system and satellite remote-sensing work for farmers.",
        ja: "GPSによる車両管理システムを主導し、農家向けの衛星リモートセンシングにも従事。",
      },
    },
  ] as ExperienceRow[],
  educationLabel: { en: "Education", ja: "学歴" },
  education: [
    {
      name: { en: "Niigata University", ja: "新潟大学" },
      href: "https://www.niigata-u.ac.jp",
      subtitle: {
        en: "Master’s, Science and Technology · 2024–2026",
        ja: "修士 自然科学研究科 · 2024〜2026",
      },
    },
    {
      name: both("Astana IT University"),
      href: "https://astanait.edu.kz/en/main-page/",
      subtitle: {
        en: "Bachelor’s, Software Engineering · 2019–2022",
        ja: "学士 ソフトウェア工学 · 2019〜2022年",
      },
    },
  ] as EducationCell[],
};

export interface PublicationRow {
  title: Localized;
  description: Localized;
  year: string;
  /**
   * DOI or event page. The row only performs the system's invert-on-hover
   * gesture when this is set — a dramatic hover on something that goes nowhere
   * is an affordance lie, and these are the page's least verifiable claims.
   */
  href?: string;
}

export const publications = {
  label: { en: "Publications & Presentations", ja: "論文と発表" },
  title: [
    { en: "Papers &", ja: "論文と" },
    { en: "Presentations", ja: "発表" },
  ] as Localized[],
  rows: [
    {
      title: both("IVS 2026 Kyoto"),
      description: both("Project presenter — looq.jp smart camera"),
      year: "2026",
    },
    {
      title: both("Cost-Effectiveness of Remotely Sensed Data in Agriculture"),
      description: both("Chemical Engineering Transactions, vol. 103"),
      year: "2023",
    },
    {
      title: both("Integrated Monitoring System for Growing Grain Crops"),
      description: both("Chemical Engineering Transactions, vol. 103"),
      year: "2023",
    },
    {
      title: both("XX CIGR World Congress"),
      description: both("Poster presentation — Kyoto"),
      year: "2022",
    },
  ] as PublicationRow[],
};

export const contact = {
  label: { en: "Contact", ja: "連絡先" },
  title: [
    { en: "Get in", ja: "ご連絡" },
    { en: "Touch", ja: "ください" },
  ] as Localized[],
  /* Answers the question a recruiter otherwise has to guess at the one point
     on the page where they decide whether to write. */
  availability: {
    en: "Open to engineering roles in Japan and to freelance work.",
    ja: "日本でのエンジニア職、フリーランスのご相談を受け付けています。",
  },
  emailLabel: { en: "Email", ja: "メールアドレス" },
  emailPlaceholder: both("you@company.com"),
  messageLabel: { en: "Message", ja: "メッセージ" },
  messagePlaceholder: {
    en: "A line about the project",
    ja: "プロジェクトについて一言",
  },
  send: { en: "Send message", ja: "送信する" },
  sending: { en: "Sending…", ja: "送信中…" },
  /* A stated window reassures where "soon" only defers the question. */
  sent: {
    en: "Message sent — I’ll reply within a few days",
    ja: "メッセージを送信しました。数日以内に返信します",
  },
  /* Names the failure and both recovery routes, and stays parallel with the
     timeout message so the two read as one system rather than two voices. */
  failed: {
    en: "Couldn’t send — try again, or email me directly",
    ja: "送信できませんでした。再度お試しいただくか、直接メールしてください",
  },
  emailInvalid: {
    en: "Enter a valid email address",
    ja: "有効なメールアドレスを入力してください",
  },
  emailRequired: {
    en: "Email is required",
    ja: "メールアドレスを入力してください",
  },
  messageRequired: {
    en: "Message is required",
    ja: "メッセージを入力してください",
  },
  /* Shown only when the submit never settles — Firestore queues writes offline
     rather than rejecting, so without a timeout the form would hang forever. */
  timedOut: {
    en: "No response — check your connection, or email me directly",
    ja: "応答がありません。接続を確認するか、直接メールしてください",
  },
  /* <noscript>: the form is client-side only, so say so rather than present a
     control that silently does nothing. */
  noScript: {
    en: "This form needs JavaScript. Email me directly at",
    ja: "このフォームにはJavaScriptが必要です。直接メールしてください：",
  },
};

export const a11y = {
  skipToContent: { en: "Skip to content", ja: "本文へスキップ" },
};

export const footer = {
  location: { en: "Niigata, Japan", ja: "新潟、日本" },
  legal: both("2026 Zhakhangir Anuarbek"),
};
