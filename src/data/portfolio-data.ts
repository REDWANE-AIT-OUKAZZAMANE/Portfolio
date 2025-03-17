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
  category: 'frontend' | 'backend' | 'other';
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

export const personalInfo = {
  name: "REDWANE AIT OUKAZZAMANE",
  title: "Full Stack Developer",
  bio: "Passionate full stack developer with experience in building modern web applications. I enjoy solving complex problems and creating intuitive user experiences.",
  location: "Morocco",
  email: "redwaneaitoukazzamane@gmail.com",
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

export const skills: Skill[] = [
  // Programming Languages
  { name: "JavaScript", level: 5, category: "backend" },
  { name: "TypeScript", level: 4, category: "backend" },
  { name: "Java", level: 4, category: "backend" },
  { name: "Python", level: 3, category: "backend" },
  { name: "C", level: 3, category: "backend" },
  { name: "PHP", level: 3, category: "backend" },
  
  // Frontend Technologies
  { name: "React", level: 5, category: "frontend" },
  { name: "Vue.js", level: 4, category: "frontend" },
  { name: "Angular", level: 3, category: "frontend" },
  { name: "Next.js", level: 4, category: "frontend" },
  { name: "HTML/CSS", level: 5, category: "frontend" },
  { name: "Tailwind CSS", level: 4, category: "frontend" },
  { name: "Bootstrap", level: 4, category: "frontend" },
  { name: "jQuery", level: 4, category: "frontend" },
  { name: "Three.js", level: 4, category: "frontend" },
  { name: "Vite", level: 4, category: "frontend" },
  { name: "Sweetalert2", level: 3, category: "frontend" },
  { name: "Pinia", level: 3, category: "frontend" },
  { name: "Cannon.js", level: 3, category: "frontend" },
  { name: "Cypress", level: 3, category: "frontend" },
  
  // Backend Technologies
  { name: "Node.js", level: 4, category: "backend" },
  { name: "Express", level: 4, category: "backend" },
  { name: "NestJS", level: 3, category: "backend" },
  { name: "Spring Boot", level: 4, category: "backend" },
  { name: "Spring", level: 4, category: "backend" },
  { name: "GraphQL", level: 3, category: "backend" },
  { name: "Prisma", level: 3, category: "backend" },
  
  // Databases
  { name: "MongoDB", level: 4, category: "backend" },
  { name: "MySQL", level: 4, category: "backend" },
  { name: "Oracle Database", level: 3, category: "backend" },
  { name: "Apache", level: 3, category: "backend" },
  
  // Tools & Software
  { name: "Git", level: 4, category: "other" },
  { name: "Docker", level: 3, category: "other" },
  { name: "Postman", level: 4, category: "other" },
  { name: "VS Code", level: 5, category: "other" },
  { name: "IntelliJ IDEA", level: 4, category: "other" },
  { name: "Eclipse", level: 3, category: "other" },
  { name: "Android Studio", level: 3, category: "other" },
  { name: "Maven", level: 3, category: "other" },
  { name: "Xampp", level: 3, category: "other" },
  { name: "WampServer", level: 3, category: "other" },
  { name: "Photoshop", level: 3, category: "other" },
  { name: "Illustrator", level: 3, category: "other" },
  { name: "Adobe Premiere Pro", level: 3, category: "other" }
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
    title: "Authentikeys E-commerce",
    description: "A modern e-commerce platform for tech products featuring product categories, brand showcases, and a blog section. Includes user authentication, shopping cart, and payment integration.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    privateRepo: true,
    liveUrl: "https://www.authentikeys.com"
  },
  {
    id: 2,
    title: "Ecomy - Mechanical Keyboard Store",
    description: "A fully-fledged e-commerce web store for mechanical keyboards with responsive design, shopping cart functionality, and optimized user experience. Features include persistent shopping cart, dynamic product pages, and comprehensive testing.",
    technologies: ["Vue.js", "TypeScript", "Tailwind CSS", "Pinia", "Cypress", "Vite"],
    githubUrl: "https://github.com/REDWANE-AIT-OUKAZZAMANE/Ecomy",
    liveUrl: "https://ecomy-alpha.vercel.app"
  },
  {
    id: 3,
    title: "SWAG - 3D Racing Game",
    description: "A fast-paced 3D racing game where players dodge obstacles, push their car to top speed, and cover massive distances. Features include obstacle avoidance mechanics, damage system, speedometer, tachometer, rearview mirror, and beautiful 3D graphics.",
    technologies: ["Three.js", "Cannon.js", "JavaScript", "HTML/CSS"],
    githubUrl: "https://github.com/REDWANE-AIT-OUKAZZAMANE/swag",
    liveUrl: "https://swag-hazel.vercel.app"
  },
  {
    id: 4,
    title: "3D House Visualization",
    description: "An interactive 3D house visualization project with realistic textures, lighting, and animations. Features include a dynamic day/night cycle, interactive camera controls, and responsive design.",
    technologies: ["Three.js", "JavaScript", "Vite", "GSAP", "dat.GUI"],
    githubUrl: "https://github.com/REDWANE-AIT-OUKAZZAMANE/3d-house",
    liveUrl: "https://vercel.com/redwane-ait-oukazzamanes-projects/3d-house"
  },
  {
    id: 6,
    title: "IT Support System",
    description: "A comprehensive IT support ticket management system with user authentication, ticket creation and management, real-time status updates, priority-based handling, and a threaded comments system.",
    technologies: ["Java", "Spring Boot", "Oracle Database", "Java Swing", "Docker"],
    githubUrl: "https://github.com/REDWANE-AIT-OUKAZZAMANE/it-support-system",
    liveUrl: ""
  },
  {
    id: 7,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current weather conditions and forecasts for multiple locations.",
    technologies: ["JavaScript", "HTML/CSS", "OpenWeather API"],
    githubUrl: "https://github.com/REDWANE-AIT-OUKAZZAMANE/weather-app",
    liveUrl: "https://weather-app-phi-nine-54.vercel.app/"
  }
];

export const experiences = [
  {
    title: "Full Stack Developer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    startDate: "Jan 2023",
    endDate: "Present",
    description: "Developing and maintaining web applications using React, Node.js, and MongoDB. Implementing new features and optimizing existing code."
  },
  {
    title: "Frontend Developer",
    company: "Web Innovations",
    location: "Casablanca, Morocco",
    startDate: "Jun 2021",
    endDate: "Dec 2022",
    description: "Built responsive user interfaces using React and implemented state management with Redux. Collaborated with designers to create intuitive user experiences."
  },
  {
    title: "Web Development Intern",
    company: "Digital Agency",
    location: "Rabat, Morocco",
    startDate: "Jan 2021",
    endDate: "May 2021",
    description: "Assisted in developing websites using HTML, CSS, and JavaScript. Learned about modern web development practices and tools."
  }
]; 