"use client";
import ProjectCard from "@/components/ProjectCard";
import RemoveBtn from "@/components/RemoveProject";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { HiPencilAlt } from "react-icons/hi";

interface Project {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
}

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const { data: session } = useSession();
    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch("/api/auth/project");
            const data = await response.json();

            setProjects(data.projects);
   
        };

        fetchProjects();
    }, []);

    return (
        <div className="max-w-screen-lg mx-auto">
            <div className="my-4 px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id}>
                        <ProjectCard project={project} />
                        {session && (
                            <>
                                <RemoveBtn id={project.id} />
                                <Link
                                    className="btn btn-success mx-2"
                                    href={{
                                        pathname: `/edit-project/${project.id}`,
                                    }}
                                >
                                    <HiPencilAlt size={24} />
                                </Link>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
