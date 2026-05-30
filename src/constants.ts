import { Github, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { NavLink, Skill, Benefit, Portfolio, FAQ, SocialLink, ContactDetail, TimelineItem } from "./types";

export const navLinks: NavLink[] = [
  {
    label: "Home",
    url: "#/",
  },
  {
    label: "About",
    url: "#/about",
  },
  {
    label: "Portfolio",
    url: "#/portfolio",
  },
  {
    label: "Contact",
    url: "#/contact",
  },
];

export const skills: Skill[] = [
  {
    id: 1,
    name: "Front-End Development",
    description:
      "Expertise in building interactive and responsive user interfaces using HTML, CSS, JavaScript, and frameworks like React and Vue.",
    icon: "/icons/frontend.png",
  },
  {
    id: 2,
    name: "Back-End Development",
    description:
      "Proficient in server-side development, API creation, and database management using technologies like Node.js, Express, and PostgreSQL.",
    icon: "/icons/backend.png",
  },
  {
    id: 3,
    name: "Database Management",
    description:
      "Experience with relational and NoSQL databases like PostgreSQL and MongoDB to store and manage data efficiently.",
    icon: "/icons/database.png",
  },
  {
    id: 4,
    name: "Backend as a Service (BaaS)",
    description:
      "Experience with BaaS platforms like Supabase and Firebase to quickly set up scalable back-end services, including authentication, database management, and real-time data synchronization.",
    icon: "/icons/baas.jpg",
  },
  {
    id: 5,
    name: "API Design & Integration",
    description:
      "Skilled in creating RESTful APIs and GraphQL endpoints to connect front-end interfaces with back-end services.",
    icon: "/icons/API.png",
  },
  {
    id: 6,
    name: "Version Control & Collaboration",
    description:
      "Proficient in using Git for version control, along with collaboration tools like GitHub for managing codebases in teams.",
    icon: "/icons/git.png",
  },
];

export const benefits: Benefit[] = [
  {
    id: 1,
    name: "Customized Development",
    description:
      "I translate your brand identity into a unique web application, ensuring it reflects your values and stands out from the competition.",
  },
  {
    id: 2,
    name: "Engaging User Experience",
    description:
      "I create visually stunning applications with interactive elements to captivate visitors and enhance your brand's credibility.",
  },
  {
    id: 3,
    name: "User-Centric Design",
    description:
      "Focusing on user experience, I build intuitive applications through research and testing, leading to higher engagement and conversions.",
  },
  {
    id: 4,
    name: "Full-Stack Solutions",
    description:
      "I provide end-to-end development, ensuring seamless functionality from front-end interfaces to back-end logic.",
  },
  {
    id: 5,
    name: "Mobile Optimization",
    description:
      "I create responsive designs that adapt to all devices, ensuring accessibility and engagement across platforms.",
  },
];

export const portfolios: Portfolio[] = [
  {
    id: 1,
    title: "Modern Blog Platform",
    link: "https://github.com/code-farmer-VII/Blog",
    images: [
      "/images/blog-1.png",
      "/images/blog-2.png",
      "/images/blog-3.png",
    ],
    overview: "This is a modern, full-stack blog platform where users can create, manage, and update their own blog posts. It supports a dynamic and interactive blogging experience with a clean, responsive interface.",
    motivation: "The motivation behind this project was to explore full-stack development using modern frameworks while building a practical application. I wanted to create a real-world project that demonstrates my skills in authentication, API design, frontend/backend integration, and user account management.",
    technologies: [
      "Nest.js",
      "Next.js",
      "Turborepo",
      "Prisma",
      "GraphQL",
      "JWT",
      "OAuth (Google)"
    ],
    architecture: "The project follows a monorepo architecture using Turborepo. The backend is built with Nest.js and Prisma, exposing a GraphQL API. The frontend is powered by Next.js, providing SSR and a seamless user experience. Authentication and authorization are handled using both custom JWT-based login and Google OAuth, ensuring secure access for users.",
    futureImprovements: [
      "Add a rich text editor for better blog content formatting.",
      "Enable image uploads for blog posts.",
      "Implement comments and likes system.",
      "Add admin panel for content moderation.",
    ],
    contactInfo: "temesgengonfa72127@gmail.com"
  },
  {
    id: 2,
    title: "CBE Customer Budget Management System",
    link: "https://www.linkedin.com/posts/temesgen-gonfa-125a25271_appdevelopment-reactnative-expo-activity-7253836374380892161-rAs5",
    images: [
      "/images/bank ---------1.png",
      "/images/bank -------- 2.png",
      "/images/banck -----3.png",
    ],
    overview: "This project is designed to manage customer budgets, targeting both customers and financial institutions. Its primary objective is to improve financial planning and management.",
    motivation: "The motivation for this project arose from observing the challenges customers face in managing their budgets effectively. By providing a structured approach, we aim to enhance financial literacy and control.",
    technologies: [
      "React Native",
      "Expo",
      "Supabase (BaaS)",
    ],
    architecture: "The architecture of this project uses Supabase as a Backend-as-a-Service, with Expo React Native as the frontend of the mobile app to allow smooth calculations and records.",
    futureImprovements: [
      "Integrating a mobile application for easier access.",
      "Implementing AI-driven budget recommendations.",
      "Enhancing data visualization features.",
    ],
    contactInfo: "temesgengonfa72127@gmail.com"
  },
  {
    id: 3,
    title: "Reverse Auction System for Procurement Reform in Ethiopia",
    link: "https://github.com/code-farmer-VII/RAS-frontend",
    images: [
      "/images/RAS-1.png",
      "/images/RAS-2.png",
      "/images/RAS-3.png"
    ],
    overview: "This project addresses the inefficiencies of Ethiopia’s traditional procurement system by introducing a web-based Reverse Auction System (RAS). The platform enables buyers to post RFQs and sellers to bid competitively, promoting transparency, efficiency, and wider market access.",
    motivation: "The motivation behind this project was to modernize Ethiopia’s procurement process by reducing bureaucratic delays, inflated costs, and limited supplier involvement. I wanted to create a fair, efficient, and transparent platform that benefits government agencies, large organizations, and small enterprises alike.",
    technologies: [
      "ReactJS",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "JWT",
      "Chapa Payment"
    ],
    architecture: "The system is designed with a modular architecture using ReactJS for the frontend and NestJS for the backend. PostgreSQL serves as the relational database, while secure authentication is managed using JWT. The system features include RFQ management, bidding interface, bid evaluation tools, transaction history, and role-based access for buyers and sellers.",
    futureImprovements: [
      "Mobile app integration for increased accessibility.",
      "Advanced analytics and reporting features.",
      "AI-based bid recommendation and fraud detection.",
      "Global supplier onboarding and multi-language support."
    ],
    contactInfo: "temesgengonfa72127@gmail.com"
  },
  {
    id: 4,
    title: "EPRMS (Electronic Patient Record Management System)",
    link: "https://github.com/code-farmer-VII/EPRMS-Maychew-Public-Medical-Center",
    images: [
      "/images/EPRMS 1.png",
      "/images/EPRMS 2.png",
      "/images/EPRMS 3.png",
    ],
    overview: "This project is designed to streamline patient record management in healthcare facilities, targeting healthcare providers and patients.",
    motivation: "The motivation for this project arose from the need for efficient management of patient records, ensuring easy access and better patient care. This website fully controls patient flow from reception to doctor and lab technician, and health officers to manage the system.",
    technologies: [
      "Laravel",
      "Blade template",
      "MySQL",
    ],
    architecture: "The project uses a monolithic architecture where the frontend and backend are integrated into a single application with blade templates.",
    futureImprovements: [
      "Implementing telemedicine features.",
      "Enhancing security protocols.",
      "Expanding user access roles for different healthcare professionals.",
    ],
    contactInfo: "temesgengonfa72127@gmail.com"
  },
  {
    id: 5,
    title: "Addis Ababa University Task Management System",
    link: "https://github.com/code-farmer-VII/AAU-Task-Management-System",
    images: [
      "/images/task 1.png",
      "/images/task 2.png",
      "/images/task 3.png",
    ],
    overview: "This system aims to assist students and faculty in managing academic tasks and assignments efficiently.",
    motivation: "The project was inspired by the challenges teachers face in tracking their academic responsibilities and deadlines.",
    technologies: [
      "Laravel",
      "Blade template",
      "MySQL",
    ],
    architecture: "The project uses a monolithic architecture where the frontend and backend are integrated into a single application with blade templates.",
    futureImprovements: [
      "Adding mobile app support.",
    ],
    contactInfo: "temesgengonfa72127@gmail.com"
  },
  {
    id: 6,
    title: "School Management System",
    link: "https://github.com/code-farmer-VII/School-Management-System",
    images: [
      "/images/school-1.png",
      "/images/school-2.png",
      "/images/school-3.png",
    ],
    overview: "This project is a School Management System web application built using Laravel and Filament. It provides separate dashboards for administrators, teachers, and students, each with role-based access and tailored functionalities.",
    motivation: "The aim was to create a centralized and efficient platform to manage school operations, improve communication between stakeholders, and demonstrate my ability to implement secure access control and user management.",
    technologies: [
      "Laravel",
      "FilamentPHP",
      "MySQL",
      "PHP",
      "Role-Based Access Control",
    ],
    architecture: "The application uses Laravel as the backend framework with Filament as an admin interface. It implements robust role-based access control (RBAC), providing three distinct dashboards for Admin, Teacher, and Student roles.",
    futureImprovements: [
      "Add real-time class schedules and announcements.",
      "Implement a grading and performance tracking module.",
      "Integrate email/SMS notifications for parents and students.",
      "Support file uploads for assignments and materials.",
    ],
    contactInfo: "temesgengonfa72127@gmail.com"
  },
  {
    id: 7,
    title: "Squared Company Portfolio",
    link: "https://github.com/code-farmer-VII/squared-tech",
    images: [
      "/images/squared1.png",
      "/images/squared2.png",
      "/images/squared3.png",
    ],
    overview: "A modern and responsive website showcasing the professional web presence of Squared Company. It highlights the company's mission, services, and contact details with seamless animations and styling.",
    motivation: "The project aims to establish a strong online presence for Squared Company, delivering essential information with a visually appealing and user-friendly interface.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    architecture: "The portfolio is a single-page application (SPA) optimized for performance, animations, and responsiveness.",
    futureImprovements: [
      "Adding a blog section for company updates.",
      "Integrating analytics for user behavior tracking.",
      "Enhancing accessibility.",
    ],
    contactInfo: "temesgengonfaformal@gmail.com"
  },
  {
    id: 8,
    title: "E-commerce Website",
    link: "https://e-commerce-teal-theta.vercel.app",
    images: [
      "/images/e-commerce 1.png",
      "/images/e-commerce 2.png",
      "/images/e-commerce 3.png",
    ],
    overview: "This landing page offers a showcase of products available for online purchase, aiming to enhance the shopping experience.",
    motivation: "The motivation for this project came from the growing trend of online shopping and the need for a user-friendly interface.",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "JavaScript",
    ],
    architecture: "The page is designed as a static site, focusing on responsive design and user experience.",
    futureImprovements: [
      "Integrating backend with APIs.",
      "Integrating payment gateway solutions.",
    ],
    contactInfo: "temesgengonfa72127@gmail.com"
  },
  {
    id: 9,
    title: "Hibret Bank Landing Page",
    link: "https://banck-landing-page.vercel.app",
    images: [
      "/images/landing page 2.png",
      "/images/landing page 3.png",
      "/images/landing page.png",
    ],
    overview: "This landing page serves as the digital front for Hibret Bank, showcasing services and attracting potential customers.",
    motivation: "The motivation was to create an attractive online presence for the bank to enhance customer engagement.",
    technologies: [
      "Next.js",
      "HTML",
      "TailwindCSS",
      "JavaScript",
    ],
    architecture: "The landing page follows a single-page application (SPA) architecture for smooth user experience.",
    futureImprovements: [
      "Implementing multilingual support.",
      "Adding customer feedback features.",
    ],
    contactInfo: "temesgengonfa72127@gmail.com"
  },
  {
    id: 10,
    title: "Restaurant Landing Page",
    link: "https://restaurant-web-teal.vercel.app/",
    images: [
      "/images/restorant 3.png",
      "/images/restourant 1.png",
      "/images/restorant 2.png",
    ],
    overview: "This landing page showcases a restaurant's menu and services, providing essential information to visitors.",
    motivation: "The project aimed to create an engaging online platform for the restaurant to attract customers.",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "JavaScript",
    ],
    architecture: "The page is designed as a static site, focusing on responsive design and user experience.",
    futureImprovements: [
      "Integrating an online reservation system.",
      "Implementing backend features",
    ],
    contactInfo: "temesgengonfa72127@gmail.com"
  },
  {
    id: 11,
    title: "React Admin Dashboard",
    link: "https://admindashbord-gilt.vercel.app/",
    images: [
      "/images/dashboard-1.png",
      "/images/dashboard-2.png",
      "/images/dashboard-3.png"
    ],
    overview: "A dynamic admin dashboard for real-time monitoring, data analysis, and management. It features interactive charts and data tables with a modern, responsive UI.",
    motivation: "The goal of this project was to build an efficient, scalable admin interface that supports real-time data visualization and empowers administrators with actionable insights.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Chart.js",
      "CSS"
    ],
    architecture: "The application is built using a component-based architecture in React, styled with Tailwind CSS, and includes Chart.js for dynamic data visualization.",
    futureImprovements: [
      "Add authentication and role-based access control.",
      "Integrate REST API or GraphQL.",
    ],
    contactInfo: "temesgengonfa72127@gmail.com"
  }
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "Can you work with clients remotely?",
    answer:
      "Absolutely! I have extensive experience collaborating with clients worldwide. Using tools like Slack, video calls, and GitHub, I ensure clear communication and steady project progress regardless of borders and timezones.",
  },
  {
    id: 2,
    question: "Do you offer web app maintenance and support?",
    answer:
      "Yes, I provide comprehensive website and app maintenance, debugging, dependency upgrades, performance auditing, and system updates to ensure your product remains secure and fast.",
  },
  {
    id: 3,
    question: "What technologies do you use for full-stack development?",
    answer:
      "My core stack includes React, Next.js, Node.js, Express, PostgreSQL, MongoDB, Laravel, and BaaS solutions like Supabase and Firebase. I choose the best tool depending on the project scope and scale.",
  },
  {
    id: 4,
    question: "How do you ensure the style, accessibility and quality of your code?",
    answer:
      "I follow rigorous styling guidelines, write strict TypeScript type definitions, implement fluid mobile-responsive layouts, and perform unit / regression runs before deployment to guarantee stellar experiences.",
  },
  {
    id: 5,
    question: "What is your approach to project timelines and deliverables?",
    answer:
      "I prioritize radical transparency. I break projects down into milestones with exact timelines, commit increments to staging early so clients can try features, and communicate obstacles immediately.",
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    label: "Github",
    icon: Github,
    url: "https://github.com/code-farmer-VII",
  },
  {
    id: 2,
    label: "Linkedin",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/temesgen-gonfa-125a25271/",
  },
];

