import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';
import nuuk from '../../public/assets/projects/nuuk.png'
import ticTacToe from '../../public/assets/projects/ticTacToe.png'
import shoplane from '../../public/assets/projects/shoplane.png'
import ipl from '../../public/assets/projects/ipl.png'
import movies from '../../public/assets/projects/movies.png'
import todo from '../../public/assets/projects/todo.png'
import weatherApp from '../../public/assets/projects/weatherApp.png'
import restaurant from '../../public/assets/projects/restaurant.png'
import bank from '../../public/assets/projects/bank.png'
import metaverse from '../../public/assets/projects/metaverse.png'

function ProjectDetails() {
  const router = useRouter();
  const projectId = router.query.project;

  const projects = [
    {
      id: 1,
      src: nuuk,
      title: "Nuuk Website",
      techUsed: ["HTML", "CSS"],
      description: "This is a commercial website built using pure HTML5 and CSS3 hard-coded. It is a fully responsive website and is compatible on various devices.",
      demo: "https://akhil-anumula.github.io/Nuuk-Website/",
      code: "https://github.com/Akhil-Anumula/Nuuk-Website"
    },
    {
      id: 2,
      src: ticTacToe,
      title: "Tic-Tac-Toe",
      techUsed: ["HTML", "CSS", "Javascript"],
      description: "Implemented a Tic-Tac-Toe game using HTML5, CSS3 and Javascript. This web app is surely to showcase the logical programming abilities. One of its great feature is that it provides hovering effects as to which player's turn is next.",
      demo: "https://akhil-anumula.github.io/Tic-tac-toe/",
      code: "https://github.com/Akhil-Anumula/Tic-tac-toe"
    },
    {
      id: 3,
      src: shoplane,
      title: "Shop-Lane E-Commerce",
      techUsed: ["HTML", "CSS", "Javascript"],
      description: "Designed and developed a responsive E-Commerce website in HTML5, CSS3, and JavaScript with an add to cart option which uses local storage to keep track of how many items are to be displayed during checkout. It has a beautiful Carousal Image section, all the data is dynamic and is fetched by making AJAX calls.",
      demo: "https://akhil-anumula.github.io/Shopping-App/",
      code: "https://github.com/Akhil-Anumula/Shopping-App"
    },
    {
      id: 4,
      src: ipl,
      title: "Ipl Website",
      techUsed: ["HTML", "CSS", "Javascript"],
      description: "Designed and developed responsive IPl website in HTML5, CSS3, and JavaScript with an add player functionality which uses local storage for all teams and player related data",
      demo: "https://akhil-anumula.github.io/ipl-project/",
      code: "https://github.com/Akhil-Anumula/ipl-project"
    },
    {
      id: 5,
      src: movies,
      title: "Movie Search Engine",
      techUsed: ["React"],
      description: "Implemented a movie search engine which fetches the data from an API call from IMDB. All the data is dynamic and will change with the input fields.",
      demo: "https://navbar-ffdf7.web.app/",
      code: "https://github.com/Akhil-Anumula/movies-grid"
    },
    {
      id: 6,
      src: todo,
      title: "Todo App",
      techUsed: ["React", "Firebase", "Tailwind CSS"],
      description: "Implemented a full stack Todo App with CRUD functionality. It is designed in React with Tailwind CSS and it uses Firebase's Firestore database and is compatible for any device.",
      demo: "https://todo-app-5dda6.web.app/",
      code: "https://github.com/Akhil-Anumula/todo-firebase"
    },
    {
      id: 7,
      src: weatherApp,
      title: "Weather App",
      techUsed: ["NextJs", "OpenWeatherMap API", "Tailwind CSS"],
      description: "Built and deployed a Weather App which displays real time data fetched from OpenWeatherMap API. It is designed with Tailwind CSS on Next-Js and is fully responsive.",
      demo: "https://nextjs-weather-app-three.vercel.app/",
      code: "https://github.com/Akhil-Anumula/nextjs-weather-app"
    },
    {
      id: 8,
      src: restaurant,
      title: "Restaurant Website",
      techUsed: ["React", "React-Scroll", "Image-Gallery"],
      description: "Designed and developed a fully responsive Modern Restaurant Website in React with smooth transitions and showcases a variety of media and image gallery.",
      demo: "https://gericht-restaurant-123.netlify.app/",
      code: "https://github.com/Akhil-Anumula/restaurant-react"
    },
    {
      id: 9,
      src: bank,
      title: "Banking Website",
      techUsed: ["React", "Tailwind CSS"],
      description: "Implemented a Modern Banking website inspired from a Figma Design. It is designed in React using Tailwind CSS and has many sections to showcase modern banking components including user testimonials..",
      demo: "https://modern-bank-website-123.netlify.app/",
      code: "https://github.com/Akhil-Anumula/modern-bank-website"
    },
    {
      id: 10,
      src: metaverse,
      title: "Metaverse Website",
      techUsed: ["NextJs", "Framer Motions", "Tailwind CSS"],
      description: "Designed and developed a Modern Metaverse Clone Website inspired from a Figma Design. It is designed with Tailwind CSS on Next-Js and has an amazing transitions implemented using Framer Motions on a variety of images and components.",
      demo: "https://akhil-metaverse.netlify.app/",
      code: "https://github.com/Akhil-Anumula/metaverse"
    }
  ]
  const reqProject = new Object(projects.find(item => projectId == item.id));
  return (
    <div className='w-full'>
      <div className="relative w-screen h-[30vh] lg:h-[40vh]">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10" />
        <Image className='absolute z-1' fill object-fit='cover' src={reqProject.src} alt={`${reqProject.title}-Img`} />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>{reqProject.title}</h2>
          <h3 className='flex ' >{reqProject.techUsed.map((tech, i) => (
            <p key={`techname${i}`} className='text-gray-400 py-2 px-2 flex items-center font-semibold'>
              {tech}
            </p>
          ))}</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 ">
          <p>Project</p>
          <h2>Overview</h2>
          <p className='pt-4'>{reqProject.description}</p>
          <a href={reqProject.demo} target="_blank" rel="noreferrer"><button className='px-8 py-2 mt-4 mr-8'>Demo</button></a>
          <a href={reqProject.code} target="_blank" rel="noreferrer"><button className='px-8 py-2 mt-4'>Code</button></a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-md shadow-gray-400 rounded-xl p-4'>
          <div className="p-2">
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-2 md:grid-cols-1'>

              {reqProject.techUsed.map((tech, i) => (
                <p key={`tech${i}`} className='text-gray-600 py-2 flex items-center overflow-auto'>
                  <RiRadioButtonFill className='pr-1' /> {tech}
                </p>
              ))}

            </div>
          </div>
        </div>
        <Link href="/#Projects">
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectDetails;