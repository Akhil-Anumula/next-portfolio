import React from 'react'
import SocialLinks from './SocialLinks'

const Main = () => {
    return (
        <div name='Home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">Let's build something together</p>
                    <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Akhil</span></h1>
                    <h1 className='py-2 text-gray-700'>
                        A Full-Stack Web Developer
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                        I'm a Full-Stack MERN Developer specializing in building (and
                        occasionally designing) exceptional digital experiences. Currently,
                        I'm focused on building responsive Front-End Web applications while
                        learning Back-End technologies.
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main