import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from 'react-scroll';

import pic from "../../public/gem.jfif"
const Navbar = () => {
    const [hembuger, setHembuger] = useState(false)


    const navItems = [

        {
            id: 2,
            text: "About"
        },
        {
            id: 3,
            text: "Portfolio"
        },
        {
            id: 4,
            text: "Contact Me"
        }
    ]
    return (
        <>
            <div className='max-w-screen-2xl px-4  bg-white sticky top-0 md:px-20 container mx-auto'>
                <div className='flex justify-between mt-2 md:mt-2 '>

                    <div className="first flex gap-4">
                        <img className='w-12 h-12 rounded-full' src={pic} alt="" />
                        <div className='flex flex-col '>
                            <div><span className='text-purple-700 font-bold text-2xl ' >S</span><span  >hiva</span></div>
                            <p>Web Developer</p>
                        </div>
                    </div>
                    {/* Desktop Navbar */}
                    <div className=" hidden md:flex second ">
                        <ul className='flex space-x-8 hover:cursor-pointer '>
                            {
                                navItems.map(({ id, text }) => (
                                    <div key={id} >
                                        <li>
                                            <Link

                                                to={text}
                                                smooth={true}
                                                offset={-100}
                                                duration={500}
                                                activeClass='active'

                                            >{text}</Link>
                                        </li>
                                    </div>

                                ))
                            }

                        </ul>
                    </div>
                    <div onClick={() => (setHembuger(!hembuger))} className='md:hidden' >{hembuger ? <VscChromeClose /> : <RxHamburgerMenu />}  </div>
                </div>
                {/* Mobile Navbar */}
                {hembuger && (

                    <div className=" md:hidden  h-screen flex flex-col justify-center items-center    ">
                        <ul className='  space-y-4  '>
                            {
                                navItems.map(({ text, id }) => (
                                    <div key={id} >
                                        <li>
                                            <Link
                                                onClick={() => (setHembuger(!hembuger))}
                                                to={text}
                                                smooth={true}
                                                offset={-70}
                                                duration={500}
                                                activeClass='active'

                                            >{text}</Link>
                                        </li>
                                    </div>

                                ))
                            }
                        </ul>
                    </div>
                )}

            </div>
        </>
    )
}

export default Navbar
