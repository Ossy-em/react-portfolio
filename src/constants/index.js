import { link } from "framer-motion/client";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a passionate frontend developer with a knack for crafting responsive and user-friendly web applications. With years of hands-on experience, I have honed my skills in technologies like React, Firebase, Material-UI, and ApexCharts. My goal is to leverage my expertise to create engaging solutions that enhance user satisfaction and drive business growth.`;

export const ABOUT_TEXT = `
Hey, I’m a frontend developer who enjoys turning ideas into smooth, user-friendly web apps. I’ve worked with various frontend libraries and frameworks to build projects that look great and feel great to use. I got into web dev out of curiosity, and now I’m all about solving real problems with clean design and good code.
When I’m not coding, I’m probably watching Barca's match or gaming.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Frontend Developer (UK, Remote)",
    company: "Axiom Fuse",
    description: ` Work on building frontend applications for clients and internal applications`,
    technologies: [
      "React",
      "Next.js",
      "Angular",
      "Tailwind",
      "AWS",
      "Git",
      "Figma",
      "PostgreSQL",
    ],
  },
  {
    year: "2024 - 2025",
    role: "Frontend Developer (Contract)",
    company: "Nigeria Shippers Council",
    description: `Developed a staff request portal using React.js and Firebase, enabling seamless form submissions, real-time data updates, and efficient request tracking. Designed user-friendly interfaces and integrated authentication and notification systems to enhance user experience.`,
    technologies: ["Javascript", "React.js", "Next.js", "Firebase"],
  },

  {
    year: "January. 2022",
    role: "Frontend Developer",
    company: "Freelancer",
    description: `Developed numerous projects for clients, including landing pages, eCommerce platforms, and dashboards for various brands, delivering customized solutions that met client needs and received positive feedback.`,
    technologies: ["HTML", "CSS", "Javascript", "React"],
  },
  {
    year: "Jan 2022 - July 2022",
    role: "Frontend Engineer (Intern)",
    company: "Hiit ",
    description: `Worked as a frontend developer, gaining hands-on experience with HTML, CSS, JavaScript, and jQuery. Built various web applications, focusing on creating dynamic, responsive, and user-friendly interfaces. Developed foundational skills in web design, layout, and interactivity, setting the stage for future development in modern frontend technologies..`,
    technologies: ["JavaScript", "jQuery", "HTML", "CSS"],
  },
];

export const PROJECTS = [
   {
    title: "Soundemy Landing Page",
    image: project5,
    description:
      "A modern landing page that highlights Soundemy’s features, How it works, and Products in a sleek, responsive layout",
    technologies: ["Next js", "Tailwind"],
    link: "https://soudemy-app.vercel.app/",
  },

   {
    title: "GPT-3 Landing Page",
    image: project3,
    description:
      "A modern landing page that highlights GPT-3’s features, use cases, and clear CTAs in a sleek, responsive layout",
    technologies: [ "Javascript", "Framer Motion", "Tailwind"],
    link: "https://gpt1-ossy.vercel.app/",
  },
  {
    title: "Gericht Fine Dining",
    image: project1,
    description:
      "A modern restaurant website built with React & styled components.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link: "https://my-app-gamma-navy.vercel.app/.com",
  },
 
 
   {
    title: "Staff Request Portal",
    image: project2,
    description:
      "An application for staff to request office items also have an admin approval built in",
    technologies: ["HTML", "CSS", "React", "Firebase", "Tailwind"],
    link: "https://nsc-red.vercel.app/",
  },
  {
    title: "Project-pad (Not completed)",
    image: project4,
    description:
      "A full-stack web application designed to streamline academic and professional research workflows. Users can create project-specific workspaces to organize papers, generate AI-powered summaries, manage citations, and collaborate in real time.",
    technologies: ["Next.js", "React", "Tailwind", "Django", "PostgreSQL", "OpenAI API"],
  },
];

export const CONTACT = {
  address: "Lagos, Nigeria",
  phoneNo: "+234 903 0251 90",
  email: "emosinachi@gmail.com",
};
