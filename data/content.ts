import { Lang } from "@/contexts/language-context";

export type Localized = Record<Lang, string>;

/** Strings that are identical in both locales (proper nouns, tech names). */
const both = (value: string): Localized => ({ en: value, ja: value });

/*
 * Every user-facing string lives here, in both locales. The CV is the source
 * of truth for work history; keep this file in step with it.
 */

export const site = {
  name: { en: "Zhakhangir Anuarbek", ja: "ジャハンギル・アヌアルベク" } as Localized,
  role: { en: "Full-Stack Engineer", ja: "フルスタックエンジニア" } as Localized,
  location: { en: "Japan", ja: "日本在住" } as Localized,
  email: "anuarbek.z.b@gmail.com",
  copyright: "© 2026 Zhakhangir Anuarbek",
};

export const links = [
  { label: "GitHub", href: "https://github.com/zhaxal" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/zhakhangir/" },
];

export const ui = {
  language: { en: "Language", ja: "言語" },
};

export const profile: Localized = {
  en: "Full-stack engineer with 5 years of experience in TypeScript, React/Next.js, Node.js, and PostgreSQL. Built and shipped end-to-end web products, including identity verification and channel-manager integrations for a short-term rental platform, plus 10+ event apps used by over 5,000 participants. Comfortable owning the full delivery cycle, from schema to deploy, including CI/CD and code review.",
  ja: "TypeScript、React／Next.js、Node.js、PostgreSQLで5年の経験を持つフルスタックエンジニアです。短期賃貸プラットフォームの本人確認とチャネルマネージャー連携、5,000人以上が参加した10件以上のイベントアプリなど、Webプロダクトを一貫して開発・リリースしてきました。スキーマ設計からデプロイ、CI/CD、コードレビューまで、開発サイクル全体を担当できます。",
};

export const sections = {
  experience: { en: "Experience", ja: "職歴" },
  projects: { en: "Projects", ja: "プロジェクト" },
  papers: { en: "Papers", ja: "論文・発表" },
  skills: { en: "Skills", ja: "スキル" },
  education: { en: "Education", ja: "学歴" },
  contact: { en: "Contact", ja: "連絡先" },
};

export interface Job {
  id: string;
  company: string;
  href?: string;
  role: Localized;
  location: Localized;
  dates: Localized;
  points: Localized[];
}

const freelance: Localized = {
  en: "Full-Stack Engineer, Freelance",
  ja: "フルスタックエンジニア（フリーランス）",
};

export const experience: Job[] = [
  {
    id: "dauren",
    company: "Dauren Team",
    role: freelance,
    location: {
      en: "Astana, Kazakhstan (remote)",
      ja: "カザフスタン・アスタナ（リモート）",
    },
    dates: { en: "Feb 2026 – Sep 2026", ja: "2026年2月 – 2026年9月" },
    points: [
      {
        en: "Built an internal app for a renovation company with Next.js, React and PostgreSQL. It replaced the Excel and Google Sheets files they used for estimates and payments.",
        ja: "リフォーム会社向けの社内アプリをNext.js、React、PostgreSQLで開発。見積もりと支払いの管理に使われていたExcelとGoogleスプレッドシートを置き換えました。",
      },
      {
        en: "Added AI import with Gemini that reads messy Excel estimates in any layout, so nobody has to type them in again. Prices and amounts are taken straight from the file, so the AI can't change the money.",
        ja: "Geminiを使ったAIインポート機能を追加。レイアウトがばらばらなExcelの見積書を読み取り、手入力をなくしました。単価と金額はファイルから直接取り込むため、AIが金額を変えることはありません。",
      },
      {
        en: "Built it end to end, from the database and logins to client progress links, unpaid work reminders, deployment, and handover to the client.",
        ja: "データベースとログインから、顧客向けの進捗共有リンク、未払い作業のリマインダー、デプロイ、顧客への引き渡しまで一貫して担当。",
      },
    ],
  },
  {
    id: "mossport",
    company: "ANO Mossport",
    role: freelance,
    location: {
      en: "Moscow, Russia (remote)",
      ja: "ロシア・モスクワ（リモート）",
    },
    dates: { en: "Aug 2021 – Jun 2026", ja: "2021年8月 – 2026年6月" },
    points: [
      {
        en: "Built and maintained 10+ event web applications for 5,000+ participants, owning the Next.js and TypeScript front end with HTML and CSS, the Node.js REST APIs, PostgreSQL, and Linux servers.",
        ja: "5,000人以上が参加した10件以上のイベントWebアプリを開発・保守。Next.js、TypeScript、HTML／CSSによるフロントエンド、Node.jsのREST API、PostgreSQL、Linuxサーバーを担当。",
      },
      {
        en: "Designed object-oriented APIs and schemas for registration, point tracking, prize eligibility, and notifications over SMS and Telegram, applying data structures and algorithms to keep results correct for 1,000-attendee events.",
        ja: "参加登録、ポイント集計、賞品の受け取り資格の判定、SMSとTelegramによる通知のためのAPIとスキーマをオブジェクト指向で設計。データ構造とアルゴリズムを活用し、参加者1,000人規模のイベントでも正確な結果を保ちました。",
      },
      {
        en: "Modeled SQL and NoSQL databases, migrating Firebase on Google Cloud to PostgreSQL with Kysely and removing the document model's data inconsistencies.",
        ja: "SQLとNoSQLのデータベースを設計。Google Cloud上のFirebaseからKyselyを用いたPostgreSQLへ移行し、ドキュメントモデルに起因するデータ不整合を解消。",
      },
      {
        en: "Ran every change through Git with code review and automated CI/CD on Coolify and Docker Compose, gating deploys behind linting, type checks, builds, and SQL migrations.",
        ja: "すべての変更をGitでのコードレビューと、CoolifyとDocker Composeによる自動CI/CDに通し、リント、型チェック、ビルド、SQLマイグレーションを通過した場合のみデプロイする仕組みを構築。",
      },
    ],
  },
  {
    id: "apartx",
    company: "ApartX",
    href: "https://apartx.co",
    role: { en: "Full-Stack Engineer", ja: "フルスタックエンジニア" },
    location: { en: "Astana, Kazakhstan", ja: "カザフスタン・アスタナ" },
    dates: { en: "Jun 2023 – Apr 2024", ja: "2023年6月 – 2024年4月" },
    points: [
      {
        en: "Maintained web and mobile features for a rental platform on a shared Meteor.js, React, Apollo GraphQL, MongoDB, Redis, and Cordova codebase, including fixes for unreliable native functionality.",
        ja: "Meteor.js、React、Apollo GraphQL、MongoDB、Redis、Cordovaの共通コードベースで、賃貸プラットフォームのWeb・モバイル機能を保守。不安定だったネイティブ機能の修正も担当。",
      },
      {
        en: "Integrated the biometric.vision API for selfie and government-ID verification, and Channex webhooks as the source of truth for Airbnb and Booking.com availability, ending double bookings.",
        ja: "自撮り写真と公的身分証による本人確認のためにbiometric.vision APIを連携。また、ChannexのWebhookをAirbnb・Booking.comの空室状況の基準として連携し、ダブルブッキングを解消。",
      },
      {
        en: "Built aggregation pipelines for dashboard graphs.",
        ja: "ダッシュボードのグラフ用にアグリゲーションパイプラインを構築。",
      },
    ],
  },
];

export interface EventSite {
  name: Localized;
  years: string;
  href: string;
  /** 320×200 screenshot in public/projects/thumbs/. */
  image: string;
}

export const eventSites = {
  id: "sites",
  title: {
    en: "Event sites for ANO Mossport",
    ja: "ANO Mossport向けイベントサイト",
  },
  meta: both("2021 – 2026"),
  note: {
    en: "Public sites for seven of the event applications.",
    ja: "イベントアプリのうち7件の公開サイトです。",
  },
  items: [
    {
      name: { en: '"On Your Marks!" Run', ja: "「位置について！」ランニング大会" },
      years: "2023–26",
      href: "https://running.mosgorsport.ru",
      image: "/projects/thumbs/zabeg.jpg",
    },
    {
      name: { en: "Ski Track of Russia", ja: "ロシア・スキートラック" },
      years: "2022–26",
      href: "https://ski.sport.mos.ru",
      image: "/projects/thumbs/ski.jpg",
    },
    {
      name: { en: "Labyrinth Orienteering", ja: "ラビリンス・オリエンテーリング" },
      years: "2022–25",
      href: "https://rogaine.mosgorsport.ru",
      image: "/projects/thumbs/rogaine.jpg",
    },
    {
      name: { en: "Nation's Cross", ja: "クロス・ネーション" },
      years: "2025",
      href: "https://cross.sport.mos.ru",
      image: "/projects/thumbs/cross.jpg",
    },
    {
      name: { en: "Moscow Interesting", ja: "「面白いモスクワ」街歩きクエスト" },
      years: "2025",
      href: "https://interesnaya.sport.mos.ru",
      image: "/projects/thumbs/interesnaya.jpg",
    },
    {
      name: { en: "Technical Sports Festival", ja: "テクニカルスポーツ・フェスティバル" },
      years: "2025",
      href: "https://tech-fest.sport.mos.ru",
      image: "/projects/thumbs/techfest.jpg",
    },
    {
      name: { en: "Ice of Our Hope", ja: "「私たちの希望の氷」スケート大会" },
      years: "2023–25",
      href: "https://led.sport.mos.ru",
      image: "/projects/thumbs/led.jpg",
    },
  ] as EventSite[],
};

export const toverlay = {
  id: "toverlay",
  title: {
    en: "Toverlay, broadcast overlays for Podium Esports",
    ja: "Toverlay：Podium Esports向け配信オーバーレイ",
  },
  meta: both("2021"),
  points: [
    {
      en: "Built a local Go server and OBS browser overlays with animated HTML/CSS graphics and a control panel for live drift-competition broadcasts, with Google Sheets as the live data source.",
      ja: "ドリフト競技のライブ配信向けに、Go製のローカルサーバーと、アニメーション付きHTML/CSSグラフィックスと操作パネルを備えたOBS用ブラウザオーバーレイを開発。データソースにはGoogle Sheetsをリアルタイムで使用。",
    },
    {
      en: "Ran live shows of about 3 hours with around 100 concurrent viewers, with no crashes.",
      ja: "約3時間、同時視聴約100人のライブ配信で、一度も停止せずに稼働。",
    },
  ] as Localized[],
  link: {
    href: "https://youtu.be/D6BNq7bhOCg",
    label: { en: "Video on YouTube", ja: "YouTubeの動画" } as Localized,
  },
};

export const thesis = {
  id: "thesis",
  title: {
    en: "Low-Cost Tomato-Harvesting Robot Vision System",
    ja: "低コストなトマト収穫ロボットの視覚システム",
  },
  meta: {
    en: "Master's thesis, Hitachi joint research · 2024 – 2026",
    ja: "修士論文（Hitachiとの共同研究）· 2024 – 2026",
  },
  points: [
    {
      en: "Developed the vision subsystem in Python using OpenCV and YOLO, running on OAK-D Lite and Raspberry Pi 4.",
      ja: "PythonでOpenCVとYOLOを用いた視覚サブシステムを開発。OAK-D LiteとRaspberry Pi 4上で動作。",
    },
    {
      en: "Achieved 3.1 cm mean absolute error in stereo depth estimation and 12–15 FPS detection at mAP@0.5 of 0.791.",
      ja: "ステレオ深度推定で平均絶対誤差3.1 cm、物体検出でmAP@0.5 0.791、12〜15 FPSを達成。",
    },
    {
      en: "Tested the system in a June 2026 greenhouse trial at Takagi Farm.",
      ja: "2026年6月にTakagi Farmの温室で実地試験を実施。",
    },
  ] as Localized[],
  /* A cropped, muted 10-second loop; the link opens the full clip. */
  media: {
    video: "/projects/thesis/demo-thumb.mp4",
    poster: "/projects/thesis/demo-thumb.jpg",
    href: "/projects/thesis/demo.mp4",
    label: {
      en: "Detection demo, 10 s",
      ja: "検出デモ（10秒）",
    } as Localized,
  },
};

export interface Paper {
  title: string;
  venue: Localized;
  year: string;
  href: string;
}

export const papers: Paper[] = [
  {
    title: "Cost-Effectiveness of Remotely Sensed Data in Agriculture",
    venue: both("Chemical Engineering Transactions, vol. 103"),
    year: "2023",
    href: "https://doi.org/10.3303/CET23103008",
  },
  {
    title: "Integrated Monitoring System for Growing Grain Crops",
    venue: both("Chemical Engineering Transactions, vol. 103"),
    year: "2023",
    href: "https://doi.org/10.3303/CET23103009",
  },
  {
    title: "XX CIGR World Congress",
    venue: { en: "Poster presentation, Kyoto", ja: "ポスター発表（京都）" },
    year: "2022",
    href: "https://cigr.org/node/720",
  },
];

export const skills: { label: Localized; items: string }[] = [
  {
    label: { en: "Languages", ja: "言語" },
    items: "TypeScript, JavaScript, Python, SQL, HTML/CSS",
  },
  {
    label: { en: "Frontend", ja: "フロントエンド" },
    items: "React, Next.js, Apollo GraphQL, Cordova",
  },
  {
    label: { en: "Backend", ja: "バックエンド" },
    items: "Node.js, REST APIs, GraphQL (Apollo), Meteor.js, webhooks",
  },
  {
    label: { en: "Data", ja: "データ" },
    items: "PostgreSQL, Kysely, MongoDB, Redis, Firebase/Firestore",
  },
  {
    label: { en: "Infra", ja: "インフラ" },
    items: "Docker, Docker Compose, Coolify, CI/CD, Linux, Git",
  },
];

export interface School {
  name: Localized;
  note?: Localized;
  degree: Localized;
  location: Localized;
  dates: Localized;
}

export const education: School[] = [
  {
    name: { en: "Niigata University", ja: "新潟大学" },
    note: {
      en: "Japanese Government (MEXT) Scholarship",
      ja: "文部科学省国費外国人留学生",
    },
    degree: {
      en: "Master's degree, Graduate School of Science and Technology",
      ja: "大学院自然科学研究科 修士課程",
    },
    location: { en: "Niigata, Japan", ja: "新潟" },
    dates: { en: "Sep 2024 – Sep 2026", ja: "2024年9月 – 2026年9月" },
  },
  {
    name: { en: "Astana IT University", ja: "アスタナIT大学" },
    degree: {
      en: "Bachelor's degree in Software Engineering",
      ja: "ソフトウェア工学 学士",
    },
    location: { en: "Astana, Kazakhstan", ja: "カザフスタン・アスタナ" },
    dates: { en: "Sep 2019 – Jun 2022", ja: "2019年9月 – 2022年6月" },
  },
];

export const contact = {
  availability: {
    en: "Open to engineering roles in Japan and to freelance work.",
    ja: "日本でのエンジニア職、フリーランスのご相談を受け付けています。",
  },
  emailLead: { en: "Email:", ja: "メール：" },
  formLead: {
    en: "Or leave a message here:",
    ja: "または、こちらからメッセージを送れます：",
  },
  emailLabel: { en: "Your email", ja: "メールアドレス" },
  messageLabel: { en: "Message", ja: "メッセージ" },
  send: { en: "Send", ja: "送信" },
  sending: { en: "Sending…", ja: "送信中…" },
  sent: {
    en: "Message sent. I'll reply within a few days.",
    ja: "送信しました。数日以内に返信します。",
  },
  again: { en: "Send another message", ja: "もう一通送る" },
  failed: {
    en: "Couldn't send. Try again, or email me directly.",
    ja: "送信できませんでした。再度お試しいただくか、直接メールしてください。",
  },
  timedOut: {
    en: "No response. Check your connection, or email me directly.",
    ja: "応答がありません。接続を確認するか、直接メールしてください。",
  },
  emailRequired: {
    en: "Email is required.",
    ja: "メールアドレスを入力してください。",
  },
  emailInvalid: {
    en: "Enter a valid email address.",
    ja: "有効なメールアドレスを入力してください。",
  },
  messageRequired: {
    en: "Message is required.",
    ja: "メッセージを入力してください。",
  },
  noScript: {
    en: "The form needs JavaScript. Email me instead.",
    ja: "フォームの送信にはJavaScriptが必要です。メールでご連絡ください。",
  },
};
