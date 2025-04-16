export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  privateRepo?: boolean;
  liveUrl?: string;
  image?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'other' | 'language' | 'soft';
}

export interface Language {
  name: string;
  level: number; // 1-5
  flag?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export const personalInfo = {
  name: "REDWANE AIT OUKAZZAMANE",
  title: "FULLSTACK ENGINEER",
  bio: "Creative Developer with 4 years of experience crafting sleek, scalable digital solutions. I blend code and creativity to build user-centric apps, from elegant UIs to robust backends. Known for delivering complex, enterprise-level projects with precision and flair across diverse industries.",
  location: "Mers sultan, Casablanca, Morocco",
  email: "redwane.aitoukazzamane@gmail.com",
  phone: "+212-638106555",
  // website: "www.Oukazzamane.com",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/REDWANE-AIT-OUKAZZAMANE"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/redwane-ait-oukazzamane-b293a526a/"
    }
  ] as SocialLink[]
};

export const education: Education[] = [
  {
    degree: "Master of Science in Software Engineering",
    institution: "National Schools of Applied Sciences",
    location: "Tétouan",
    period: "2021 - 2023",
    gpa: "3.8 / 4.0"
  },
  {
    degree: "Bachelor's degree in computer science",
    institution: "Abdelmalek Essaâdi University",
    location: "Tétouan",
    period: "2018 - 2020",
    gpa: "3.7 / 4.0"
  }
];

export const experiences: Experience[] = [
  {
    title: "Full stack Engineer | Cybersecurity Specialist",
    company: "Squarefeet",
    location: "Morocco",
    startDate: "2025",
    endDate: "PRESENT",
    description: [
      "Automated marketing materials, leasing documents, and floor plans in one CRM.",
      "Ensured system scalability to handle multiple clients.",
      "Optimized performance and consistency across devices."
    ]
  },
  {
    title: "Full stack Developer",
    company: "Hahn Software SARL",
    location: "Morocco",
    startDate: "2023",
    endDate: "2024",
    description: [
      "Built a complete IT support system from scratch, improving internal ticket handling.",
      "Implemented CI/CD pipelines using Jenkins and Docker for efficient deployment."
    ]
  },
  {
    title: "Software Engineer",
    company: "Soclicagency",
    location: "Morocco",
    startDate: "2022",
    endDate: "2023",
    description: [
      "Designed and developed tailor-made web solutions for multiple B2B clients.",
      "Integrated REST APIs and third-party services to extend platform functionality."
    ]
  }
];

export const skills: Skill[] = [
  // Programming Languages - Backend
  { name: "Java", level: 5, category: "backend" },
  { name: "Spring Boot", level: 5, category: "backend" },
  { name: "Node.js", level: 4, category: "backend" },
  { name: "NestJS", level: 4, category: "backend" },
  { name: "Python", level: 3, category: "backend" },
  { name: "PHP", level: 3, category: "backend" },
  
  // Databases
  { name: "MongoDB", level: 4, category: "backend" },
  { name: "MySQL", level: 4, category: "backend" },
  
  // Frontend Technologies
  { name: "React", level: 5, category: "frontend" },
  { name: "Angular", level: 4, category: "frontend" },
  { name: "Vue.js", level: 4, category: "frontend" },
  { name: "Next.js", level: 4, category: "frontend" },
  { name: "Flutter", level: 3, category: "frontend" },
  { name: "HTML/CSS", level: 5, category: "frontend" },
  { name: "Tailwind CSS", level: 4, category: "frontend" },
  
  // Soft Skills
  { name: "Project Management", level: 4, category: "soft" },
  { name: "Effective Communication", level: 4, category: "soft" },
  { name: "Critical Thinking", level: 4, category: "soft" },
  { name: "Problem Solving", level: 5, category: "soft" },
  { name: "Teamwork", level: 4, category: "soft" },
  
  // Tools & Software
  { name: "Git", level: 4, category: "other" },
  { name: "Docker", level: 3, category: "other" },
  { name: "Jenkins", level: 3, category: "other" },
  { name: "CI/CD", level: 3, category: "other" },
  { name: "Cybersecurity", level: 4, category: "other" }
];

export const languages: Language[] = [
  { name: "English", level: 4, flag: "🇬🇧" },
  { name: "French", level: 3, flag: "🇫🇷" },
  { name: "German", level: 2, flag: "🇩🇪" },
  { name: "Arabic", level: 5, flag: "🇲🇦" }
];

