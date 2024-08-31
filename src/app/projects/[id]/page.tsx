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

// export async function generateMetadate({ params: { id } }: ProjectPageProps): Promise<Metadata> {
//     const project = await getProject(id);

//     return {
//         title: project.name + " - Parkistra",
//         description: project.description,
//         openGraph: {
//             images: [{ url: project.imageUrl }],
//         },
//     };
// }

export default async function ProjectPage({ params: { id } }: ProjectPageProps) {
    const project = await getProject(id);

    return (
        <main className="bg-[#ECE3CE]">
            <div className="max-w-screen-lg mx-auto items-center mt-11">
                <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
                        {project.name}
                    </h1>
                    <div>
                        <h2 className="text-2xl font-bold mb-2 text-gray-700">Description</h2>
                        <p className="text-gray-700 text-lg">{project.description}</p>
                    </div>
                </div>

                {/* Added margin and order to adjust the layout */}
                <div className="mx-auto mb-4 flex justify-center">
                    <Image
                        priority={true}
                        src={project.imageUrl}
                        alt={project.name}
                        width={1000} // Adjusted image width
                        height={600} // Adjusted image height
                        className="rounded-xl object-cover"
                    />
                </div>
            </div>
        </main>
    );
}
