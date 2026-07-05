import { Lang } from "@/contexts/language-context";

export type Localized = Record<Lang, string>;

export interface MediaItem {
  type: "image" | "video";
  src: string;
  caption?: Localized;
}

export interface Project {
  title: Localized;
  image: string;
  link?: string;
  year: string;
  description: Localized;
  technologies: string[];
  // Longer writeup shown in the detail modal (falls back to `description`).
  details?: Localized;
  // Images/video shown in the detail modal; presence makes a project clickable.
  media?: MediaItem[];
}

export interface ExperienceItem {
  title: Localized;
  subtitle: Localized;
  period: Localized;
  link?: string;
  highlights?: Localized[];
}

export const socials = {
  github: "https://github.com/zhaxal",
  linkedin: "https://www.linkedin.com/in/zhakhangir/",
  instagram: "https://www.instagram.com/zhaxal/",
};

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Golang",
  "Python",
  "Firebase",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Nginx",
];

export interface LanguageItem {
  name: Localized;
  level: Localized;
}

export const languages: LanguageItem[] = [
  {
    name: { en: "Russian", ru: "Русский", ja: "ロシア語" },
    level: { en: "Native", ru: "Родной", ja: "ネイティブ" },
  },
  {
    name: { en: "Kazakh", ru: "Казахский", ja: "カザフ語" },
    level: { en: "Native", ru: "Родной", ja: "ネイティブ" },
  },
  {
    name: { en: "English", ru: "Английский", ja: "英語" },
    level: { en: "Fluent", ru: "Свободно", ja: "流暢" },
  },
  {
    name: { en: "Japanese", ru: "Японский", ja: "日本語" },
    level: { en: "Basic", ru: "Базовый", ja: "基礎" },
  },
];

