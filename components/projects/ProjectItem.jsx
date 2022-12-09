import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({ title, bgImg, id, techUsed }) => {
  return (
    <Link key={`link${id}`} href={`/project/${id}`} >
      <div key={`div${id}`} className="relative flex flex-col items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
        <Image className='rounded-xl group-hover:opacity-10' src={bgImg} alt={`${title}-img`} />
        <div className="hidden lg:group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <h3 className="text-2xl text-white tracking-widest text-center">{title}</h3>
          <p className="pb-4 pt-2 text-white text-center opacity-75">{techUsed}</p>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">More Info</p>
        </div>
        <div className="lg:hidden flex text-center items-center justify-center">
          <p className='text-bold pt-4'>{title}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProjectItem;