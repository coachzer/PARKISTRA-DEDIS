import prisma from "@/lib/db/prisma";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";

interface ProjectPageProps {
    params: {
        id: string;
    };
}

const getProject = cache(async (id: string) => {
    const project = await prisma.project.findUnique({
        where: {
            id,
        },
    });

    if (!project) {
        notFound();
    }

    return project;
});

export async function generateMetadate({ params: { id } }: ProjectPageProps): Promise<Metadata> {
    const project = await getProject(id);

    return {
        title: project.name + " - Parkistra",
        description: project.description,
        openGraph: {
            images: [{ url: project.imageUrl }],
        },
    };
}

export default async function ProjectPage({ params: { id } }: ProjectPageProps) {
    const project = await getProject(id);

    return (
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
            <Image
                src={project.imageUrl}
                alt={project.name}
                width={500}
                height={500}
                className="rounded-lg"
                priority
            />

            <div>
                <h1 className="text-5xl font-bold">{project.name}</h1>
                <p className="py-6">{project.description}</p>
            </div>
        </div>
    );
}
