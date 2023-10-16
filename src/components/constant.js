import {
  mobile,
  backend,
  web,
  creator,
  meta,
  shopify,
  tesla,
  starbucks,
  html,
  css,
  javascript,
  reactjs,
  docker,
  nodejs,
  github,git,mongodb,tailwind,typescript,graphql,firebase,aws,redux,threejs,nextjs
} from "../assets/index";

const services = [
  { title: "React Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "Web Developer", icon: web },
  { title: "FullStack Developer", icon: creator },
];
const experiences = [
  {
    company: "Mybag",
    projectName: "ecommerce app ",
    icon: meta,
    date:"July 2023",
    points: [
      "Developing and maintaining web applications using Next .js,React.js and other related technologies.",
      "use of redux toolkit for manage global level state.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "using react tabel for frontend validation and tailwind css for css.",
    ],
  },
  {
    company: "3d-portfolio",
    projectName: "portfolio webapp ",
    icon: tesla,
    date:"October 2023",
    points: [
      "Developing  web applications using React.js,Three.js,Next.js and other related technologies.",
      "use 3d models for intractive ui with users.",
      "Using in this framer motion for build animations.",
      "Using of typescript for better experience in build time and type safety.",
    ],
  },
 
  

];
const tech = [
  { icon: html, tech: "html" },
  { icon: css, tech: "css" },
  { icon: javascript, tech: "javascript" },
  { icon: reactjs, tech: "reactjs" },
  { icon: docker, tech: "docker" },
  { icon: nodejs, tech: "nodejs" },
  { icon: git, tech: "git" },
  // { icon: github, tech: "github" },
  { icon: mongodb, tech: "mongodb" },
  { icon: typescript, tech: "typescript" },
  { icon: tailwind, tech: "tailwind" },
  // { icon: aws, tech: "aws" },
  // { icon: graphql, tech: "graphql" },
  { icon: redux, tech: "redux" },
  { icon: threejs, tech: "threejs" },
  // { icon: firebase, tech: "firebase" },
  { icon: nextjs, tech: "nextjs" },
 
];

export { services, experiences, tech };
