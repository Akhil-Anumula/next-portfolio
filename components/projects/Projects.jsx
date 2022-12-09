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
import ProjectItem from '../projects/ProjectItem'

const Projects = () => {
  const projects = [
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
          {projects.reverse().map(({ id, src, title, techUsed }) => {
            return (
              <ProjectItem title={title} bgImg={src} id={id} techUsed={techUsed} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects