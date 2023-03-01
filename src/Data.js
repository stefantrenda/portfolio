import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGitlab,
  FaLinkedin,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import { SiJquery, SiJavascript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { VscJson } from "react-icons/vsc";
import { DiScrum } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import portfolio from "./assets/portfolio.jpg";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";
import work7 from "./assets/work7.png";
import work8 from "./assets/work8.jpg";
import work9 from "./assets/work9.jpg";
import work10 from "./assets/work10.jpg";
import work11 from "./assets/work11.jpg";
import work12 from "./assets/work12.png";
import work13 from "./assets/work13.png";
import work14 from "./assets/work14.png";
import work15 from "./assets/work15.png";
import work16 from "./assets/work16.png";
import work17 from "./assets/work17.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [
  {
    id: 1,
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/stefantrenda/",
  },
  {
    id: 2,
    icon: <FaGitlab />,
    link: "https://gitlab.com/stefantrenda",
  },
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Stefan Trendafilovski",
  },
  {
    id: 2,
    icon: <FaGitlab />,
    key: "GitLab",
    value: "@stefantrenda",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "stefantrenda@gmail.com",
  },
];

export const icons = [
  {
    id: 1,
    icon:  <FaHtml5 />,
    bio: "HTML"
  },
  {
    id: 2,
    icon:  <FaCss3 />,
    bio: "CSS"
  },
  {
    id: 3,
    icon:  <FaSass />,
    bio: "SASS"
  },
  {
    id: 4,
    icon:  <FaGitAlt />,
    bio: "GIT"
  },
  {
    id: 5,
    icon:  <FaBootstrap />,
    bio: "Boostrap"
  },
  {
    id: 7,
    icon:  <SiJavascript />,
    bio: "JavaScript"
  },
  {
    id: 8,
    icon:  <SiJquery />,
    bio: "jQuery"
  },
  {
    id: 9,
    icon:  <VscJson />,
    bio: "AJAX"
  },
  {
    id: 10,
    icon:  <SiTypescript />,
    bio: "Typesript"
  },
  {
    id: 11,
    icon:  <FaReact />,
    bio: "ReactJS"
  },
  {
    id: 12,
    icon:  <TbBrandNextjs />,
    bio: "NextJS"
  },
  {
    id: 13,
    icon:  <DiScrum />,
    bio: "SCRUM"
  },
 
];

export const experiences = [
  {
    id: 1,
    year: "2022/2023",
    position: "Front-End Developer",
    company: "Brainster Academy",
  },
];

