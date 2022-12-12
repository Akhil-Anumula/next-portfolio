import React from 'react'
import SocialLinks from './SocialLinks'

const Main = () => {
    return (
        <div name="home" className='h-screen w-full text-center '>
            <div className='max-w-[1240px] mx-auto flex items-center justify-center w-full h-full p-2'>
                <div>
                    <p className="uppercase text-sm tracking-widest opacity-70">Let's build something together</p>
                    <h1 className='py-4'>Hi, I'm <span className='text-[#5651e5]'>Akhil</span></h1>
                    <h1 className='py-2'>
                        A Full-Stack Web Developer
                    </h1>
                    <p className="py-4 max-w-[70%] m-auto opacity-50">
                        I'm a Full-Stack MERN Developer specializing in building (and
                        occasionally designing) exceptional digital experiences. Currently,
                        I'm focused on building responsive Front-End Web applications while
                        learning Back-End technologies.
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4 text-white">
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main