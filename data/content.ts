import { Lang } from "@/contexts/language-context";

export type Localized = Record<Lang, string>;

/** The two lanes that run side by side down the page. */
export type LaneId = "work" | "projects";

/** Strings that are identical in both locales (proper nouns, journal names). */
const both = (value: string): Localized => ({ en: value, ja: value });

export const site = {
  name: { en: "Zhakhangir Anuarbek", ja: "ジャハンギル・アヌアルベク" } as Localized,
  /* The name is painted on two lines. */
  nameLines: {
    en: ["Zhakhangir", "Anuarbek"],
    ja: ["ジャハンギル", "アヌアルベク"],
  } as Record<Lang, [string, string]>,
  role: { en: "Full-stack engineer", ja: "フルスタックエンジニア" } as Localized,
  email: "anuarbek.z.b@gmail.com",
  url: "https://portfolio.zhakhangir.site",
  urlLabel: "portfolio.zhakhangir.site",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/zhaxal" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/zhakhangir/" },
  { label: "Instagram", href: "https://www.instagram.com/zhaxal/" },
];

/*
 * Copy rule for this file: plain and professional. The road theme is carried
 * by the visuals; the words say what things are (Work, Projects, Contact).
 */

export const lanes: Record<LaneId, { name: Localized; lead: Localized }> = {
  work: {
    name: { en: "Work", ja: "職歴" },
    lead: {
      en: "Web products owned end to end, from requirements to live support on event day.",
      ja: "要件定義からイベント当日のサポートまで、Webプロダクトを一貫して担当。",
    },
  },
  projects: {
    name: { en: "Projects", ja: "プロジェクト" },
    lead: {
      en: "Event sites built for ANO Mossport, and my master's thesis project.",
      ja: "ANO Mossport向けに開発したイベントサイトと、修士研究のプロジェクト。",
    },
  },
};

/**
 * The sections of the page, in order. Ids are the in-page anchors. On wide
 * screens Work and Projects start at the same point, side by side.
 */
export const stops: { id: string; name: Localized }[] = [
  { id: "work", name: lanes.work.name },
  { id: "projects", name: lanes.projects.name },
  { id: "record", name: { en: "Education", ja: "学歴" } },
  { id: "contact", name: { en: "Contact", ja: "連絡先" } },
];

export const nav = {
  sections: { en: "Sections", ja: "セクション" },
  lanes: { en: "Work and projects", ja: "職歴とプロジェクト" },
  next: { en: "Next", ja: "次は" },
  contact: { en: "Contact", ja: "連絡する" },
  menu: { en: "Menu", ja: "メニュー" },
  close: { en: "Close", ja: "閉じる" },
  language: { en: "Language", ja: "言語" },
  top: { en: "Back to top", ja: "トップへ戻る" },
};

export const hero = {
  intro: {
    en: "I build and run production web applications end to end: front end, back end, database and deployment.",
    ja: "フロントエンド、バックエンド、データベース、デプロイまで、本番運用のWebアプリケーションを一貫して開発・運用しています。",
  },
  /* The LED board: what I am open to. */
  notice: {
    title: { en: "Availability", ja: "対応状況" },
    rows: [
      {
        type: { en: "Hire", ja: "採用" },
        text: { en: "Engineering roles in Japan", ja: "日本でのエンジニア職" },
        status: { en: "Open", ja: "受付中" },
      },
      {
        type: { en: "Freelance", ja: "業務委託" },
        text: { en: "Project work", ja: "プロジェクトのご相談" },
        status: { en: "Open", ja: "受付中" },
      },
    ],
  },
  contact: { en: "Contact", ja: "連絡先" },
};

export interface Fact {
  label: Localized;
  value: Localized;
}

export interface SiteCard {
  name: Localized;
  years: string;
  href: string;
  image: string;
}

