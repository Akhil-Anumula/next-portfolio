import React from 'react'
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
import Image from 'next/image'
import Link from 'next/link'

function Projects() {
  const projectsList = [
    {
      id: 1,
      src: nuuk,
      title: "Nuuk Website",
      techUsed: "HTML and CSS"
    },
    {
      id: 2,
      src: ticTacToe,
      title: "Tic-Tac-Toe",
      techUsed: "HTML,CSS and Javascript"
    },
    {
      id: 3,
      src: shoplane,
      title: "Shop-Lane E-Commerce",
      techUsed: "HTML,CSS and Javascript"
    },
    {
      id: 4,
      src: ipl,
      title: "Ipl Website",
      techUsed: "HTML,CSS and Javascript"
    },
    {
      id: 5,
      src: movies,
      title: "Movie Search Engine",
      techUsed: "React and IMDB API"
    },
    {
      id: 6,
      src: todo,
      title: "Todo App",
      techUsed: "React, Firebase and Tailwind CSS"
    },
    {
      id: 7,
      src: weatherApp,
      title: "Weather App",
      techUsed: "NextJs, OpenWeatherMap API and Tailwind CSS"
    },
    {
      id: 8,
      src: restaurant,
      title: "Restaurant Website",
      techUsed: "React, React-Scroll"
    },
    {
      id: 9,
      src: bank,
      title: "Banking Website",
      techUsed: "React and Tailwind CSS"
    },
    {
      id: 10,
      src: metaverse,
      title: "Metaverse Website",
      techUsed: "NextJs, Framer Motions and Tailwind CSS"
    }
  ]
  return (
    <div name="Projects" className='w-full' id='Projects'>
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">

          {projectsList.reverse().map((project, i) => {
            return (
              <Link key={`link${i}`} href={`/project/${project.id}`} >
              <div className="relative flex flex-col items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                  <Image className='rounded-xl group-hover:opacity-10' src={project.src} alt={`${project.title}-img`} priority/>
                  <div className="hidden lg:group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                    <h3 className="text-2xl text-white tracking-widest text-center">{project.title}</h3>
                    <p className="pb-4 pt-2 text-white text-center opacity-75">{project.techUsed}</p>
                    <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">More Info</p>
                  </div>
                  <div className="lg:hidden flex text-center items-center justify-center">
                    <p className='text-bold pt-4'>{project.title}</p>
                  </div>
              </div>
              </Link>
            )
          })}

        </div>
      </div>
    </div>
  )
};

export default Projects;