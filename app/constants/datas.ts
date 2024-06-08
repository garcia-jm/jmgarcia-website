import {
  RiNextjsFill as nextjsIcon,
  RiTailwindCssFill as tailwindIcon,
} from "react-icons/ri";
import {
  FaHtml5 as html5Icon,
  FaCcStripe as stripeIcon,
  FaNode as nodeIcon,
  FaPython as pythonIcon,
  FaReact as reactIcon,
} from "react-icons/fa";
import { FaCss3Alt as css3Icon, FaJava as javaIcon } from "react-icons/fa6";
import { IoLogoJavascript as jsIcon } from "react-icons/io5";
import {
  SiPrisma as prismaIcon,
  SiMysql as mysqlIcon,
  SiExpress as expressIcon,
  SiTypescript as tsIcon,
  SiShadcnui as shadcnIcon,
  SiRedux as reduxIcon,
} from "react-icons/si";
import {
  TbBrandCSharp as csharpIcon,
  TbBrandFramerMotion as fmIcon,
} from "react-icons/tb";
import {
  DiMongodb as mongoIcon,
  DiJqueryLogo as jqueryIcon,
} from "react-icons/di";

import { images } from "./images";

export const learnAtSchool = [
  "HTML5",
  "JavaScript",
  "CSS3",
  "Java",
  ".NET",
  "C#",
  "ASP.NET MVC",
  "Object Oriented Programming",
  "Node.js",
  "Express.js",
  "jQuery",
  "Ajax",
  "RESTFul Api",
  "Python",
];

export const learnAtWork = [
  "React",
  "Vite.js",
  "Next.js",
  "Prisma",
  "Tailwind CSS",
  "TypeScript",
  "Redux.js",
  "Stripe",
  "Shadcn",
  "Axios",
  "NextAuth.js",
  "MySQL",
  "Fabric.js",
  "Framer motion",
  "Chakra-ui",
];

export const projects = [
  {
    title: "Travel Experts Admin App",
    skills: [
      "Java",
      "JavaFX",
      "Object-Oriented Programming Paradigm",
      "MariaDB",
      "Scene Builder",
    ],
    description:
      "A JavaFX Application that follows an Object-Oriented Programming Paradigm that uses MariaDB to store and organize user's data. The Application allows its users to add, update, retrieve, and delete an account or information of customers, agents, and/or packages.",
    imgUrl: [
      images.w6_frontPage,
      images.w6_customerPage,
      images.w6_agentsPage,
      images.w6_packagesPage,
    ],
  },
  {
    title: "Agent Management App",
    skills: [
      "HTML",
      "CSS3",
      "JavaScript",
      "JSP",
      "Jakarta EE",
      "Java",
      "jQuery",
      "Ajax",
      "MariaDB",
    ],
    description:
      "An Asynchronous Web Application that uses Ajax to make requests to the server that has access to the database. The Agent Management Application lets its users manage the agent table by adding, retrieving, updating, and deleting an agent account or information.",
    imgUrl: [images.w7_frontPage],
  },
  {
    title: "Travel Experts Android App",
    skills: [
      "Java",
      "Object-Oriented Programming Paradigm",
      "Android Mobile Application",
      "RESTful Api",
      "JSON",
      "XML",
      "MariaDB",
    ],
    description:
      "An Android Application that uses RESTful Api to communicate to the server and requests data from the server that have access to the database. The Travel Experts Android App allows its users to register an account, log in, edit their information, view their booking history active/inactive, and see the available booking packages.",
    imgUrl: [
      images.w8_frontPage,
      images.w8_welcomePage,
      images.w8_profilePage,
      images.w8_bookingPage,
      images.w8_registerPage,
    ],
  },
  {
    title: "E-commerce Website",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Fabric.js",
      "NextAuth.js",
      "Prisma",
      "Redux.js",
      "MySQL",
    ],
    description:
      "An e-commerce website built in Next.js framework. The website has key features such as an add-to-cart functionality, a billing system, a user-authentication, and an edit studio where users can customize a product that they want to purchase.",
    imgUrl: [
      images.ing_1,
      images.ing_2,
      images.ing_3,
      images.ing_4,
      images.ing_5,
      images.ing_6,
      images.ing_7,
      images.ing_8,
      images.ing_9,
      images.ing_10,
      images.ing_11,
    ],
  },

  {
    title: "Recipe Radar",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Node.js",
      "Express.js",
      "Third Party API",
    ],
    description:
      "A React Web Application that uses third-party API to gather and provide data or information to the users. Radar Recipe serves as a tool for people who are looking for food that they want to cook by providing the image of the food, ingredients, and steps on how to prepare and cook the food.",
    imgUrl: [images.comingsoon],
  },
];

export const experiences = [
  {
    company: "Ingraph Ltd.",
    date: "Jan - May 2024",
    position: "Web Developer",
    location: "Calgary, AB",
    description:
      "I developed an e-commerce website with key features such as an add-to-cart functionality, a billing system, a user-authentication, and an edit studio where users can customize a product that they want to purchase. Also made it look pretty.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Fabric.js",
      "NextAuth.js",
      "Prisma",
      "Redux.js",
      "MySQL",
    ],
  },
];

export const resumeDetails = [
  {
    category: "Experience",
    title: "My Experience",
    description:
      "I have a solid foundation in modern web development frameworks and a passion for creating user-friendly and impactful web applications. I am confident that I can deliver high-quality results.",
  },
  {
    category: "Education",
    title: "My Education",
    description:
      "My education has provided me with a strong understanding of the fundamental concepts of software development. I have also gained experience in working with modern frameworks and tools.",
  },
  {
    category: "Skills",
    title: "My Skills",
    description:
      "My skills has been developed through my education and work experience. I have experience working with modern frameworks and tools such as Next.js, React, Tailwind CSS, and more.",
  },
  {
    category: "About me",
    title: "About Me",
    description:
      "I am a passionate and dedicated web developer with a strong foundation in modern web development frameworks. I am committed to creating user-friendly and impactful web applications.",
  },
];

export const skills = [
  {
    name: "Nextjs",
    icon: nextjsIcon,
  },
  {
    name: "React.js",
    icon: reactIcon,
  },
  {
    name: "Tailwind CSS",
    icon: tailwindIcon,
  },
  {
    name: "HTML5",
    icon: html5Icon,
  },
  {
    name: "CSS3",
    icon: css3Icon,
  },
  {
    name: "JavaScript",
    icon: jsIcon,
  },
  {
    name: "Node.js",
    icon: nodeIcon,
  },
  {
    name: "Express.js",
    icon: expressIcon,
  },
  {
    name: "TypeScript",
    icon: tsIcon,
  },
  {
    name: "Prisma",
    icon: prismaIcon,
  },
  {
    name: "MySQL",
    icon: mysqlIcon,
  },
  {
    name: "MongoDB",
    icon: mongoIcon,
  },
  {
    name: "Python",
    icon: pythonIcon,
  },
  {
    name: "Java",
    icon: javaIcon,
  },
  {
    name: "C#",
    icon: csharpIcon,
  },
  {
    name: "jQuery",
    icon: jqueryIcon,
  },
  {
    name: "Stripe",
    icon: stripeIcon,
  },
  {
    name: "Redux.js",
    icon: reduxIcon,
  },
  {
    name: "Shadcn",
    icon: shadcnIcon,
  },
  {
    name: "Framer Motion",
    icon: fmIcon,
  },
];