export const contactDetails: ContactDetail[] = [
  {
    id: 1,
    icon: Phone,
    text: "+251 9249 00 514",
  },
  {
    id: 2,
    icon: Mail,
    text: "temesgengonfa72127@gmail.com",
  },
  {
    id: 3,
    icon: MapPin,
    text: "Ethiopia, Addis Ababa",
  },
];

export const timeline: TimelineItem[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    institution: "Safaricom Ethiopia",
    duration: "Dec 2025 - Present",
    location: "Addis Ababa, Ethiopia",
    type: "experience",
    description: "Developed scalable full-stack web applications using modern technologies and implemented low-latency backends.",
    bullets: [
      "Developed scalable full-stack web applications using NestJS, Next.js, TypeScript, and PostgreSQL.",
      "Built RESTful APIs and modular backend services with NestJS, improving API response times and maintainability.",
      "Integrated authentication and authorization systems using JWT, OAuth, and role-based access control (RBAC).",
      "Optimized database queries and backend performance using Prisma ORM and caching strategies with Redis."
    ]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    institution: "Yonile Communication",
    duration: "Oct 2025 - Feb 2026",
    location: "Addis Ababa, Ethiopia",
    type: "experience",
    description: "Built and maintained responsive web applications, robust APIs, and performant database integrations.",
    bullets: [
      "Build and maintain web applications with responsive interfaces, APIs, and database integration, ensuring seamless user experiences and scalable solutions."
    ]
  },
  {
    id: 3,
    title: "Full Stack Developer",
    institution: "Squared Technology",
    duration: "Feb 2025 - May 2025",
    location: "Addis Ababa, Ethiopia",
    type: "experience",
    description: "Developed backend services using NestJS and crafted responsive Next.js web applications remotely.",
    bullets: [
      "Developed backend services with NestJS and built web applications using Next.js, contributing remotely to projects as a full-stack developer."
    ]
  },
  {
    id: 4,
    title: "Network Administrator",
    institution: "Ethiopian Airlines",
    duration: "Oct 2024 - Dec 2024",
    location: "Addis Ababa, Ethiopia",
    type: "experience",
    description: "Managed, monitored, and secured key enterprise network infrastructures and mission-critical systems.",
    bullets: [
      "Managed and secured enterprise networks by configuring routers, and switches, while ensuring uptime, performance, and user support through monitoring and troubleshooting tools."
    ]
  },
  {
    id: 5,
    title: "Backend Developer",
    institution: "Perago Information System",
    duration: "Jul 2024 - Sep 2024",
    location: "Addis Ababa, Ethiopia",
    type: "experience",
    description: "Designed microservices and secure systems using domain-driven design and paired programming paradigms.",
    bullets: [
      "Worked under the guidance of senior engineers to build microservices with NestJS, PostgreSQL, and Docker, applying testing and domain-driven design principles.",
      "Engaged in paired programming and collaborative review sessions using GitLab CI/CD to enhance software quality and adherence to best practices."
    ]
  },
  {
    id: 6,
    title: "Full Stack Developer",
    institution: "Empire Technology",
    duration: "Jul 2023 - Sep 2024",
    location: "Addis Ababa, Ethiopia",
    type: "experience",
    description: "Coordinated with cross-functional teams to ship clean full-stack web and mobile apps.",
    bullets: [
      "Collaborated with cross-functional teams, including UX and product management, to develop full-stack web and mobile applications using Node.js, Laravel, React.js, Expo, and Supabase, ensuring scalable and efficient solutions.",
      "Utilized version control systems to manage codebase and integrate contributions from paired programming sessions with senior developers."
    ]
  },
  {
    id: 7,
    title: "BSc in Information Systems",
    institution: "Addis Ababa University",
    duration: "Sep 2021 - Jun 2025",
    location: "Addis Ababa, Ethiopia",
    type: "education",
    description: "Completed undergraduate degree in Information Systems.",
    bullets: [
      "GPA: CGPA 3.8/4",
      "Focused on advanced software structures, enterprise architecture, and information system management."
    ]
  }
];
