import {
    mobile,   backend,  creator,  web,  javascript,    html,  css,  reactjs,  redux,  tailwind,  nodejs,  mongodb,  git,  figma,   inem,  sena,  unicesmag,  udea,  carrent,  jobit,  tripguide,  threejs,} from "../assets";
  

    
    const about=[
      {
        title:"Descripcion general.",
        subt:"Introduccion",
        text:"Hola de nuevo, me presento mi nombre es Diana Marin y soy ingenieria de sistemas con experiencia en el área de desarrollo web, con amplios conocimientos en administración de base de datos PostgreSQL, MongoDB, MySQL también se gestionar frameworks como React, Laravel y Django, Aprendo rápido y colaboro estrechamente con los clientes para crear soluciones eficientes, escalables y fáciles de usar que resuelvan problemas del mundo real. ¡Trabajemos juntos para hacer realidad tus ideas! ",
    
      }
    ];
 
    const textProjects=[
      {
        title:"Proyectos",
        subt:"Mi trabajo",
        text:" Los siguientes proyectos muestran mis habilidades y experiencia a través de ejemplos reales de mi trabajo. Cada proyecto se describe brevemente con enlaces a repositorios de código o descripciones completas de cada proyecto. Refleja mi capacidad para resolver problemas complejos, trabajar con diferentes tecnologías y administrar proyectos de manera efectiva.",
      }
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

  const navLinks = [
    {
      id: "about",
      title: "Acerca de mi",
    },
    {
      id: "education",
      title: "Educacion",
    },
    {
      id: "work",
      title: "Trabajos",
    },
    
    {
      id: "contact",
      title: "Contacto",
    },
  ];
  
  const services = [
    {
      title: "Creacion de marca",
      icon: mobile,
    },
    {
      title: "Diseño web",
      icon: web,
    },
   
    {
      title: "Desarrollo web",
      icon: backend,
    },
    {
      title: "Desarrolladora Backend",
      icon: creator,
    },
  ];
  
  const experiences = [
    {
      title: "Bachiller Tecnico",
      company_name: "INEM - PASTO",
      icon: inem,
      iconBg: "#383E56",
      date: " 2010 -  2016",
   
    },
    {
      title: " Tecnico en diseño e integracion multimedia",
      company_name: "SENA",
      icon: sena,
      iconBg: "#E6DEDD",
      date: "2014 -  2016",
     
    },
    {
      title: "Ingenieria de sistemas",
      company_name: "UNIVERSIDAD CESMAG",
      icon: unicesmag,
      iconBg: "#383E56",
      date: "2017 - 2022",
    
    },
    {
      title: "Diplomado diseño web",
      company_name: "UNIVERSIDAD DE ANTIOQUIA",
      icon: udea,
      iconBg: "#E6DEDD",
      date: "2022",
  
    },
  ];
  
  const projects = [
    {
      name: "CS - Admin",
      description:
        "El presente proyecto de investigación tuvo como finalidad potenciar la carga  semántica documental en un modelo de base de datos relacional, teniendo en  cuenta el desarrollo de una herramienta web ",
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
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "Heroku",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/ingdemc/csadmin.git",
    },
    {
      name: "Enersur",
      description:
        "Aplicación web que permite a los usuarios obtener diferentes servicios relacionados con la ingeniería electromecánica, tales como diseño eléctrico, construcción de redes y consultoría de manera eficiente y amigable para el cliente.",
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
        "Una plataforma de belleza integral, donde podrás encontrar diferentes productos y servicios para el cuidado de la piel y el cabello",
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
 
 
  const Es= [ navLinks,    about,    services,     experiences,    technologies,  textProjects,    projects ];
  export default Es;