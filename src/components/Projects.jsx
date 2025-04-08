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
        <>
            <div className="max-w-screen-2xl px-4 md:px-20 my-10 container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">🚀 Projects</h2>

                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition duration-300"
                        >
                            <h3 className="text-xl font-semibold text-blue-600">{project.name}</h3>
                            <p className="text-gray-600 mt-2">{project.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Projects;
