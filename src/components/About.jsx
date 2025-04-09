import React from 'react'
import myProfilePic from '../../public/myProfilePic.jpg'

import { ReactTyped } from "react-typed";


const About = () => {
    return (
        <>
            <div name='About' className='max-w-screen-2xl px-4 md:px-20 container mx-auto mt-28 mb-28 ' >
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
                            Hi, I'm Shiva — a passionate full-stack web developer focused on building clean, responsive, and user-friendly web applications. I specialize in frontend development using React.js and Tailwind CSS, and I'm also skilled on the backend with Node.js, Express.js, and MongoDB.

                            My projects reflect a strong balance between design and functionality,  I enjoy turning ideas into real, working products that are optimized for performance and usability.

                            Currently, I’m deepening my knowledge in backend development and  actively preparing for  placements. I'm always curious to learn, improve, and build meaningful web experiences.


                        </p>

                    </div>
                    <div className="right flex items-center justify-center md:justify-end mb-4 md:mt-0 md:w-1/2 order-1 md:order-2">
                        <div
                            className="h-[300px] w-[300px] rounded-full  bg-cover "
                            style={{ backgroundImage: `url(${myProfilePic})`,backgroundPosition:"Top" }}
                        >
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About
