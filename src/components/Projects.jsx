import React from 'react';

const projects = [
    {
        name: 'E-commerce Store',
        link: 'https://ecomweb200481.netlify.app/',
        description: 'A full-stack online store with authentication and payment',
    },
    {
        name: 'URL Shortener',
        link: 'https://github.com/shivasai-200481/URL-shortner',
        description: 'A simple tool to shorten long URLs',
    },
    // add more projects here
];

const Projects = () => {
    return (
        <section name='Projects' className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-16">
            <div className="max-w-screen-2xl px-4 md:px-20 container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 ">
                    🚀 Projects
                </h2>

                <div className="grid gap-10 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 rounded-2xl shadow-xl bg-white/60  border border-white/30 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
                        >
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
