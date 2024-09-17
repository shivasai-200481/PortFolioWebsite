import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
    return (
        <>
            <hr />
            <footer>
                <div className="foot max-w-screen-2xl px-4  md:px-20 container mx-auto my-12">
                    <div className=' flex flex-col gap-4 justify-center items-center'>
                        <p className='font-extrabold'>Available On</p>
                        <div className='flex gap-4 '>
                            <BsInstagram />
                            <FaLinkedinIn />
                            <FaGithub />
                        </div>
                        <div className='border border-slate-600 w-[350px]  rounded-ee-lg'></div>
                    </div>


                </div>
                
            </footer>
        </>
    )
}

export default Footer