/** The Work lane: roles, from the CV. */
export const work = {
  mossport: {
    id: "mossport",
    year: "2021",
    name: both("ANO Mossport"),
    meta: {
      en: "Full-stack engineer, contract · Moscow, remote · Aug 2021 – Jun 2026",
      ja: "フルスタックエンジニア（業務委託）· モスクワ（リモート）· 2021年8月 – 2026年6月",
    },
    lead: {
      en: "Built and ran event websites where 5,000+ people registered, tracked points and won prizes, owning the React and TypeScript front end, the Node.js back end, the PostgreSQL database and deployment.",
      ja: "5,000人以上が登録し、ポイントを貯め、賞品を獲得したイベントサイトを構築・運用。React／TypeScriptのフロントエンド、Node.jsのバックエンド、PostgreSQLのデータベース、デプロイまでを担当。",
    },
    facts: [
      {
        label: { en: "Event applications shipped", ja: "開発したイベントアプリ" },
        value: { en: "10+", ja: "10件以上" },
      },
      {
        label: { en: "People registered", ja: "登録者数" },
        value: { en: "5,000+", ja: "5,000人以上" },
      },
      {
        label: { en: "Largest events", ja: "最大規模のイベント" },
        value: { en: "Up to 1,000 attendees", ja: "参加者最大1,000人" },
      },
      {
        label: { en: "Team", ja: "チーム" },
        value: { en: "Solo, then 2 engineers", ja: "1人から2人体制へ" },
      },
    ] as Fact[],
    stops: [
      {
        en: "Developed 10+ event web applications with Next.js, TypeScript and Node.js REST APIs, with end-to-end ownership from requirements to live support for events of up to 1,000 attendees.",
        ja: "Next.js、TypeScript、Node.jsのREST APIで10件以上のイベントWebアプリを開発。要件定義から、最大1,000人が参加するイベント当日のサポートまで一貫して担当。",
      },
      {
        en: "Migrated the data layer from Firebase/Firestore (NoSQL) on Google Cloud to PostgreSQL with Kysely, which removed the data inconsistencies of the document model.",
        ja: "データ層をGoogle Cloud上のFirebase／Firestore（NoSQL）から、Kyselyを用いたPostgreSQLへ移行。ドキュメントモデルに起因するデータ不整合を解消。",
      },
      {
        en: "Set up CI/CD with Docker Compose and Coolify on Linux servers, so linting, type checks, builds and SQL migrations ran before every deploy.",
        ja: "LinuxサーバーにDocker ComposeとCoolifyでCI/CDを構築。デプロイのたびにリント、型チェック、ビルド、SQLマイグレーションを実行。",
      },
      {
        en: "Grew the work from a solo role to a 2-person team and mentored 1 developer through Git code review.",
        ja: "1人で始めた業務を2人チームへ拡大し、Gitでのコードレビューを通じて開発者1名を指導。",
      },
    ] as Localized[],
    proof: { en: "See nine of the sites", ja: "サイト9件を見る" },
  },
  apartx: {
    id: "apartx",
    year: "2023",
    name: both("ApartX"),
    href: "https://apartx.co",
    hrefLabel: both("apartx.co"),
    meta: {
      en: "Full-stack engineer · Kazakhstan · Jun 2023 – Apr 2024",
      ja: "フルスタックエンジニア · カザフスタン · 2023年6月 – 2024年4月",
    },
    lead: {
      en: "Web and mobile features for a short-term rental platform, in a 2-engineer team.",
      ja: "2人のエンジニアチームで、短期賃貸プラットフォームのWeb・モバイル機能を担当。",
    },
    stops: [
      {
        en: "Maintained web and mobile features with React, Apollo GraphQL, MongoDB, Redis, Meteor.js and Cordova, including fixes for unreliable native functionality.",
        ja: "React、Apollo GraphQL、MongoDB、Redis、Meteor.js、CordovaでWeb・モバイル機能を保守。不安定だったネイティブ機能の修正も担当。",
      },
      {
        en: "Integrated the biometric.vision external API to verify users with a selfie and a government ID.",
        ja: "外部APIのbiometric.visionを連携し、自撮り写真と公的身分証による本人確認を実装。",
      },
      {
        en: "Integrated Channex webhooks as the source of truth for Airbnb and Booking.com availability, which ended double bookings.",
        ja: "ChannexのWebhookをAirbnb・Booking.comの空室状況の基準とする連携を実装し、ダブルブッキングを解消。",
      },
      {
        en: "Built MongoDB aggregation pipelines for dashboard reporting and added soft deletion with a data migration, which preserved records that hard deletes had destroyed.",
        ja: "ダッシュボード集計用のMongoDBアグリゲーションパイプラインを構築。データ移行を伴う論理削除を導入し、物理削除では失われていた記録を保持。",
      },
    ] as Localized[],
  },
};