export const certificates: Certificate[] = [
  {
    name: "Google Cybersecurity Professional",
    issuer: "Google",
    date: "2023",
    url: "https://www.coursera.org/account/accomplishments/specialization/69V89M5GR5FY"
  },
  {
    name: "IBM Machine Learning with Python",
    issuer: "IBM",
    date: "2023",
    url: "https://www.coursera.org/account/accomplishments/verify/269UMQVWY9WE"
  },
  {
    name: "EF SET Certificate",
    issuer: "EF Education First",
    date: "2022",
    url: "https://cert.efset.org/YyF1Mx"
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Squarefeet CRM",
    description: "A comprehensive CRM solution for real estate management, featuring lead optimization, asset management, and transaction tracking. The platform unifies all types of leasing (Standard, Specialty, and Media) into a single integrated solution, enabling unmatched commercial efficiency.",
    technologies: ["Vue.js", "React", "NestJS", "GraphQL", "Prisma", "CRM", "GitLab", "Nginx"],
    privateRepo: true,
    liveUrl: "https://www.squarefeet.cloud/fr/accueil/",
    image: "/images/projects/squarefeet.png"
  },
  {
    id: 2,
    title: "Authentikeys E-commerce",
    description: "A modern e-commerce platform for tech products featuring product categories, brand showcases, and a blog section. Includes user authentication, shopping cart, and payment integration.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    privateRepo: true,
    liveUrl: "https://www.authentikeys.com",
    image: "/images/projects/authentikeys.png"
  },
  {
    id: 3,
    title: "KIIIBS - Mechanical Keyboard Store",
    description: "A fully-fledged e-commerce web store for mechanical keyboards with responsive design, shopping cart functionality, and optimized user experience. Features include persistent shopping cart, dynamic product pages, and comprehensive testing.",
    technologies: ["Vue.js", "TypeScript", "Tailwind CSS", "Pinia", "Cypress", "Vite"],
    githubUrl: "https://github.com/REDWANE-AIT-OUKAZZAMANE/Ecomy",
    liveUrl: "https://ecomy-alpha.vercel.app",
    image: "/images/projects/Keyboard-ecom.png"
  },
  {
    id: 4,
    title: "SWAG - 3D Racing Game",
    description: "A fast-paced 3D racing game where players dodge obstacles, push their car to top speed, and cover massive distances. Features include obstacle avoidance mechanics, damage system, speedometer, tachometer, rearview mirror, and beautiful 3D graphics.",
    technologies: ["Three.js", "Cannon.js", "JavaScript", "HTML/CSS"],
    githubUrl: "https://github.com/REDWANE-AIT-OUKAZZAMANE/swag",
    liveUrl: "https://swag-hazel.vercel.app",
    image: "/images/projects/game.png"
  },
  {
    id: 5,
    title: "3D House Visualization",
    description: "An interactive 3D house visualization project with realistic textures, lighting, and animations. Features include a dynamic day/night cycle, interactive camera controls, and responsive design.",
    technologies: ["Three.js", "JavaScript", "Vite", "GSAP", "dat.GUI"],
    githubUrl: "https://github.com/REDWANE-AIT-OUKAZZAMANE/3d-house",
    liveUrl: "https://vercel.com/redwane-ait-oukazzamanes-projects/3d-house",
    image: "/images/projects/house.png"
  },
  {
    id: 6,
    title: "IT Support System",
    description: "A comprehensive IT support ticket management system with user authentication, ticket creation and management, real-time status updates, priority-based handling, and a threaded comments system.",
    technologies: ["Java", "Spring Boot", "Oracle Database", "Java Swing", "Docker"],
    githubUrl: "https://github.com/REDWANE-AIT-OUKAZZAMANE/it-support-system",
    liveUrl: "",
    image: "/images/projects/itSupport.png"
  },
  {
    id: 7,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current weather conditions and forecasts for multiple locations.",
    technologies: ["JavaScript", "HTML/CSS", "OpenWeather API"],
    githubUrl: "https://github.com/REDWANE-AIT-OUKAZZAMANE/weather-app",
    liveUrl: "https://weather-app-phi-nine-54.vercel.app/",
    image: "/images/projects/weather.png"
  }
]; 