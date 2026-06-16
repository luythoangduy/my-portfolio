import React from "react";
import Image from 'next/image';
import projects from '../../../data/projects.json';
import CustomLink from "@/app/components/CustomLink";

export default function Projects() {
    return (
        <div className="w-full mb-10">
            <div className="font-bold text-xl md:text-3xl mb-10">
                Projects
            </div>
            {projects.projects.map(item => (
                <ProjectCard key={item.id} project={item}/>
            ))}
        </div>
    );
}



function ProjectCard({project}) {
    const {id, title, description, href} = project;

    const cardContent = (
        <>

            <div className="p-4 flex flex-col justify-between flex-1">
                <div className="flex items-center mb-2">
                    <h2 className="text-xl font-semibold mr-3">{title}</h2>
                    {project.status && (
                        <span className={`text-xs font-medium px-2.5 py-0.5 rounded border ${project.status === 'Completed' ? 'bg-green-100 text-green-800 border-green-200' : 'bg-blue-100 text-blue-800 border-blue-200'}`}>
                            {project.status}
                        </span>
                    )}
                </div>
                {description && description.length > 0 && (
                    <div className="text-gray-600 mb-4">
                        {description.map((desc, index) => (
                            <p key={index} className="mb-2">{desc}</p>
                        ))}
                    </div>
                )}
                <p className="text-gray-500 flex justify-end text-md bold">
                    {Object.entries(href).map(([key, value]) => (
                        <CustomLink href={value} key={key}>[{key}]</CustomLink>
                    ))}
                </p>
            </div>
        </>
    );

    return (
        <div
            className="block relative mb-6 bg-amber-50 hover:bg-amber-100 rounded-lg shadow-md hover:shadow-lg transition">
            {cardContent}
        </div>
    );
}