/** The Projects lane: work that can be opened, then the thesis in brief. */
export const projects = {
  sites: {
    id: "sites",
    year: "2021",
    name: {
      en: "Event sites for ANO Mossport",
      ja: "ANO Mossport向けイベントサイト",
    },
    meta: {
      en: "Nine of the 10+ applications · 2021 – 2026",
      ja: "10件以上のうち9件 · 2021 – 2026",
    },
    note: {
      en: "Each one opens the public site.",
      ja: "各カードから公開サイトを開けます。",
    },
    cards: [
      {
        name: { en: '"On Your Marks!" Run', ja: "「位置について！」ランニング大会" },
        years: "2023–26",
        href: "https://running.mosgorsport.ru",
        image: "/projects/zabeg.jpg",
      },
      {
        name: { en: "Ski Track of Russia", ja: "ロシア・スキートラック" },
        years: "2022–26",
        href: "https://ski.sport.mos.ru",
        image: "/projects/ski.jpg",
      },
      {
        name: { en: "Labyrinth Orienteering", ja: "ラビリンス・オリエンテーリング" },
        years: "2022–25",
        href: "https://rogaine.mosgorsport.ru",
        image: "/projects/rogaine.png",
      },
      {
        name: { en: "Nation's Cross", ja: "クロス・ネーション" },
        years: "2025",
        href: "https://cross.sport.mos.ru",
        image: "/projects/cross.jpg",
      },
      {
        name: { en: "Moscow Interesting", ja: "「面白いモスクワ」街歩きクエスト" },
        years: "2025",
        href: "https://interesnaya.sport.mos.ru",
        image: "/projects/interesnaya.jpg",
      },
      {
        name: { en: "Technical Sports Festival", ja: "テクニカルスポーツ・フェスティバル" },
        years: "2025",
        href: "https://tech-fest.sport.mos.ru",
        image: "/projects/techfest.jpg",
      },
      {
        name: { en: "Ice of Our Hope", ja: "「私たちの希望の氷」スケート大会" },
        years: "2023–25",
        href: "https://led.sport.mos.ru",
        image: "/projects/led.png",
      },
      {
        name: { en: "Pole Vault Festival", ja: "棒高跳びフェスティバル" },
        years: "2023–25",
        href: "https://pryzki.sport.mos.ru",
        image: "/projects/pryzki.jpg",
      },
      {
        name: { en: "GTO Point at VDNH", ja: "VDNH「GTOポイント」" },
        years: "2021",
        href: "https://gtopoint.moscow.sport",
        image: "/projects/gto.jpg",
      },
    ] as SiteCard[],
  },
  thesis: {
    id: "thesis",
    year: "2024",
    name: {
      en: "Tomato-harvesting robot vision system",
      ja: "トマト収穫ロボットの視覚システム",
    },
    meta: {
      en: "Master's thesis · Niigata University and Hitachi",
      ja: "修士論文 · 新潟大学 × Hitachi",
    },
    lead: {
      en: "Built the vision system that finds ripe tomatoes and measures their distance for a harvesting robot, as the sole developer in joint research with Hitachi.",
      ja: "Hitachiとの共同研究で、収穫ロボットが熟したトマトを見つけ、その距離を測るための視覚システムを単独で開発。",
    },
  },
};

export interface School {
  name: Localized;
  href: string;
  degree: Localized;
  period: string;
  status: Localized;
}

export interface Paper {
  year: string;
  title: Localized;
  venue: Localized;
  href: string;
}

