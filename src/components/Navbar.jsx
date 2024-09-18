import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from 'react-scroll';

import pic from "../../public/gem.jfif";

const Navbar = () => {
    const [hembuger, setHembuger] = useState(false);

    const navItems = [
        { id: 2, text: "About" },
        { id: 3, text: "Portfolio" },
        { id: 4, text: "Contact Me" }
    ];

    return (
        <>
            <div className='max-w-screen-2xl px-4 bg-[#1C1F2A] fixed  top-0 md:px-20 container mx-auto'>
                <div className='flex justify-between mt-2 md:mt-2'>
                    {/* Logo and Name */}
                    <div className="first flex gap-4">
                        <img className='w-12 h-12 rounded-full' src={pic} alt="" />
                        <div className='flex flex-col'>
                            <div>
                                <span className='text-[#5FC3E4] font-bold text-2xl'>S</span>
                                <span className='text-[#EDEDED]'>hiva</span>
                            </div>
                            <p className='text-[#74F0E3]'>Web Developer</p>
                        </div>
                    </div>

                    {/* Desktop Navbar */}
                    <div className="hidden md:flex second">
                        <ul className='flex space-x-8 cursor-pointer'>
                            {navItems.map(({ id, text }) => (
                                <li key={id}>
                                    <Link
                                        to={text}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        activeClass='active'
                                        className='text-[#EDEDED] hover:text-[#5FC3E4] transition-colors duration-300'
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile Hamburger Icon */}
                    <div onClick={() => setHembuger(!hembuger)} className='md:hidden'>
                        {hembuger ? <VscChromeClose className='text-[#5FC3E4]' /> : <RxHamburgerMenu className='text-[#5FC3E4]' />}
                    </div>
                </div>

                {/* Mobile Navbar */}
                {hembuger && (
                    <div className="md:hidden  bg-[#a5adca]">
                        <ul className='flex h-screen justify-center items-center flex-col space-y-8 cursor-pointer'>
                            {navItems.map(({ text, id }) => (
                                <li key={id}>
                                    <Link
                                        onClick={() => setHembuger(!hembuger)}
                                        to={text}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        activeClass='active'
                                        className='text-[#EDEDED] hover:text-[#5FC3E4] transition-colors duration-300'
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;
