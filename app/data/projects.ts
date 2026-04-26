export type Platform = "ios" | "android" | "web";
export type Category = "all" | "mobile" | "web" | "ai" | "saas";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  gradient: string;
  platforms: Platform[];
  categories: Category[];
  tags: string[];
  links: { label: string; url: string; icon: string }[];
  featured?: boolean;
  stats?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: "vocash",
    title: "Vocash",
    subtitle: "AI Budget & Voice Expense Tracker",
    description:
      "Speak an expense and it's logged instantly. AI-powered voice finance app for people who hate manual tracking. Features LLM-driven expense parsing, smart budget categories, and visual analytics.",
    emoji: "💰",
    gradient: "from-violet-600 to-purple-700",
    platforms: ["ios", "android", "web"],
    categories: ["mobile", "ai", "saas"],
    tags: ["Flutter", "AI / LLM", "Voice AI", "Firebase", "RevenueCat"],
    featured: true,
    stats: [
      { label: "Platform", value: "iOS & Android" },
      { label: "Category", value: "FinTech / AI" },
    ],
    links: [
      { label: "Website", url: "https://www.vocash.app", icon: "globe" },
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/vocash-ai-budget-voice-track/id6752502696",
        icon: "apple",
      },
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.voocash.app",
        icon: "play",
      },
    ],
  },
  {
    id: "post4me",
    title: "Post4Me",
    subtitle: "Social Media Scheduler & Auto-Publisher",
    description:
      "Stop juggling 5 apps. Plan, preview, and auto-publish to Instagram, TikTok, X, LinkedIn & Facebook from a single mobile app. Full SaaS with web landing, subscription billing, and multi-platform API integrations.",
    emoji: "📲",
    gradient: "from-pink-500 to-orange-500",
    platforms: ["ios", "android", "web"],
    categories: ["mobile", "saas", "web"],
    tags: ["Flutter", "Next.js", "Social APIs", "Firebase", "SaaS"],
    featured: true,
    stats: [
      { label: "Platforms", value: "5 Social Networks" },
      { label: "Category", value: "SaaS / Productivity" },
    ],
    links: [
      { label: "Website", url: "https://www.post4me.app", icon: "globe" },
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/post4me-social-post-planner/id6740438203",
        icon: "apple",
      },
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.post4me.smooth",
        icon: "play",
      },
    ],
  },
  {
    id: "3lagy-customer",
    title: "3lagy — Patient App",
    subtitle: "On-Demand Medicine Delivery",
    description:
      "Order medicine & cosmetics from licensed online pharmacies in Egypt — fast and reliable. Full e-commerce experience with real-time order tracking, notifications, and maps.",
    emoji: "💊",
    gradient: "from-emerald-500 to-teal-600",
    platforms: ["android"],
    categories: ["mobile"],
    tags: ["Flutter", "E-commerce", "Firebase", "Maps", "Real-time"],
    stats: [
      { label: "Market", value: "Egypt" },
      { label: "Category", value: "HealthTech" },
    ],
    links: [
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.elagy.customer",
        icon: "play",
      },
    ],
  },
  {
    id: "3lagy-pharmacy",
    title: "3lagy — Pharmacy App",
    subtitle: "Vendor Management Platform",
    description:
      "The pharmacy-side companion to 3lagy. Enables pharmacies to manage inventory, receive and fulfill orders, communicate with patients, and track revenue — all from their phone.",
    emoji: "🏥",
    gradient: "from-sky-500 to-blue-600",
    platforms: ["android"],
    categories: ["mobile"],
    tags: ["Flutter", "B2B", "Firebase", "Dashboard", "Analytics"],
    stats: [
      { label: "Market", value: "Egypt" },
      { label: "Category", value: "B2B HealthTech" },
    ],
    links: [
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.elagy.pharmacy",
        icon: "play",
      },
    ],
  },
  {
    id: "baskoota",
    title: "Baskoota",
    subtitle: "Artisan Cookie E-Commerce",
    description:
      "Handcrafted cookies & delightful treats. Full-stack e-commerce web platform for an artisan food brand — product catalog, cart, order management, and a delightful brand experience.",
    emoji: "🍪",
    gradient: "from-amber-500 to-orange-600",
    platforms: ["web"],
    categories: ["web"],
    tags: ["Web Dev", "E-commerce", "CMS", "Branding", "UX"],
    links: [
      { label: "Website", url: "https://www.baskoota.net", icon: "globe" },
    ],
  },
  {
    id: "tutorup",
    title: "TutorUp",
    subtitle: "AI Homework Helper",
    description:
      "Instantly scan handwritten or printed homework questions and get step-by-step AI explanations. Built for students who want to understand — not just copy answers.",
    emoji: "📚",
    gradient: "from-violet-500 to-indigo-600",
    platforms: ["android"],
    categories: ["mobile", "ai"],
    tags: ["Flutter", "AI", "OCR", "Education", "LLM"],
    links: [
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.tutorup.app",
        icon: "play",
      },
    ],
  },
  {
    id: "daily-bible",
    title: "Daily Bible KJV",
    subtitle: "Holy Bible, Verses & Prayer",
    description:
      "A spiritual companion built for daily devotionals. Features KJV offline reading, audio Bible playback, daily push notifications with verses, and a clean, distraction-free interface.",
    emoji: "✝️",
    gradient: "from-amber-700 to-yellow-600",
    platforms: ["android"],
    categories: ["mobile"],
    tags: ["Flutter", "Audio", "Offline", "Push Notifications", "Spiritual"],
    links: [
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.owseni.bible",
        icon: "play",
      },
    ],
  },
  {
    id: "rosie",
    title: "Rosie",
    subtitle: "Period & Cycle Tracker",
    description:
      "Track periods, predict ovulation, and understand fertility windows with a beautiful, data-driven interface. Smart predictions get more accurate with each cycle logged.",
    emoji: "🌸",
    gradient: "from-rose-500 to-pink-600",
    platforms: ["android"],
    categories: ["mobile"],
    tags: ["Flutter", "Health", "Charts", "Analytics", "Predictions"],
    links: [
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.smooth.rosie",
        icon: "play",
      },
    ],
  },
];

export const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "mobile", label: "Mobile" },
  { id: "web", label: "Web" },
  { id: "ai", label: "AI" },
  { id: "saas", label: "SaaS" },
];
