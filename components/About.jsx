import React from 'react'
import { Link } from 'react-scroll'

const About = () => {
    return (
        <div name="About" className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>
                        # I am not your normal developer
                    </p>
                    <br />
                    <p className='py-2 text-gray-600'>
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
                    <p className='py-2 text-gray-600 underline cursor-pointer'> <Link to='Projects' duration={800} smooth={true} >Check out some of my latest projects.</Link></p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <img className='rounded-xl'
                        src="/static/profile.jpg" alt="profile" />
                </div>
            </div>
        </div>
    )
}

export default About