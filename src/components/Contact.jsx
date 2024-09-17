import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';


const Contact = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {

        try {
            await axios.post("https://getform.io/f/bdrywpeb",data)
            toast.success("Your message has been sent succesfully!")


        } catch (error) {
            toast.error("There's an error please try again later!")

        }
    }
    return (
        <>
            <hr />
            <div name='Contact Me' className=' max-w-screen-2xl px-4  md:px-20 my-10  container mx-auto'>
                <div className='space-y-4' >
                    <h1 className='font-bold text-3xl'>Contact me</h1>
                    <p>Complete the form below to get in touch with me.</p>


                    <div className='flex justify-center ' >
                        <form
                            // action="https://getform.io/f/bdrywpeb"
                            // method="POST"
                            className='bg-violet-200 w-96 px-8 py-6 space-y-4 rounded-xl' onSubmit={handleSubmit(onSubmit)} >
                            <h2 className='font-bold  text-2xl'>Send your message</h2>
                            <div>
                                <label htmlFor="name" className='block'>Full name</label>
                                <input {...register("name", { required: true })} type="text" name="name" placeholder='Enter your name' className=' px-4 py-2  focus:outline-none w-full border border-gray-300 rounded-xl ' />
                                {errors.name && <span>This field is required</span>}

                            </div>
                            <div>
                                <label htmlFor="name" className='block'>Email Address</label>
                                <input {...register("email", { required: true })} type="text" name="email" placeholder='Enter your Email' className=' px-4 py-2  focus:outline-none w-full border border-gray-300 rounded-xl ' />
                                {errors.email && <span>This field is required</span>}

                            </div>
                            <div>
                                <label htmlFor="name" className='block'>Message</label>
                                <textarea {...register("message", { required: true })} type="text" name="message" placeholder='Type your message' className=' px-4 py-2  focus:outline-none w-full border border-gray-300 rounded-xl ' />
                                {errors.message && <span>This field is required</span>}

                            </div>
                            <button type='submit' className='bg-black text-white py-2 px-4 rounded-2xl mt-1'>
                                Send Details
                            </button>




                        </form>
                    </div>


                </div>
            </div>
        </>

    )
}

export default Contact