import React from 'react'
import mongodb from '../../public/mongodb.jpg'
import node from '../../public/Node.png'
import python from '../../public/python.png'
import react from '../../public/reactjs.png'
import tail from '../../public/tailwind.jfif'
import java from '../../public/java.jpg'
const Portfolio = () => {
    const cardItems = [
        {
            id: 1,
            logo: mongodb,
            name: "Mongo Db"
        },
        {
            id: 2,
            logo: node,
            name: "Node Js"
        },
        {
            id: 3,
            logo: python,
            name: "Python"
        },
        {
            id: 4,
            logo: react,
            name: "React Js"
        },
        {
            id: 5,
            logo: tail,
            name: "Tailwind Css"
        },
        {
            id: 6,
            logo: java,
            name: "Java"
        },

    ]

    return (
        <>
        <hr />
            <div name = 'Portfolio' className='max-w-screen-2xl px-4  md:px-20 container mx-auto'>
                <div>
                    <h1 className='font-bold text-3xl' >PortFolio</h1>
                    <p className='font-bold text-red-600 text-2xl mt-2' >Skills</p>
                    <div className="card flex flex-wrap justify-center  gap-8 my-12  ">
                        {
                            cardItems.map(({ id, logo, name }) => (

                                <div key={id} className=' border border-slate-300  w-[400px] md:w-[350px]' >

                                    <div className='flex flex-col items-center  gap-2 ' >
                                        <img className='h-36 w-36 rounded-full ' src={logo} alt="" />
                                        <p>{name}</p>
                                    </div>

                                </div>


                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
