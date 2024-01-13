"use client";
// components/Project.tsx
import React from "react";
import Image from "next/image";
import { Project } from "@prisma/client";
import Link from "next/link";
import RemoveBtn from "./RemoveProject";

interface ProjectProps {
    project: Project;
}
export default function ProjectCard({ project }: ProjectProps) {
    const isNew = project.createdAt > new Date(Date.now() - 1000 * 60 * 60 * 24 * 7);

    return (
        <div>
            <Link
                href={"/projects/" + project.id}
                className="card w-full bg-base-100 hover:shadow-xl transition-shadow"
            >
                <figure>
                    <Image
                        src={project.imageUrl}
                        alt={project.name}
                        width="800"
                        height="400"
                        className="h-48 object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{project.name}</h2>
                    {isNew && <div className="badge badge-secondary">RECENT</div>}
                    {/* <p>{project.description}</p> */}
                </div>
            </Link>
            {/* <div className="card-actions justify-end">
                <RemoveBtn id={project.id} />
            </div> */}
        </div>
    );
}

// const Project: React.FC<ProjectProps> = ({ imageUrl, name, description }) => {
//     return (
//         <div
//             // className={`flex ${
//             //     position === "left" ? "flex-row" : "flex-row-reverse"
//             // } mb-8 w-full justify-between items-center`}

//             className={`mb-8 w-full justify-between items-center`}
//         >
//             <div className="flex-shrink-0 w-1/2">
//                 <Image
//                     src={imageUrl}
//                     alt={name}
//                     width="0"
//                     height="0"
//                     sizes="100vw"
//                     className="w-full h-auto rounded-3xl border-black border-2"
//                 />
//             </div>
//             <div className="flex-shrink-0 w-1/2 ml-4">
//                 <h2 className="text-xl font-bold mb-2">{name}</h2>
//                 <p>{description}</p>
//             </div>
//         </div>
//     );
// };

// export default Project;
