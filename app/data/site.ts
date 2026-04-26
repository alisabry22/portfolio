export const contactInfo = {
  email: "smoothbaron@gmail.com",
  linkedIn:
    "https://www.linkedin.com/services/page/85410733091769a580/",
  whatsappDisplay: "01021142545",
  whatsappHref:
    "https://wa.me/201021142545?text=Hi%20Ali%2C%20I%20want%20to%20talk%20about%20a%20project.",
};

export const leadMetrics = [
  { value: "3+", label: "apps launched" },
  { value: "6+", label: "years shipping" },
  { value: "Egypt + US", label: "markets touched" },
];

export const services = [
  {
    title: "Mobile products that feel polished on day one",
    description:
      "Flutter-first product builds with clean architecture, subscriptions, analytics, notifications, and release-ready store delivery.",
  },
  {
    title: "Web experiences built to convert attention into action",
    description:
      "High-trust landing pages, SaaS frontends, and product marketing surfaces that make an offer clear and move leads toward contact.",
  },
  {
    title: "AI features that strengthen the product instead of distracting from it",
    description:
      "LLM workflows, voice experiences, OCR, and practical automation shaped around real use cases, not demo fluff.",
  },
];

export const deliveryPoints = [
  {
    title: "Product thinking",
    items: [
      "Offer shaping",
      "Feature scoping",
      "UX flow mapping",
      "Launch prioritization",
    ],
  },
  {
    title: "Build execution",
    items: [
      "Flutter and Next.js",
      "Firebase and APIs",
      "Payments and subscriptions",
      "Analytics instrumentation",
    ],
  },
  {
    title: "Launch readiness",
    items: [
      "App Store delivery",
      "Play Store delivery",
      "Landing page polish",
      "Iteration after release",
    ],
  },
  {
    title: "Collaboration style",
    items: [
      "Fast communication",
      "Clear tradeoffs",
      "Senior-level ownership",
      "Founder-friendly pace",
    ],
  },
];

export const contactChannels = [
  {
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    label: "WhatsApp",
    value: contactInfo.whatsappDisplay,
    href: contactInfo.whatsappHref,
  },
  {
    label: "LinkedIn",
    value: "Services page",
    href: contactInfo.linkedIn,
  },
];
