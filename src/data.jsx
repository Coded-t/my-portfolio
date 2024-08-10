

import { nanoid } from 'nanoid';
import {  FaJs, FaReact } from 'react-icons/fa';
import { SiPython } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'Python,Java,',
    icon: <SiPython className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in Python,Django,FastAPI,Java, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    
    text: 'Expertise in Javascript,Nodejs,Mongodband React for building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'Flutter',
    icon: <SiFlutter className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in Flutter, developing efficient and interactive Mobile Application with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img:  'harmony.png' ,   //'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/Coded-t/Harmony-Music-main',
    title: 'Harmony Music App',
    text: 'A Music Application developed using flutter',
  },
  {
    id: nanoid(),
    img: 'x clone.png', // 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
   // url: 'https://react-projects.netlify.app/',
   // github: 'https://github.com/john-smilga',
    title: 'X clone',
    text: 'X clone using React as front end and nodejs and javascript as backend',
  },
  {
    id: nanoid(),
    img:  '11.png' ,  // 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
   // url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/Coded-t/tours',
    title: 'A tour website ',
    text: 'A Tour website',
  },
];
