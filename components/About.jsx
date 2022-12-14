import Image from 'next/image'
import React from 'react'
import { Link } from 'react-scroll';
import profile from "../static/profile.jpg"

const About = () => {
    return (
        <div id='About' className='w-full md:h-screen p-4 flex items-center py-16 bg-gradient-to-b from-gray-800 to-black '>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-blue-600'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-white opacity-40'>
                        # I am not your normal developer
                    </p>
                    <br />
                    <p className='py-2 text-white opacity-70'>
                        I'm a B.Tech Graduate in Computer Science and Engineering from Vaagdevi Engineering College-Warangal.
                        During my final year's academic projects, my team selected a project which is to develop
                        a web app that facilitates its users to book a vehicle for transportation of their goods.
                        The web app has a feature that led users to choose their desired vehicle as per it's size
                        and has a status tracking option. That's when I realized I have Passion for Web Development.
                        <br />
                        <br />
                        I have an year's experience in basic web technologies and built many React projects
                        and I'm familiar with backend too. I have a created many REST APIs using Express-Js
                        and I have strong knowledge to work with NodeJs.
                    </p>
                    <p className='py-2 text-white opacity-40 underline cursor-pointer'> <Link to='Projects' duration={800} smooth={true} >Check out some of my latest projects.</Link></p>
                </div>
                <div className='w-full h-auto m-auto shadow-md shadow-gray-600 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image className='rounded-xl'src={profile} alt="profile"/>
                </div>
            </div>
    </div>
    )
}

export default About