export const projects: Project[] = [
  {
    title: {
      en: "Tomato-Harvesting Robot — Master's Thesis",
      ru: "Робот для сбора томатов — магистерская диссертация",
      ja: "トマト収穫ロボット — 修士論文",
    },
    image: "/projects/thesis-masters/takagi_farm_experiment(images where taken on the device, it represents bound boxes with spatial data).png",
    year: "2026",
    description: {
      en: "Master's thesis at Niigata University: the visual perception subsystem of a low-cost tomato-harvesting robot. A stereo-vision depth estimator (2.4 cm mean error at harvesting range) and an on-device YOLOv8n ripeness classifier (12–15 FPS, mAP@0.5 = 0.79) run entirely on a ~$410 OAK-D Lite + Raspberry Pi 4 stack — no external AI accelerator. Validated in a live greenhouse trial at Takagi Farm.",
      ru: "Магистерская диссертация в Университете Ниигаты: подсистема визуального восприятия недорогого робота для сбора томатов. Стереозрение для оценки глубины (средняя ошибка 2,4 см на рабочей дистанции) и классификатор зрелости YOLOv8n на устройстве (12–15 FPS, mAP@0.5 = 0,79) работают полностью на связке OAK-D Lite + Raspberry Pi 4 за ~$410 — без внешнего ИИ-ускорителя. Проверено в теплице на ферме Такаги.",
      ja: "新潟大学の修士論文：低コストなトマト収穫ロボットの視覚認識サブシステム。ステレオ視による深度推定（収穫距離で平均誤差2.4cm）と、オンデバイスで動作するYOLOv8n熟度分類器（12〜15FPS、mAP@0.5 = 0.79）を、約$410のOAK-D Lite + Raspberry Pi 4構成のみで実現（外部AIアクセラレータ不要）。高木農園での実地温室試験で検証。",
    },
    technologies: ["Python", "YOLOv8", "OpenCV", "OAK-D Lite"],
    details: {
      en: "Developed the computer-vision subsystem of a low-cost tomato-harvesting robot for small-scale farms. The whole stack runs on ~$410 of hardware — an OAK-D Lite stereo camera, Raspberry Pi 4, battery pack, and touchscreen — with no external AI accelerator. Two core contributions: a stereo-vision depth estimator with 2.4 cm mean error at harvesting range, and a YOLOv8n ripeness classifier running at 12–15 FPS on-device (mAP@0.5 = 0.791). Validated in a live greenhouse trial at Takagi Farm in June 2026.",
      ru: "Разработал подсистему компьютерного зрения недорогого робота для сбора томатов на небольших фермах. Вся система работает на оборудовании за ~$410 — стереокамера OAK-D Lite, Raspberry Pi 4, аккумулятор и сенсорный экран — без внешнего ИИ-ускорителя. Два ключевых результата: оценка глубины по стереозрению со средней ошибкой 2,4 см на рабочей дистанции и классификатор зрелости YOLOv8n со скоростью 12–15 FPS на устройстве (mAP@0.5 = 0,791). Проверено в теплице на ферме Такаги в июне 2026 года.",
      ja: "小規模農家向けの低コストなトマト収穫ロボットのコンピュータビジョンサブシステムを開発。システム全体は約$410のハードウェア（OAK-D Liteステレオカメラ、Raspberry Pi 4、バッテリーパック、タッチスクリーン）だけで動作し、外部AIアクセラレータを必要としません。主な成果は2つ：収穫距離で平均誤差2.4cmのステレオ視深度推定と、オンデバイスで12〜15FPSで動作するYOLOv8n熟度分類器（mAP@0.5 = 0.791）。2026年6月、高木農園での実地温室試験で検証しました。",
    },
    media: [
      {
        type: "video",
        src: "/projects/thesis-masters/demo.mp4",
        caption: {
          en: "The device operating in the greenhouse.",
          ru: "Работа устройства в теплице.",
          ja: "温室内で動作するデバイス。",
        },
      },
      {
        type: "image",
        src: "/projects/thesis-masters/detections.png",
        caption: {
          en: "On-device detections with bounding boxes and spatial (depth) data.",
          ru: "Детекции на устройстве с рамками и пространственными данными (глубиной).",
          ja: "オンデバイスでの検出結果：バウンディングボックスと空間（深度）情報。",
        },
      },
      {
        type: "image",
        src: "/projects/thesis-masters/greenhouse.png",
        caption: {
          en: "The device in operation inside the greenhouse.",
          ru: "Устройство в работе внутри теплицы.",
          ja: "温室内で稼働するデバイス。",
        },
      },
    ],
  },
  {
    title: {
      en: "Fleet Management System — Bachelor's Thesis",
      ru: "Система управления автопарком — дипломная работа",
      ja: "車両管理システム — 学士論文",
    },
    image: "/projects/thesis-bachelor/dashboard-1.png",
    year: "2022",
    description: {
      en: "Bachelor's thesis at Astana IT University: a lightweight fleet management system. A Go UDP server decodes real-time binary telemetry from a Teltonika OBD-II GPS tracker, and a web dashboard shows live location, speed, fuel, and engine data with automatic trip segmentation and route playback on Google Maps.",
      ru: "Дипломная работа в Astana IT University: облегчённая система управления автопарком. UDP-сервер на Go декодирует бинарную телеметрию с GPS-трекера Teltonika (OBD-II) в реальном времени, а веб-панель показывает местоположение, скорость, топливо и параметры двигателя с автоматической сегментацией поездок и воспроизведением маршрутов на Google Maps.",
      ja: "Astana IT University の学士論文：軽量な車両管理システム。Go製のUDPサーバーがTeltonika OBD-II GPSトラッカーのバイナリテレメトリをリアルタイムにデコードし、Webダッシュボードで位置・速度・燃料・エンジン情報を表示。走行の自動区間分けとGoogle Maps上でのルート再生に対応。",
    },
    technologies: ["Golang", "React", "Firebase", "Docker"],
    details: {
      en: "Built a self-contained alternative to feature-heavy fleet platforms (Wialon, Flespi), aimed at small car-sharing services and leasing companies. A Go UDP server receives and decodes binary AVL packets from a Teltonika FMB003 tracker, deduplicates records by timestamp, and stores them in Firestore. A React dashboard renders live positions on Google Maps, device telemetry, historical packets, and trip routes with start/end markers. Real-time responsiveness was tuned via the tracker's event triggers (speed, heading, and distance deltas). Tested end-to-end on a personal vehicle (KIA Soul 2010), with Nginx as a reverse proxy handling concurrent device connections.",
      ru: "Создал автономную альтернативу перегруженным платформам (Wialon, Flespi), ориентированную на небольшие каршеринги и лизинговые компании. UDP-сервер на Go принимает и декодирует бинарные AVL-пакеты от трекера Teltonika FMB003, устраняет дубли по временной метке и сохраняет данные в Firestore. Панель на React показывает позиции в реальном времени на Google Maps, телеметрию устройства, историю пакетов и маршруты поездок с маркерами начала и конца. Отзывчивость настраивалась через триггеры событий трекера (изменения скорости, курса и дистанции). Протестировано на личном автомобиле (KIA Soul 2010), Nginx выступал обратным прокси для одновременных подключений устройств.",
      ja: "高機能で複雑な車両管理プラットフォーム（Wialon、Flespi）に代わる、自己完結型のシステムを構築。小規模カーシェアリングやリース会社を想定しています。Go製のUDPサーバーがTeltonika FMB003トラッカーからのバイナリAVLパケットを受信・デコードし、タイムスタンプで重複を除去してFirestoreに保存。ReactダッシュボードはGoogle Maps上にリアルタイム位置、デバイステレメトリ、過去のパケット、開始・終了マーカー付きの走行ルートを描画します。リアルタイム性はトラッカーのイベントトリガー（速度・方位・距離の変化）で調整。自家用車（KIA Soul 2010）で一連の動作を検証し、Nginxをリバースプロキシとして同時接続を処理しました。",
    },
    media: [
      {
        type: "image",
        src: "/projects/thesis-bachelor/dashboard-1.png",
        caption: {
          en: "Web dashboard: live vehicle position and telemetry on Google Maps.",
          ru: "Веб-панель: позиция автомобиля и телеметрия в реальном времени на Google Maps.",
          ja: "Webダッシュボード：Google Maps上の車両位置とテレメトリをリアルタイム表示。",
        },
      },
      {
        type: "image",
        src: "/projects/thesis-bachelor/dashboard-2.png",
        caption: {
          en: "Trip route rendered as a polyline with start and end markers.",
          ru: "Маршрут поездки в виде ломаной линии с маркерами начала и конца.",
          ja: "開始・終了マーカー付きのポリラインとして描画された走行ルート。",
        },
      },
    ],
  },
  {
    title: {
      en: "Toverlay — overlay program for Podium Esports",
      ru: "Toverlay — оверлей-программа для Podium Esports",
      ja: "Toverlay — Podium Esports 向けオーバーレイプログラム",
    },
    image: "/projects/podium.jpg",
    link: "https://youtu.be/D6BNq7bhOCg",
    year: "2021",
    description: {
      en: "A Go-based local server and OBS browser overlay system with animated HTML/CSS graphics and a control UI for live drifting broadcasts. Used Google Sheets as the live data source and ran ~3-hour live shows with no crashes and ~100 concurrent viewers.",
      ru: "Локальный сервер на Go и система оверлеев для OBS с анимированной HTML/CSS-графикой и панелью управления для прямых трансляций дрифт-соревнований. Google Sheets использовался как источник данных в реальном времени; трансляции шли без сбоев ~3 часа при ~100 зрителях одновременно.",
      ja: "Go製のローカルサーバーとOBS用ブラウザオーバーレイシステム。アニメーションHTML/CSSグラフィックスと操作用UIを備え、ドリフト競技のライブ配信向け。Google Sheetsをリアルタイムのデータソースとして使用し、約100人の同時視聴で約3時間のライブ配信をノークラッシュで実施。",
    },
    technologies: ["Golang"],
  },
  {
    title: {
      en: "GTO Point at VDNH",
      ru: "Точка ГТО на ВДНХ",
      ja: "VDNH の GTO ポイント",
    },
    image: "/projects/gto.jpg",
    link: "https://gtopoint.moscow.sport",
    year: "2021",
    description: {
      en: "A personal dashboard with points tracking, task completion history, a QR-code rewards system, a merchandise catalog, and achievement tracking.",
      ru: "Личный кабинет с накоплением баллов, историей выполненных заданий, системой наград по QR-кодам, каталогом мерча и отслеживанием достижений.",
      ja: "ポイント管理、課題達成履歴、QRコードによる報酬システム、グッズカタログ、実績トラッキングを備えたマイページ。",
    },
    technologies: ["React", "Firebase"],
  },
  // {
  //   title: {
  //     en: "Sports & Fitness at VDNH",
  //     ru: "Физкультура и спорт на ВДНХ",
  //     ja: "VDNH のスポーツ＆フィットネス",
  //   },
  //   image: "/projects/vdnh.jpg",
  //   link: "https://vdnh.zhakhangir.site",
  //   year: "2022–2023",
  //   description: {
  //     en: "Event management platform for sports activities at VDNH: phone-based registration, event schedules, participant management, and an admin panel.",
  //     ru: "Платформа управления спортивными мероприятиями на ВДНХ: регистрация по телефону, расписание событий, управление участниками и админ-панель.",
  //     ja: "VDNH のスポーツ活動向けイベント管理プラットフォーム：電話番号による登録、イベントスケジュール、参加者管理、管理パネル。",
  //   },
  //   technologies: ["Next.js", "MongoDB"],
  // },
  {
    title: {
      en: "Labyrinth Orienteering",
      ru: "Ориентирование в лабиринте",
      ja: "迷路オリエンテーリング",
    },
    image: "/projects/rogaine.png",
    link: "https://rogaine.mosgorsport.ru",
    year: "2022–2025",
    description: {
      en: "Platform for the annual 'Rogaine: Following the Traces of Culture' orienteering event: phone registration, interactive quizzes, telemetry device sync, and an admin panel for individual and family competitions.",
      ru: "Платформа ежегодного ориентирования «Рогейн: по следам культуры»: регистрация по телефону, интерактивные квизы, синхронизация с телеметрией и админ-панель для личных и семейных соревнований.",
      ja: "年次オリエンテーリングイベント「ロゲイン：文化の足跡をたどって」のプラットフォーム。電話番号による登録、インタラクティブなクイズ、テレメトリ機器との同期、個人・家族向け大会用の管理パネルを提供。",
    },
    technologies: ["Next.js", "PostgreSQL"],
  },
  {
    title: {
      en: "Ski Track of Russia Week in Moscow",
      ru: "Неделя Лыжни России в Москве",
      ja: "モスクワ「ロシアのスキートラック」ウィーク",
    },
    image: "/projects/ski.jpg",
    link: "https://ski.sport.mos.ru",
    year: "2022–2026",
    description: {
      en: "Official landing page for Moscow's annual 'Ski Track of Russia' event: event details, registration, schedules, and participant information.",
      ru: "Официальный лендинг ежегодной московской «Лыжни России»: информация о событии, регистрация, расписание и материалы для участников.",
      ja: "モスクワの年次イベント「ロシアのスキートラック」の公式ランディングページ。イベント情報、登録、スケジュール、参加者向け情報を掲載。",
    },
    technologies: ["Next.js", "Firebase"],
  },
  {
    title: {
      en: "'On Your Marks!' Run",
      ru: "Забег «На старт!»",
      ja: "「オン・ユア・マークス！」ラン",
    },
    image: "/projects/zabeg.jpg",
    link: "https://running.mosgorsport.ru",
    year: "2023–2026",
    description: {
      en: "Event website for the annual 'On Your Marks!' running competition in Moscow: event information, registration portal, race schedules, and participant resources.",
      ru: "Сайт ежегодного московского забега «На старт!»: информация о событии, портал регистрации, расписание стартов и материалы для участников.",
      ja: "モスクワの年次ランニング大会「オン・ユア・マークス！」のイベントサイト。イベント情報、登録ポータル、レーススケジュール、参加者向けリソースを提供。",
    },
    technologies: ["Next.js"],
  },
  {
    title: {
      en: "All-Russian Pole Vault Festival",
      ru: "Всероссийский фестиваль прыжков с шестом",
      ja: "全ロシア棒高跳びフェスティバル",
    },
    image: "/projects/pryzki.jpg",
    link: "https://pryzki.sport.mos.ru",
    year: "2023–2025",
    description: {
      en: "Official platform for the All-Russian Pole Vault Festival: event information, athlete registration, and competition schedules.",
      ru: "Официальная платформа Всероссийского фестиваля прыжков с шестом: информация о событии, регистрация атлетов и расписание соревнований.",
      ja: "全ロシア棒高跳びフェスティバルの公式プラットフォーム。イベント情報、選手登録、競技スケジュールを提供。",
    },
    technologies: ["Next.js"],
  },
  {
    title: {
      en: "Ice of Our Hope",
      ru: "Лёд надежды нашей",
      ja: "「我らが希望の氷」",
    },
    image: "/projects/led.png",
    link: "https://led.sport.mos.ru",
    year: "2023–2025",
    description: {
      en: "Event landing page for 'Ice of Our Hope': event details, streamlined registration, schedules, and participant information.",
      ru: "Лендинг события «Лёд надежды нашей»: детали мероприятия, удобная регистрация, расписание и информация для участников.",
      ja: "イベント「我らが希望の氷」のランディングページ。イベント詳細、スムーズな登録、スケジュール、参加者情報を掲載。",
    },
    technologies: ["Next.js"],
  },
  {
    title: {
      en: "Moscow Interesting",
      ru: "Москва Интересная",
      ja: "モスクワ・インタレスティング",
    },
    image: "/projects/interesnaya.png",
    link: "https://interesnaya.sport.mos.ru",
    year: "2025",
    description: {
      en: "Interactive urban orienteering quest with engaging quiz mechanics: video challenges, photo tasks, and GPS check-ins for city exploration.",
      ru: "Интерактивный городской квест-ориентирование с квиз-механиками: видеозадания, фотозадачи и GPS-чекины для исследования города.",
      ja: "魅力的なクイズ要素を備えたインタラクティブな都市オリエンテーリングクエスト。動画チャレンジ、写真課題、GPSチェックインで街を探索。",
    },
    technologies: ["Next.js", "MongoDB"],
  },
  {
    title: {
      en: "Nation's Cross",
      ru: "Кросс Нации",
      ja: "ネイションズ・クロス",
    },
    image: "/projects/cross.jpg",
    link: "https://cross.sport.mos.ru",
    year: "2025",
    description: {
      en: "Official website for the 'Nation's Cross' event: event information, participant registration, race schedules, and essential resources.",
      ru: "Официальный сайт «Кросса Нации»: информация о событии, регистрация участников, расписание забегов и полезные материалы.",
      ja: "イベント「ネイションズ・クロス」の公式サイト。イベント情報、参加者登録、レーススケジュール、必要なリソースを掲載。",
    },
    technologies: ["Next.js"],
  },
  {
    title: {
      en: "Technical Sports Festival",
      ru: "Фестиваль технических видов спорта",
      ja: "テクニカルスポーツフェスティバル",
    },
    image: "/projects/techfest.jpg",
    link: "https://tech-fest.sport.mos.ru",
    year: "2025",
    description: {
      en: "Technical Sports Festival platform: event information, participant registration with an integrated casting system, and administrative tools.",
      ru: "Платформа Фестиваля технических видов спорта: информация о событии, регистрация участников с системой кастинга и инструменты администрирования.",
      ja: "テクニカルスポーツフェスティバルのプラットフォーム。イベント情報、キャスティングシステムを統合した参加者登録、管理ツールを提供。",
    },
    technologies: ["Next.js", "PocketBase"],
  },
];

export const education: ExperienceItem[] = [
  {
    title: {
      en: "Astana IT University",
      ru: "Astana IT University",
      ja: "Astana IT University",
    },
    subtitle: {
      en: "Software Engineering",
      ru: "Программная инженерия",
      ja: "ソフトウェア工学",
    },
    period: { en: "2019–2022", ru: "2019–2022", ja: "2019〜2022年" },
    link: "https://astanait.edu.kz/en/main-page/",
  },
  {
    title: {
      en: "Niigata University",
      ru: "Университет Ниигаты",
      ja: "新潟大学",
    },
    subtitle: {
      en: "Graduate School of Science and Technology",
      ru: "Магистратура школы науки и технологий",
      ja: "自然科学研究科（大学院）",
    },
    period: { en: "2024–2026", ru: "2024–2026", ja: "2024〜2026年" },
    link: "https://www.niigata-u.ac.jp",
  },
];

export const work: ExperienceItem[] = [
  {
    title: {
      en: "D. Serikbayev EKTU · Kazakhstan",
      ru: "ВКТУ им. Д. Серикбаева · Казахстан",
      ja: "D. セリクバエフ東カザフスタン工科大学 · カザフスタン",
    },
    subtitle: {
      en: "R&D Engineer",
      ru: "Инженер-исследователь (R&D)",
      ja: "R&D エンジニア",
    },
    period: { en: "2019–2021", ru: "2019–2021", ja: "2019〜2021年" },
    link: "https://www.ektu.kz",
  },
  {
    title: {
      en: "Moscow Sport · Russia",
      ru: "Москва Спорт · Россия",
      ja: "モスクワ・スポーツ · ロシア",
    },
    subtitle: {
      en: "Freelance Fullstack Engineer",
      ru: "Freelance Fullstack-инженер",
      ja: "フリーランス フルスタックエンジニア",
    },
    period: { en: "2021 — present", ru: "2021 — н. в.", ja: "2021年 — 現在" },
    link: "https://mosgorsport.ru",
    highlights: [
      {
        en: "Built 10+ event web apps from scratch, serving 5,000+ total users; owned backend, frontend, and deployment (Next.js, PostgreSQL/MongoDB, Docker, VPS, Coolify).",
        ru: "Разработал с нуля 10+ веб-приложений для мероприятий, обслуживающих 5000+ пользователей; отвечал за бэкенд, фронтенд и деплой (Next.js, PostgreSQL/MongoDB, Docker, VPS, Coolify).",
        ja: "イベント向けWebアプリを10件以上ゼロから開発し、累計5,000人以上が利用。バックエンド・フロントエンド・デプロイまで担当（Next.js、PostgreSQL/MongoDB、Docker、VPS、Coolify）。",
      },
      {
        en: "Developed registration and admin systems for ~1,000 attendees, enabling rapid on-site verification and sustaining 99.9% uptime during live events.",
        ru: "Создал системы регистрации и администрирования для ~1000 участников, обеспечив быструю верификацию на месте и стабильность 99,9% во время мероприятий.",
        ja: "約1,000人規模の参加者向け登録・管理システムを開発。現地での迅速な本人確認を可能にし、ライブイベント中に99.9%の稼働率を維持。",
      },
      {
        en: "Engineered event modules — QR check-in, SMS, Telegram bot, competition anti-cheat logic, exports — hardened with rate limiting, timezone handling, and role-based access control.",
        ru: "Разработал модули мероприятий — QR-регистрация, SMS, Telegram-бот, античит-логика соревнований, экспорт данных — с ограничением частоты запросов, обработкой часовых поясов и ролевым доступом.",
        ja: "イベント用モジュール（QRチェックイン、SMS、Telegramボット、競技の不正防止ロジック、データエクスポート）を設計し、レート制限・タイムゾーン処理・ロールベースアクセス制御で堅牢化。",
      },
    ],
  },
  {
    title: {
      en: "ApartX · Kazakhstan",
      ru: "ApartX · Казахстан",
      ja: "ApartX · カザフスタン",
    },
    subtitle: {
      en: "Fullstack Engineer",
      ru: "Fullstack-инженер",
      ja: "フルスタックエンジニア",
    },
    period: { en: "2023–2024", ru: "2023–2024", ja: "2023〜2024年" },
    link: "https://apartx.co",
    highlights: [
      {
        en: "Implemented tenant verification across signup/booking/check-in via biometric.vision, eliminating manual document collection and landlord handoffs.",
        ru: "Внедрил верификацию арендаторов на этапах регистрации, бронирования и заезда через biometric.vision, исключив ручной сбор документов и участие арендодателей.",
        ja: "biometric.vision を用いて登録・予約・チェックインの各段階でテナント本人確認を実装し、書類の手動収集や貸主とのやり取りを不要に。",
      },
      {
        en: "Integrated Channex to synchronize Airbnb/Booking.com availability calendars and prevent double bookings.",
        ru: "Интегрировал Channex для синхронизации календарей доступности Airbnb/Booking.com и предотвращения двойных бронирований.",
        ja: "Channex を統合して Airbnb/Booking.com の空室カレンダーを同期し、二重予約を防止。",
      },
      {
        en: "Built and maintained web + mobile functionality (Meteor.js/React/MongoDB; React + Cordova), delivering full-stack changes from UI to backend APIs.",
        ru: "Разрабатывал и поддерживал веб- и мобильный функционал (Meteor.js/React/MongoDB; React + Cordova) — от UI до backend API.",
        ja: "Web・モバイル機能（Meteor.js/React/MongoDB、React + Cordova）を開発・保守し、UIからバックエンドAPIまでフルスタックで対応。",
      },
    ],
  },
  {
    title: {
      en: "Looq · Japan",
      ru: "Looq · Япония",
      ja: "Looq · 日本",
    },
    subtitle: {
      en: "Hardware/Software Engineer",
      ru: "Hardware/Software-инженер",
      ja: "ハードウェア／ソフトウェアエンジニア",
    },
    period: { en: "2026 — present", ru: "2026 — н. в.", ja: "2026年 — 現在" },
    link: "https://looq.jp",
    highlights: [
      {
        en: "Built a portable smart-camera device — Raspberry Pi + Hailo NPU + battery pack — running on-device vision models to measure visitors' dwell time and attention.",
        ru: "Собрал портативное умное камеро-устройство — Raspberry Pi + Hailo NPU + аккумулятор — с моделями компьютерного зрения на устройстве для измерения времени пребывания и внимания посетителей.",
        ja: "Raspberry Pi + Hailo NPU + バッテリーパックによるポータブルなスマートカメラ端末を開発。オンデバイスの視覚モデルで来訪者の滞在時間と注目度を計測。",
      },
      {
        en: "Designed the camera's self-hosted Wi-Fi hotspot and web UI for on-device control and configuration.",
        ru: "Разработал собственную Wi-Fi точку доступа камеры и веб-интерфейс для управления и настройки устройства.",
        ja: "カメラ自身がホストするWi-Fiホットスポットと、端末の操作・設定用Web UIを設計。",
      },
    ],
  },
];

