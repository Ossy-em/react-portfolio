import { link } from "framer-motion/client";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/nft.png";
import project7 from "../assets/projects/project-7.png";
import project8 from "../assets/projects/project-8.png";
import project9 from "../assets/projects/project-9.png";

export const HERO_CONTENT = `I'm Ossy, a frontend developer exploring the future of blockchain and stocks — creating web apps that bridge innovation and real-world impact.`;

export const ABOUT_TEXT = `
I’m a frontend developer, and deep-tech fan on a mission to build things that actually matter. Lately, I’ve been really into blockchain and finance, finding ways to make complex systems feel simple and useful.`;

export const EXPERIENCES = [
  {
    title: "Frontend Developer",
    company: "Axiom Fuse",
    type: "Remote, UK",
    year: "2025 – Present",
    description: [
      "Developing frontend applications using Next.js, TypeScript, Tailwind, Framer Motion, Django, and Python for clients and internal projects.",
      "Built a Python bot to monitor economic calendars and deliver high-impact alerts to Telegram, ensuring timely market insights.",
      "Integrated Web3 features like swap, send, and ETH connect components, contributing to an AI-driven system that transforms project scoping into actionable development blueprints."
    ],
    technologies: [
      "React", "Next.js", "Angular", "Tailwind", "OpenseaAI", "Wagmi", 
      "Web3Modal", "AWS", "Git", "Figma", "PostgreSQL"
    ],
  },
  {
    title: "Frontend Developer",
    company: "Serendipity AI",
    type: "Contract",
    year: "2025 – Present",
    description: [
      "Collaborated with a senior developer to build Flutter screens and reusable components for a mobile app connecting users based on intent and context.",
      "Gained experience in mobile UI optimization, component design, and team-based workflows."
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Git", "Figma"],
  },
  {
    title: "Frontend Developer",
    company: "NSC",
    type: "Contract",
    year: "2024 – 2025",
    description: [
      "Developed a staff request portal for 200+ employees, streamlining internal workflows and enabling real-time request tracking.",
      "Built responsive, user-friendly interfaces with reusable components and integrated authentication and notifications.",
      "Managed the full deployment lifecycle, ensuring maintainability and scalability."
    ],
    technologies: ["JavaScript", "React.js", "Next.js", "Tailwind", "Firebase"],
  },
  {
    title: "Frontend Developer",
    company: "Freelancer",
    type: "Remote",
    year: "Jan 2022 – Present",
    description: [
      "Built Stock AI, a platform consolidating market insights, stock comparisons, and AI-driven analytics to help users make informed decisions.",
      "Developed a dApp frontend interacting with my smart contract on the Holesky testnet, enabling ETH transactions and live on-chain updates.",
      "Delivered client projects including eCommerce sites, dashboards, and portfolios, ensuring responsive and maintainable interfaces."
    ],
    technologies: [
      "React", "Next.js", "Tailwind", "OpenseaAI", "Wagmi", "Web3Modal", 
      "Material UI", "AWS", "Git", "Figma", "PostgreSQL", "Vercel", "Supabase", "Firebase"
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Hiit Plc",
    type: "Internship",
    year: "Jan 2022 – Jul 2022",
    description: [
      "Built and tested web interfaces using HTML, CSS, JavaScript, and jQuery.",
      "Focused on dynamic, responsive, and user-friendly interfaces, gaining foundational frontend development skills.",
      "Supported senior developers with debugging, testing, and small-scale project delivery."
    ],
    technologies: ["JavaScript", "jQuery", "HTML", "CSS"],
  },
];



export const PROJECTS = [
  {
    title:
      "SwiftChain: Simplifying Smart Contract Interaction Through Intuitive Design",
    image: project2,
    description:
      "Developed a decentralized application (dApp) frontend that connects to a smart contract deployed on the Holesky testnet. Designed and implemented features that allow users to send transactions and view on-chain activity in real time. Focused on delivering a clean, intuitive interface that simplifies blockchain interactions for end users.",
    technologies: [
      "Vite",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Ethers.js",
      "Wagmi",
      "Web3Modal",
      "Holesky Testnet (Ethereum)",
    ],

    link: "https://swiftchain-six.vercel.app/",
  },
  {
    title:
      "Building NFT Vault: Exploring Blockchain Integration and Digital Ownership",
    image: project6,
    description:
      "An NFT platform concept where users can browse and manage digital collectibles. Worked on the frontend experience and learned how NFTs connect to blockchain data, wallets, and metadata. Focusing on how to make that tech feel simple for everyday users.",
    technologies: [
      "Next js",
      "Tailwind",
      "React Query",
      "Opensea API",
      "Wagmi",
      "Web3Modal",
      "Dev.to API",
    ],
    link: "https://nft-lac-ten.vercel.app/",
  },

  {
    title: "Designed Soundemy: A Fintech Experience Around Money Management",
    image: project5,
    description:
      "A responsive landing page for a fintech app that helps users manage and track their funds. I focused on clean design, clear feature storytelling, and smooth frontend implementation to give the product a modern, trustworthy feel.",
    technologies: ["Next js", "Tailwind"],
    link: "https://soudemy-app.vercel.app/",
  },

  {
    title: "GadgetHub: A Full-Stack MERN Product Management System",
    image: project9,
    description:
      "Built a complete MERN stack application for managing product inventory with full CRUD operations. Developed RESTful API endpoints using Next.js serverless functions, connected to MongoDB for data persistence, and created a modern, responsive UI with real-time updates. ",
    technologies: [
      "MongoDB",
      "Mongoose",
      "Next.js",
      "Typescript",

      "Tailwind CSS",
    ],

    link: "https://storehub-ten.vercel.app/",
  },

  {
    title: "Telegram Event Bot: Real-time High Impact News Alert",
    image: project7,
    description:
      "Built a Python bot that monitors verified economic calendars and forwards only high-impact events (NFP, CPI, FOMC, interest-rate decisions) as formatted alerts to Telegram. Focused on reliable fetching, duplicate suppression, and lightweight deployment.",
    technologies: ["Python3", "Telegram Bot"],
    link: "https://github.com/Ossy-em/mt-news-forwarder",
  },

  {
    title:
      "Designed GPT-3: Showcasing AI Through a Modern, Minimal Landing Page",
    image: project3,
    description:
      "A sleek and responsive landing page highlighting GPT-3’s core features, real-world use cases, and clear CTAs. The goal was to create a design that feels intelligent and futuristic while keeping the layout simple and easy to navigate.",
    technologies: ["Javascript", "Framer Motion", "Tailwind"],
    link: "https://gpt1-ossy.vercel.app/",
  },
  {
    title: "Building Stock AI: A Smarter Way to Track the Markets",
    image: project8,
    description:
      "Stock AI is an all-in-one platform for global market insights. It brings together live stock data, market indexes, news updates, and smart comparisons — all in one smooth, data-driven interface. The goal is to make market intelligence clearer, faster, and more accessible for everyone.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind",
      "Chart.js",
      "OpenAI",
      "Supabase",
    ],
  },
  {
    title:
      "Designed Gericht Fine Dining: A Modern Restaurant Website Experience",
    image: project1,
    description:
      "A stylish and responsive restaurant website built with React and Styled Components. It focuses on smooth navigation, elegant UI, and a clean layout that brings the restaurant’s brand and menu to life",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link: "https://my-app-gamma-navy.vercel.app/.com",
  },
];

export const CONTACT = {
  address: "Lagos, Nigeria",
  email: "emosinachi@gmail.com",
};
