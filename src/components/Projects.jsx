import React from 'react';
import BooksyWeb from '../../public/BookWeb.jpg'
import URLWEB from '../../public/urlWeb.jpg'
import Ecom from '../../public/Ecom.jpg'

const projects = [
    {
        name: 'Booksy - Your Favorite Online BookStore',
        link: 'https://booksywebclient.onrender.com/',
        description: 'A full-stack Book online store with JWT authentication.',
        image: BooksyWeb
    },
    {
        name: 'E-commerce Store',
        link: 'https://ecomweb200481.netlify.app/',
        description: 'An online store to buy clothes.',
        image: Ecom
    },
    {
        name: 'URL Shortener',
        link: 'https://url-shortner-website-4t31.onrender.com',
        description: 'A simple tool to shorten long URLs with Jwt Authentication and to track analytics.',
        image: URLWEB
    },
    // add more projects here
];

const Projects = () => {
    return (
        <section name='Projects' className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-16">
            <div className="max-w-screen-2xl px-4 md:px-20 container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    🚀 Projects
                </h2>

                <div className="grid gap-10 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 rounded-2xl shadow-xl bg-white/60 border border-white/30 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-60 object-contain rounded-xl mb-4 border bg-white"
                            />

                            <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                                {project.name}
                            </h3>
                            <p className="text-gray-700">{project.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
