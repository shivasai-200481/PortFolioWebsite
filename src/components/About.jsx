import React from 'react'
import personalImg from '../../public/personalImg.jpg'
import { SiSpringboot } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { ReactTyped } from "react-typed";


const About = () => {
    return (
        <>
            <div name = 'About' className='max-w-screen-2xl px-4 md:px-20 container mx-auto mt-28 mb-28 ' >
                <div className='flex md:justify-around md:flex-row  flex-col  '>
                    <div className="left md:w-1/2 order-2 md:order-1 ">
                        <span className='text-2xl font-bold'>Hello, I'm a </span>
                        {/* <span className='text-violet-600 text-2xl '>Programmer.</span> */}

                        <ReactTyped className='text-violet-600 text-3xl font-extrabold'

                            strings={[" Developer.", " Programmer."]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop={true}

                        />
                        <p className='text-justify'>
                            Hi, I'm Shiva, a passionate web developer with a solid foundation in HTML, CSS, JavaScript, React,  and backend technologies like Node.js. I enjoy creating responsive, user-friendly web applications and recently built a Spotify-like music player using these technologies. My approach to development combines creativity and functionality, ensuring seamless user experiences across all devices. I'm skilled in using Tailwind CSS to craft clean, modern interfaces with efficient styling.
                            Currently, I’m expanding my skills in advanced SQL and backend development while actively preparing for campus placements.
                        </p>
                        {/* working media Icons */}
                        <div className='  space-y-4 flex flex-col items-center md:place-items-start font-bold  mt-4 list-none' >
                            <p className='text-green-600 text-2xl'>Working On</p>
                            <ul className='flex gap-4 text-3xl  '>
                                <li className='hover:scale-110 duration-100 cursor-pointer'><SiSpringboot /></li>
                                <li className='hover:scale-110 duration-100 cursor-pointer'><SiDjango /> </li>
                                <li className='hover:scale-110 duration-100 cursor-pointer'><FaPython /> </li>
                                <li className='hover:scale-110 duration-100 cursor-pointer'><FaJava /></li>
                            </ul>


                        </div>
                    </div>
                    <div className="right flex items-center mb-4 md:mt-0 justify-center md:w-1/2 order-1 md:order-2  ">
                        <img className='h-[250px] w-[250px] rounded-full' src={personalImg} alt="" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default About
