import { MdOutlineWeb } from "react-icons/md";
import { FaLaptopCode, FaMobileAlt, FaCamera   } from "react-icons/fa";
import testimonial1 from "../assets/avatar.webp"
import { FaBriefcase, FaGraduationCap  } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import Digital from "../assets/Digital.png"
import Clothify from "../assets/Clothify.png"
import Nike from "../assets/Nike.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faBriefcase,
//   faSchool,
//   faStar,
// } from '@fortawesome/free-solid-svg-icons';

const workIcon = {
  icon:  <FaBriefcase/>,
  iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};
const schoolIcon = {
  icon: <FaGraduationCap/>,
  iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
};
const starIcon = {
  icon: <FaRegStar/>,
  iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
};

export const service = [
    {
        title:"Web Design",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <MdOutlineWeb/>
    },
    {
        title:"Web Development",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <FaLaptopCode/>
    },
    {
        title:"Mobile Apps",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <FaMobileAlt/>
    },
    {
        title:"Photography",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <FaCamera/>
    },
]

export const testimonials = [
    {
        name:"Aman Sharma",
        para:"Rohit was hired to create a corporate identity. We were very pleased with the work",
        img: testimonial1
    },
    {
        name:"Aman Sharma",
        para:"Rohit was hired to create a corporate identity. We were very pleased with the work",
        img: testimonial1
    },
   
]

export const timeline = [
    {
      icon: workIcon,
      date: '2011 - present',
      title: 'Creative Director',
      subtitle: 'Miami, FL',
      desc: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    },
    {
      icon: workIcon,
      date: '2010 - 2011',
      title: 'Art Director',
      subtitle: 'San Francisco, CA',
      desc: 'Creative Direction, User Experience, Visual Design, SEO, Online Marketing',
    },
    {
      icon: workIcon,
      date: '2008 - 2010',
      title: 'Web Designer',
      subtitle: 'Los Angeles, CA',
      desc: 'User Experience, Visual Design',
    },
    {
      icon: workIcon,
      date: '2006 - 2008',
      title: 'Web Designer',
      subtitle: 'San Francisco, CA',
      desc: 'User Experience, Visual Design',
    },
    {
      icon: schoolIcon,
      date: 'April 2013',
      title: 'Content Marketing for Web, Mobile and Social Media',
      subtitle: 'Online Course',
      desc: 'Strategy, Social Media',
    },
    {
      icon: schoolIcon,
      date: 'November 2012',
      title: 'Agile Development Scrum Master',
      subtitle: 'Certification',
      desc: 'Creative Direction, User Experience, Visual Design',
    },
    {
      icon: schoolIcon,
      date: '2002 - 2006',
      title: 'Bachelor of Science in Interactive Digital Media Visual Imaging',
      subtitle: 'Bachelor Degree',
      desc: 'Creative Direction, Visual Design',
    },
    { icon: starIcon },
  ];

export const projects = [
    {
      title: "Digital Marketing",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
      techStack: ["Next.js", "MongoDB", "Stripe", "Tailwind"],
      link: "https://business420.netlify.app/",
      github: 'https://github.com/rohitsingh93300/YTBusiness',
      image: Digital, // Replace with your project screenshot
    },
    {
      title: "Nike Shoes",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
      techStack: ["React", "Node.js", "MongoDB", "shadcn UI"],
      link: "https://nike-topaz-delta.vercel.app/",
      github: 'https://github.com/rohitsingh93300/YT-Nike',
      image: Nike, // Replace with your project screenshot
    },
    {
      title: "Clothify",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
      techStack: ["Next.js", "MongoDB", "Clerk Authentication"],
      link: "https://clothify-two.vercel.app/",
      github: 'https://github.com/rohitsingh93300/YT-Clothify',
      image: Clothify, // Replace with your project screenshot
    },
  ];