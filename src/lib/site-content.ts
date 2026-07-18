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
  brandMark: "Santam",
  person: {
    name: "Santam Kumai",
    role: "Product & Design Engineer",
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
    badge: "Understanding first, code second",
    title:
      "I design and build web experiences by understanding the goals, context, and people behind them.",
    description:
      "I don't just write code or drop templates. I study how your business operates, how your customers think, and design custom, high-performance web systems tailored to solve actual workflow friction.",
  },
  marketing: {
    momentum: {
      eyebrow: "The standard approach",
      title:
        "Most websites are built as generic showcases, not tools.",
      description:
        "They focus purely on tech stacks and standard grid layouts. But a website is a business tool—it must connect with your visitors, explain your value in seconds, and make them feel understood.",
      bullets: [
        "Tech for tech's sake leaves visitors confused",
        "Generic copy fails to build credibility or trust",
        "Standard templates blend into the online noise",
      ],
    },
    direction: {
      eyebrow: "My Philosophy",
      title: "I build for human outcomes, not just metrics.",
      description:
        "I research your domain, learn your users' language, and design interfaces that guide them naturally. Every animation, layout choice, and word is chosen to serve a purpose.",
      bullets: [
        "Deep alignment on your business targets and model",
        "Clear visual narrative that reads like a structured story",
        "Custom, high-contrast, lightweight web systems",
      ],
    },
  },
  about: {
    title: "Simple interfaces, clear outcomes.",
    description:
      "I work across product strategy, UX structure, and frontend engineering to solve operational pain points. My process stays practical: discover the user friction, design the cleanest path, and build it with performance-first code.",
  },
  contact: {
    title: "Let us build calm, useful products.",
    description:
      "If you need a developer who values understanding, design clarity, and technical details that build user confidence, I would love to talk.",
    ctaLabel: "Start a conversation",
  },
  works: [
    {
      slug: "kalimpong-bungalow",
      title: "Kalimpong Bungalow",
      summary:
        "A cultural bed & breakfast web experience, shaped by understanding the quiet luxury of heritage travel.",
      category: "Hospitality & Heritage",
      problem:
        "The property needed a digital home that communicates its heritage. Standard booking engines felt commercial and failed to convey the property's mountain-heritage character and tranquil atmosphere.",
      approach:
        "Designed a warm, photography-first narrative. Positioned large visual cards for room types, highlighted local mountain guides, and designed direct, low-friction inquiry paths.",
      outcome:
        "A custom website that matches the slow, grounded atmosphere of the actual stay, building immediate trust and driving direct bookings.",
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
        "Curated mountain retreat site, designed to address the visitor's need for instant atmospheric clarity and quick booking.",
      category: "Hospitality & Nature",
      problem:
        "Travelers looking for nature escapes make quick decisions based on imagery and booking ease. The property lacked a structured way to present its forest views and offer direct contact.",
      approach:
        "Prioritized large, warm photography of local woods, and connected them directly to WhatsApp for simple, immediate reservation queries.",
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
      summary:
        "Courier route planning board, built to reduce dispatcher cognitive load under time pressure.",
      category: "Logistics & Operational Tools",
      problem:
        "Dispatch teams manually adjust routes in high-stress, fast-moving shifts, resulting in route errors and late deliveries during peak traffic hours.",
      approach:
        "Replaced complex tables with a visual routing board featuring confidence scores, quick overrides, and city heat layers for faster operational decisions.",
      outcome:
        "Dispatcher decision time decreased and on-time courier performance increased, without adding system complexity.",
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
