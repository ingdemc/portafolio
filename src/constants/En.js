import {
  mobile,   backend,  creator,  web,  javascript,    html,  css,  reactjs,  redux,  tailwind,  nodejs,  mongodb,  git,  figma,    inem,  sena,  unicesmag,  udea,  carrent,  jobit,  tripguide,  threejs,} from "../assets";




const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  
  {
    id: "contact",
    title: "Contact",
  },
];

const about=[
  {
    title:"Overview.",
    subt:"Introduction",
    text:"      I'm a software developer with a background in JavaScript, and experience with frameworks like React,  Tailwind,  Djando  and Three.js. I learn fast and collaborate closely with clients to create efficient, scalable, and easy-to-use solutions that solve real-world problems. Let's work together to bring your ideas to life!",

  }
]
const services = [
  {
    title: "Brand creation",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
 
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
 
];

const experiences = [
  {
    title: "Bachiller Tecnico",
    company_name: "Inem",
    icon: inem,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
 
  },
  {
    title: " Tecnico en diseño e integracion multimedia",
    company_name: "Sena",
    icon: sena,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
   
  },
  {
    title: "Ingenieria de sistemas",
    company_name: "Unicesmag",
    icon: unicesmag,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
  
  },
  {
    title: "Diplomado diseño web",
    company_name: "Udea",
    icon: udea,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",

  },
];

const textProjects=[
  {
    title:"Projects",
    subt:"My work",
    text:" Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
  }
]
const projects = [
  {
    name: "CS - Admin",
    description:
      "Web-based platform that allows users to analyze and understand the general structure of a relational database in the PostgreSQL database management system.",
    tags: [
      {
        name: "Postgresql",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ingdemc/csadmin.git",
  },
  {
    name: "Enersur",
    description:
      "Web application that allows users to obtain different services related to electromechanical engineering, such as electrical design, network construction and consulting in an efficient and customer-friendly way.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "http://localhost:5173/project",
  },
  
  {
    name: "Donosa",
    description:
      "A comprehensive beauty platform, where you can find different products and services",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ingdemc/Donosa.git",
  },
  
];



const En=[ navLinks,    about,    services,     experiences,    technologies,  textProjects,    projects ];

export default En;