// export const finishes = [
//   {
//     id: 1,
//     number: "6+",
//     itemName: "Years Of Experience",
//   },
//   {
//     id: 2,
//     number: "150+",
//     itemName: "Satisfied Customers",
//   },
//   {
//     id: 3,
//     number: "669+",
//     itemName: "Designed Items",
//   },
//   {
//     id: 4,
//     number: "117+",
//     itemName: "Clients Served",
//   },
// ];
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "ReactJS 1",
    category: "ReactJS",
    gitLab: "https://gitlab.com/stefantrenda/brainsterchallenges_stefantrendafilovskife7/-/tree/Challenge20-React",
    demo: "https://cuisines.netlify.app/",
  },
  {
    id: 2,
    img: work2,
    name: "ReactJS 2",
    category: "ReactJS",
    gitLab: "https://gitlab.com/stefantrenda/brainsterchallenges_stefantrendafilovskife7/-/tree/Challenge_19-React",
    demo: "https://music-app-steph-dev.vercel.app/",
  },
  {
    id: 3,
    img: work3,
    name: "ReactJS 3",
    category: "ReactJS",
    gitLab: "https://gitlab.com/stefantrenda/brainsterchallenges_stefantrendafilovskife7/-/tree/Challenge18-React",
    demo: "https://bike-store-steph-dev.vercel.app/",
  },
  {
    id: 4,
    img: work4,
    name: "JavaScript 1",
    category: "JavaScript",
    gitLab: "https://gitlab.com/stefantrenda/brainsterchallenges_stefantrendafilovskife7/-/tree/Challenge_19-React",
    demo: "https://ajax-steph-dev.vercel.app/#",
  },
  {
    id: 5,
    img: work5,
    name: "JavaScript 2",
    category: "JavaScript",
    gitLab: "https://gitlab.com/stefantrenda/brainsterchallenges_stefantrendafilovskife7/-/tree/Challenge15-jQuery",
    demo: "https://jquery-racegame-steph-dev.vercel.app/",
  },
  {
    id: 6,
    img: work6,
    name: "JavaScript 3",
    category: "JavaScript",
    gitLab: "https://gitlab.com/stefantrenda/brainsterchallenges_stefantrendafilovskife7/-/tree/Challenges_14",
    demo: "https://budget-app-steph-dev.vercel.app/",
  },
  {
    id: 7,
    img: work7,
    name: "JavaScript 4",
    category: "JavaScript",
    gitLab: "https://gitlab.com/stefantrenda/brainsterchallenges_stefantrendafilovskife7/-/tree/Challenge_12-JavaScript",
    demo: "https://books-steph-dev.vercel.app/",
  },
  {
    id: 8,
    img: work8,
    name: "Boostrap 1",
    category: "SASS/Boostrap",
    gitLab: "https://gitlab.com/stefantrenda/brainsterchallenges_stefantrendafilovskife7/-/tree/Challenge_08-Bootstrap/BrainsterChallenges_Stefan_Tredafilovski_FE7_Challenge08",
    demo: "https://boostrap-steph-dev.vercel.app/",
  },
  {
    id: 9,
    img: work9,
    name: "Boostrap 2",
    category: "SASS/Boostrap",
    gitLab: "https://gitlab.com/stefantrenda/brainsterchallenges_stefantrendafilovskife7/-/tree/Chalenge_07-Bootstrap/BrainsterChallenges_Stefan_Tredafilovski_FE7_Challenge07",
    demo: "https://boostrap-sass-steph-dev.vercel.app/",
  },
  {
    id: 10,
    img: work10,
    name: "SASS",
    category: "SASS/Boostrap",
    gitLab: "https://gitlab.com/stefantrenda/brainsterchallenges_stefantrendafilovskife7/-/tree/Challenge05-CSSFlex",
    demo: "https://css-flex-steph-dev.vercel.app/",
  },
  {
    id: 11,
    img: work11,
    name: "SASS 2",
    category: "SASS/Boostrap",
    gitLab: "https://gitlab.com/stefantrenda/brainsterchallenges_stefantrendafilovskife7/-/tree/Challenge04-CSSFlex_Sass",
    demo: "https://sass-flex-steph-dev.vercel.app/",
  },
  {
    id: 12,
    img: work12,
    name: "CSS",
    category: "SASS/Boostrap",
    gitLab: "https://gitlab.com/stefantrenda/brainsterchallenges_stefantrendafilovskife7/-/tree/Challenge03-CSSFlex",
    demo: "https://css-steph-dev.vercel.app/",
  },
  {
    id: 13,
    img: work13,
    name: "CSS",
    category: "SASS/Boostrap",
    gitLab: "https://gitlab.com/stefantrenda/brainsterchallenges_stefantrendafilovskife7/-/tree/Challenge01-HTML",
    demo: "https://html-steph-dev.vercel.app/",
  },
  {
    id: 14,
    img: work14,
    name: "ReactJS",
    category: "ReactJS",
    gitLab: "https://gitlab.com/stefantrenda/crud-todolist",
    demo: "https://crud-to-do-list-steph-dev.vercel.app/",
  },
  {
    id: 15,
    img: work15,
    name: "ReactJS",
    category: "ReactJS",
    gitLab: "https://gitlab.com/stefantrenda/BrainsterProjects_StefanTrendafilovski_FE7/-/tree/Project03",
    demo: "https://jadi-zdravo-stefant.netlify.app/",
  },
  {
    id: 16,
    img: work16,
    name: "JavaScript",
    category: "JavaScript",
    gitLab: "https://gitlab.com/stefantrenda/BrainsterProjects_StefanTrendafilovski_FE7/-/tree/Project02",
    demo: "https://stefantrendafilovski-streetartist.netlify.app/",
  },
  {
    id: 17,
    img: work17,
    name: "SASS/Boostrap",
    category: "SASS/Boostrap",
    gitLab: "https://gitlab.com/stefantrenda/BrainsterProjects_StefanTrendafilovski_FE7/-/tree/Project01",
    demo: "https://stefan-braisterlab.netlify.app/index.html",
  },

];

export const workNavs = ["All", "ReactJS", "JavaScript", "SASS/Boostrap"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Kumanovo, Macedonia",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "stefantrenda@gmail.oom",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+389 70 227 971",
  },
];
