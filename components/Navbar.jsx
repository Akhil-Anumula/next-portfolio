import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import SocialLinks from './SocialLinks';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Skills'
        },
        {
            id: 4,
            link: 'Projects'
        },
        {
            id: 5,
            link: 'Contact'
        }
    ]

    const handleNav = () => {
        setNav(!nav)
    };
    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, []);

    return (
        <div className={shadow ? 'fixed w-full h-20 bg-gradient-to-b from-black to-gray-900 text-white shadow-xl z-[100]' : 'fixed w-full h-20 bg-transparent text-white z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <div>
                    <Link to='Home'>
                        <h1 className='text-5xl font-signature ml-2 text-blue-700 tracking-wide cursor-pointer'>Akhil</h1>
                    </Link>
                </div>
                <div>
                    <ul className='hidden md:flex text-white opacity-75'>

                        {links.map(({ id, link }) => {
                            return (<li key={id} className='ml-10 text-sm uppercase hover:text-blue-500'><Link to={link} smooth={true} duration={800}>{link}</Link></li>)
                        })}

                    </ul>
                    <div onClick={handleNav} className="md:hidden ">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div onClick={handleNav} className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black duration-300 ease-in" : ""}>
                <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-gray-900 p-10 ease-in duration-700" : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <div>
                                <h1 className='text-5xl font-signature ml-2 tracking-wide text-blue-700 opacity-75 font-bold'>Akhil</h1>
                            </div>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Let's build something legendary together</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase text-white opacity-75'>

                            {links.map(({ id, link }) => {
                                return (<li key={id} className='py-4 text-sm'><Link onClick={() => setNav(false)} to={link} smooth={true}>{link}</Link></li>)
                            })}
                        </ul>
                        <div className='pt-20'>
                            <p className='uppercase font-extrabold tracking-widest text-blue-700 '>Let's Connect</p>
                            <div className='flex items-center justify-evenly my-8 w-full'>
                                <SocialLinks />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

