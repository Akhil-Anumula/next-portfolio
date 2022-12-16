import Image from 'next/image';
import React from 'react';
import htmlImg from '../public/assets/skills/html.png';
import cssImg from '../public/assets/skills/css.png';
import javascriptImg from '../public/assets/skills/javascript.png';
import react from '../public/assets/skills/react.png';
import nextjs from '../public/assets/skills/nextjs.png';
import mongodb from '../public/assets/skills/mongo.png';
import firebase from '../public/assets/skills/firebase.png';
import nodejs from '../public/assets/skills/node.png';
import tailwind from '../public/assets/skills/tailwind.png';
import github from '../public/assets/skills/github.png';

function Skills() {
    const skills = [{
        id: 1,
        src: htmlImg,
        title: 'HTML',
        style : "shadow-orange-500"
    },
    {
        id: 2,
        src: cssImg,
        title: 'CSS',
        style : "shadow-blue-500"
    },
    {
        id: 3,
        src: javascriptImg,
        title: 'JavaScript',
        style : "shadow-yellow-500"
    },
    {
        id: 4,
        src: react,
        title: 'React',
        style : "shadow-blue-600"
    },
    {
        id: 5,
        src: nextjs,
        title: 'Next.Js',
        style : "shadow-white"
    },
    {
        id: 6,
        src: mongodb,
        title: 'MongoDB',
        style : "shadow-emerald-500"
    },
    {
        id: 7,
        src: firebase,
        title: 'Firebase',
        style : "shadow-yellow-600"
    },
    {
        id: 8,
        src: nodejs,
        title: 'Node JS',
        style : "shadow-green-500"
    },
    {
        id: 9,
        src: tailwind,
        title: 'Tailwind CSS',
        style : "shadow-sky-400"
    },
    {
        id: 10,
        src: github,
        title: 'GitHub',
        style : "shadow-gray-400"
    }];
    return (
        <div id='Skills' className='w-full lg:h-screen p-4 bg-gradient-to-b from-black via-black to-gray-800'>
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className='text-xl tracking-widest uppercase text-blue-600'>Skills</p>
                <h2 className='py-4'>What I can do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {skills.map(({ id, src, title,style }) => {
                        return (
                            <div key={id} className={`p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 ${style}`}>
                                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                    <div className="m-auto">
                                        <Image style={{width:64,height:64}} src={src} alt={`${title}-img`} />
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <h3 className='text-white font-bold ' >{title}</h3>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    );
}

export default Skills;