export const record = {
  title: { en: "Education, papers and tools", ja: "学歴・論文・技術" },
  educationTitle: { en: "Education", ja: "学歴" },
  education: [
    {
      name: { en: "Niigata University", ja: "新潟大学" },
      href: "https://www.niigata-u.ac.jp",
      degree: {
        en: "Master's degree, Graduate School of Science and Technology",
        ja: "大学院自然科学研究科 修士号",
      },
      period: "2024 – 2026",
      status: { en: "Graduated", ja: "修了" },
    },
    {
      name: { en: "Astana IT University", ja: "アスタナIT大学" },
      href: "https://astanait.edu.kz/en/main-page/",
      degree: {
        en: "Bachelor's degree in Software Engineering",
        ja: "ソフトウェア工学 学士号",
      },
      period: "2019 – 2022",
      status: { en: "Graduated", ja: "卒業" },
    },
  ] as School[],
  papersTitle: { en: "Papers and presentations", ja: "論文・発表" },
  papers: [
    {
      year: "2023",
      title: both("Cost-Effectiveness of Remotely Sensed Data in Agriculture"),
      venue: both("Chemical Engineering Transactions, vol. 103"),
      href: "https://doi.org/10.3303/CET23103008",
    },
    {
      year: "2023",
      title: both("Integrated Monitoring System for Growing Grain Crops"),
      venue: both("Chemical Engineering Transactions, vol. 103"),
      href: "https://doi.org/10.3303/CET23103009",
    },
    {
      year: "2022",
      title: both("XX CIGR World Congress"),
      venue: { en: "Poster presentation, Kyoto", ja: "ポスター発表（京都）" },
      href: "https://cigr.org/node/720",
    },
  ] as Paper[],
  toolsTitle: { en: "Tools", ja: "使用技術" },
  tools: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "REST APIs",
    "PostgreSQL",
    "Kysely",
    "MongoDB",
    "Redis",
    "Apollo GraphQL",
    "Meteor.js",
    "Cordova",
    "Firebase",
    "Google Cloud",
    "Docker Compose",
    "Coolify",
    "Linux",
    "CI/CD",
    "Git",
  ],
};

export const contact = {
  title: { en: "Contact", ja: "連絡先" },
  availability: {
    en: "Open to engineering roles in Japan and to freelance work.",
    ja: "日本でのエンジニア職、フリーランスのご相談を受け付けています。",
  },
  emailTitle: { en: "Email", ja: "メール" },
  formTitle: { en: "Message", ja: "メッセージ" },
  profiles: { en: "Profiles", ja: "プロフィール" },
  portraitAlt: {
    en: "Zhakhangir Anuarbek standing in front of a large orange torii gate",
    ja: "大きな朱色の鳥居の前に立つジャハンギル・アヌアルベク",
  },
  emailLabel: { en: "Your email", ja: "メールアドレス" },
  emailPlaceholder: both("you@company.com"),
  messageLabel: { en: "Message", ja: "メッセージ" },
  messagePlaceholder: {
    en: "A line about the role or the project",
    ja: "募集職種やプロジェクトについて一言",
  },
  send: { en: "Send message", ja: "送信する" },
  sending: { en: "Sending…", ja: "送信中…" },
  /* A stated window reassures where "soon" only defers the question. */
  sent: {
    title: { en: "Message sent", ja: "送信しました" },
    body: { en: "I'll reply within a few days.", ja: "数日以内に返信します。" },
    again: { en: "Write another message", ja: "もう一通送る" },
  },
  /* Names the failure and both recovery routes. */
  failed: {
    en: "Couldn't send. Try again, or email me directly.",
    ja: "送信できませんでした。再度お試しいただくか、直接メールしてください。",
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
  /* Shown only when the submit never settles: Firestore queues writes offline
     rather than rejecting, so without a timeout the form would hang forever. */
  timedOut: {
    en: "No response. Check your connection, or email me directly.",
    ja: "応答がありません。接続を確認するか、直接メールしてください。",
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
  external: { en: "opens in a new tab", ja: "新しいタブで開きます" },
};

export const footer = {
  legal: both("© 2026 Zhakhangir Anuarbek"),
};
