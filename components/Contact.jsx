import Image from 'next/image';
import React from 'react';
import contactImg from '../public/assets/contact.jpg';
import { Link } from 'react-scroll';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import SocialLinks from './SocialLinks';

const Contact = () => {
    return (
        <div id="Contact" className='w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <p className="text-xl tracking-widest uppercase text-blue-600">Contact</p>
                <h2 className="py-4">Get In Touch</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-gray-600 rounded-xl p-4">
                        <div className="lg:p-4 h-full">
                            <div>
                                <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={contactImg} alt="/" />
                            </div>
                            <div>
                                <h2 className="py-2">Akhil Anumula</h2>
                                <p className="">Full-stack Developer</p>
                                <p className="py-4">I am available for immediate joining. Contact me and let's talk.</p>
                            </div>
                            <div>
                                <p className="uppercase pt-8">connect with me</p>
                                <div className="flex items-center justify-between py-4">
                                    <SocialLinks />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3 w-full h-auto shadow-lg shadow-gray-600 rounded-xl lg:p-4">
                        <div className='p-4'>
                            <form action='https://getform.io/f/89ec7810-eb6a-4d95-917b-2d7d87a0eb8f' method="POST">
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label className='uppercase text-sm font-bold py-2 px-2'>Name</label>
                                        <input type="text" name='name' className='border-2 bg-transparent focus:outline-none rounded-lg p-3 flex border-gray-300' />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className='uppercase text-sm font-bold py-2 px-2'>Phone Number</label>
                                        <input type="text" name='number' className='border-2 bg-transparent focus:outline-none rounded-lg p-3 flex border-gray-300' />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm font-bold py-2 px-2'>Email</label>
                                    <input type="email" name='email' className='border-2 bg-transparent focus:outline-none rounded-lg p-3 flex border-gray-300' />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm font-bold py-2 px-2'>Subject</label>
                                    <input type="text" name='subject' className='border-2 bg-transparent focus:outline-none rounded-lg p-3 flex border-gray-300' />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm font-bold py-2 px-2'>Message</label>
                                    <textarea name='message' className='border-2 bg-transparent focus:outline-none rounded-lg p-3 border-gray-300' rows={8} ></textarea>
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-4 font-bold'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center pt-12'>
                    <Link to="Home" smooth={true} duration={800} >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp size={30} className="text-[#5651e5]" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact