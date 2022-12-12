import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    <FaLinkedinIn />
                </>),
            href: 'https://www.linkedin.com/in/akhil-anumula/',
        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub />
                </>),
            href: 'https://github.com/Akhil-Anumula'

        },
        {
            id: 3,
            child: (
                <>
                    <AiOutlineMail />
                </>),
            href: 'mailto:akhil.anumula23@gmail.com'

        },
        {
            id: 4,
            child: (
                <>
                    <BsFillPersonLinesFill />
                </>),
            href: '/assets/AKHIL_ANUMULA_Resume.pdf',
            download: true
        }
    ]
    return (
        <>
            {links.map(({ id, child, href, download }) => (
                <a href={href} download={download} target='_blank' rel='noreferrer' key={`a${id}`} >
                    <div key={id} className='bg-neutral-900  rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in duration-300'>
                        {child}
                    </div>
                </a>
            ))}
        </>
    )
}

export default SocialLinks