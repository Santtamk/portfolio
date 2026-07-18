export type WorkItem = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  problem: string;
  approach: string;
  outcome: string;
  tech: string[];
  accent: string;
  featuredImage?: string;
  featuredTheme?: "light" | "dark";
  siteUrl?: string;
};

export const siteContent = {
  brandMark: "<SK/>",
  person: {
    name: "Santam Kumai",
    role: "Product Problem Solver",
    location: "Kalimpong, India",
    email: "hello@santamkumai.com",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/#work" },
    { label: "Stack", href: "/#stack" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/#contact" },
  ],
  hero: {
    badge: "Open to product roles",
    title:
      "I design clear digital experiences that remove friction from everyday workflows.",
    description:
      "I focus on simple systems, measurable improvements, and thoughtful details that help people complete tasks faster with less stress.",
  },
  marketing: {
    momentum: {
      eyebrow: "The gap",
      title:
        "Your business is moving forward, but your website has not kept up.",
      description:
        "Your offer is stronger than ever, but your current site may still look old, feel slow, or fail to explain your value clearly. That mismatch can quietly cost trust, leads, and growth.",
      bullets: [
        "Visitors leave before they understand what you do",
        "Your messaging feels unclear or outdated",
        "The site does not support your next stage of growth",
      ],
    },
    direction: {
      eyebrow: "What I bring",
      title: "I know exactly what your site needs to do.",
      description:
        "It should build trust fast, explain your value simply, and guide the right people to take action without confusion.",
      bullets: [
        "Clear story and positioning from the first screen",
        "Focused pages built around business goals",
        "Smooth experience across mobile and desktop",
      ],
    },
  },
  about: {
    title: "Simple products, clear outcomes.",
    description:
      "I work across product strategy, UX structure, and delivery quality to solve operational pain points. My process stays practical: discover the friction, prototype the cleanest path, and measure what changes.",
  },
  contact: {
    title: "Let us build calm, useful products.",
    description:
      "If your team needs someone focused on solving workflow problems and improving user confidence, I would love to talk.",
    ctaLabel: "Start a conversation",
  },
  works: [
    {
      slug: "kalimpong-bungalow",
      title: "Kalimpong Bungalow",
      summary:
        "A cultural bed & breakfast in the hills of Kalimpong, shaped around heritage, quiet comfort, and direct booking clarity.",
      category: "Hospitality Web Experience",
      problem:
        "The homepage needed to communicate the stay experience quickly: heritage atmosphere, mountain views, room variety, and practical details like parking, pets, and booking access.",
      approach:
        "Structured the homepage around a calm hero, a heritage-led story, clear room and gallery entry points, highlighted amenities, and a booking-focused call to action.",
      outcome:
        "The final presentation mirrors the property: warm, grounded, and easy to scan, with trust-building details that support direct enquiries and bookings.",
      tech: [
        "Private parking",
        "Nature & garden",
        "Pet friendly",
        "Balcony view",
      ],
      accent: "from-[#5f564d] to-[#2f2a25]",
      featuredImage:
        "https://www.kalimpongbungalow.com/_next/image?url=%2Fimg%2Fslides%2Fslide_1.jpg&w=1080&q=75",
      featuredTheme: "dark",
      siteUrl: "https://kalimpongbungalow.com",
    },
    {
      slug: "satori-stay",
      title: "Satori Stay",
      summary:
        "A calm, hospitality-forward site showcasing curated stays with warm wood textures and panoramic hill views.",
      category: "Hospitality Web Experience",
      problem:
        "The property needed a visual presentation that immediately communicates atmosphere, room types, and easy booking/contact options.",
      approach:
        "Prioritized large hero imagery, intimate portfolio sections, clear reservation call-to-actions, and trust-building guest reviews.",
      outcome:
        "Visitors get a clear sense of the stay experience and can reserve quickly via WhatsApp — improving direct enquiries.",
      tech: ["Photography-led design", "Responsive layout", "Clear CTAs"],
      accent: "from-[#8a857d] to-[#5a5751]",
      featuredImage: "https://avinaybnb.vercel.app/hero&room.jpeg",
      featuredTheme: "dark",
      siteUrl: "https://avinaybnb.vercel.app",
    },
    {
      slug: "route-kind",
      title: "RouteKind",
      summary: "Improved courier route planning for same-day urban delivery.",
      category: "Logistics",
      problem:
        "Dispatch teams manually adjusted routes every hour and missed delivery windows during peak traffic.",
      approach:
        "Designed a route board with confidence scoring, quick overrides, and city heat layers for faster operational decisions.",
      outcome:
        "On-time delivery improved while manual route changes per shift decreased significantly.",
      tech: ["Next.js", "Node", "GSAP", "PostgreSQL"],
      accent: "from-[#6b6a66] to-[#3f3e3a]",
    },
  ] satisfies WorkItem[],
  tickerRows: [
    ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Lenis", "React 19"],
    [
      "Design Systems",
      "Accessibility",
      "Responsive UI",
      "Performance",
      "User Flows",
      "Product Thinking",
    ],
  ],
};

export const getWorkBySlug = (slug: string) =>
  siteContent.works.find((work) => work.slug === slug);
