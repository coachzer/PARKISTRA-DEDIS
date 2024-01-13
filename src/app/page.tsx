"use client";
import Carousel from "@/components/Carousel";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface Project {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
}

export default function Home() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch("/api/auth/project");
            const data = await response.json();
            setProjects(data.projects);
        };

        fetchProjects();
    }, []);

    const images: string[] = [
        // Add more images as needed
        "/images/carousel3.jpg",
        "/images/carousel2.jpg",
        "/images/carousel1.jpg",
        "/images/carousel4.jpg",
        "/images/carousel5.jpg",
        "/images/carousel6.jpg",
        "/images/carousel7.jpg",
        "/images/carousel8.jpg",
        "/images/carousel9.jpg",
        "/images/carousel10.jpg",
    ];

    return (
        <div className="bg-[#ECE3CE]">
            <div>
                <Carousel />
            </div>
            <div className="mx-auto max-w-screen-xl">
                <div className="hero  my-4 px-4 rounded-xl bg-blue-200">
                    <div className="hero-content flex-col lg:flex-row">
                        {projects[0] && (
                            <Image
                                src={projects[0].imageUrl}
                                alt={projects[0].name}
                                width={400}
                                height={800}
                                className="w-full max-w-sm rounded-lg shadow-2xl"
                                priority
                            />
                        )}
                        {projects[0] && (
                            <div>
                                <h1 className="text-5xl font-bold">{projects[0].name}</h1>
                                <p className="py-6">{projects[0].description}</p>
                                <Link
                                    href={"/projects/" + projects[0].id}
                                    className="btn btn-primary"
                                >
                                    Check it out ❤️
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                {projects && (
                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                        {projects.slice(1).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