export const ui = {
  nav: {
    projects: { en: "Work", ru: "Работы", ja: "実績" },
    experience: { en: "Experience", ru: "Опыт", ja: "経歴" },
    contact: { en: "Contact", ru: "Контакты", ja: "連絡先" },
  },
  intro: {
    role: {
      en: "Software engineer — Niigata, Japan",
      ru: "Software-инженер — Ниигата, Япония",
      ja: "ソフトウェアエンジニア — 新潟、日本",
    },
    bio: {
      en: "I'm a fullstack engineer from Kazakhstan, currently pursuing a master's degree at Niigata University. Since 2021 I've been building the digital side of Moscow's citywide sports events — registration systems, live quizzes, admin panels, and landing pages for festivals with thousands of participants. Before that I worked on broadcast graphics for esports and R&D projects.",
      ru: "Я fullstack-инженер из Казахстана, сейчас учусь в магистратуре Университета Ниигаты. С 2021 года делаю цифровую часть общегородских спортивных событий Москвы: системы регистрации, живые квизы, админ-панели и лендинги фестивалей с тысячами участников. До этого занимался графикой киберспортивных трансляций и R&D-проектами.",
      ja: "カザフスタン出身のフルスタックエンジニアで、現在は新潟大学の修士課程に在籍しています。2021年からモスクワ市の各種スポーツイベントのデジタル面を担当し、数千人規模のフェスティバル向けに登録システム、ライブクイズ、管理パネル、ランディングページを開発してきました。それ以前はeスポーツ配信のグラフィックスやR&Dプロジェクトに携わっていました。",
    },
    skillsLabel: { en: "Tools", ru: "Инструменты", ja: "ツール" },
    languagesLabel: { en: "Languages", ru: "Языки", ja: "言語" },
  },
  projects: {
    heading: { en: "Selected work", ru: "Избранные работы", ja: "主な実績" },
    viewDetails: { en: "View details", ru: "Подробнее", ja: "詳細を見る" },
    close: { en: "Close", ru: "Закрыть", ja: "閉じる" },
    showAll: { en: "Show all", ru: "Показать все", ja: "すべて表示" },
    showLess: { en: "Show less", ru: "Свернуть", ja: "折りたたむ" },
  },
  experience: {
    heading: { en: "Experience", ru: "Опыт", ja: "経歴" },
    work: { en: "Work", ru: "Работа", ja: "職歴" },
    education: { en: "Education", ru: "Образование", ja: "学歴" },
    present: { en: "present", ru: "н. в.", ja: "現在" },
  },
  contact: {
    heading: { en: "Contact", ru: "Контакты", ja: "連絡先" },
    subheading: {
      en: "Have a project in mind or just want to say hi? Drop me a message.",
      ru: "Есть идея проекта или просто хотите поздороваться? Напишите мне.",
      ja: "プロジェクトのご相談も、ちょっとしたご挨拶も、お気軽にメッセージをどうぞ。",
    },
    email: { en: "Email", ru: "Email", ja: "メール" },
    message: { en: "Message", ru: "Сообщение", ja: "メッセージ" },
    send: { en: "Send message", ru: "Отправить", ja: "送信する" },
    sending: { en: "Sending…", ru: "Отправка…", ja: "送信中…" },
    success: {
      en: "Message sent successfully. Please wait for a reply.",
      ru: "Сообщение отправлено. Ожидайте ответа.",
      ja: "メッセージを送信しました。返信をお待ちください。",
    },
    error: {
      en: "Message failed to send. Please try again later.",
      ru: "Не удалось отправить сообщение. Попробуйте позже.",
      ja: "送信に失敗しました。時間をおいて再度お試しください。",
    },
    emailInvalid: {
      en: "Email must be valid.",
      ru: "Некорректный email.",
      ja: "有効なメールアドレスを入力してください。",
    },
    emailRequired: {
      en: "Email is required.",
      ru: "Укажите email.",
      ja: "メールアドレスを入力してください。",
    },
    messageRequired: {
      en: "Message is required.",
      ru: "Введите сообщение.",
      ja: "メッセージを入力してください。",
    },
  },
  footer: {
    built: {
      en: "Built with Next.js · Deployed on Firebase",
      ru: "Сделано на Next.js · Хостинг Firebase",
      ja: "Next.js で構築 · Firebase でホスティング",
    },
  },
};
