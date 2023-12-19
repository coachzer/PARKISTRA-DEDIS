import ProjectCard from "@/components/ProjectCard";
import prisma from "@/lib/db/prisma";
import React from "react";

export default async function ProjectsPage() {
    const projects = await prisma.project.findMany({
        orderBy: {
            id: "desc",
        },
    });

    return (
        <div>
            <div className="my-4 px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id}>
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>

            {/* <div className="hero rounded-xl bg-blue-200">
                <Image
                    src={projects[0].imageUrl}
                    alt={projects[0].name}
                    width={400}
                    height={800}
                    className="w-full max-w-sm rounded-lg shadow-2xl"
                    priority
                />
            </div> */}
        </div>
    );
}

// useEffect(() => {
//     fetch("/api/auth/project", {
//         method: "GET",
//     })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then((data) => setProjects(data.projects))
//         .catch((error) => console.error("Error:", error));
// }, []);

// const deleteProject = (id: any) => {
//     try {
//         fetch(`/api/auth/project/${id}`, {
//             method: "DELETE",
//         })
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 // Remove the deleted project from the state
//                 setProjects(projects.filter((project) => project.id !== id));
//                 router.push("/projects");
//             })
//             .catch((error) => console.error("Error:", error));
//     } catch (error) {
//         console.error("Error:", error);
//     }
// };

// import Project from '@/components/Project'
// import prisma from "@/lib/db/prisma";
// import React from 'react'

// export default function Projects() {

//     // const project = prisma.project.findMany()

//     const projects = [
//         {
//           image: '/project1ParkIstra.jpeg',
//           title: 'HELPING LOCAL COMMUNITIES',
//           description: 'Park Istra organizes daily actions to help the inhabitants of Istria. The purpose of these actions is: helping vulnerable groups of people; supporting sustainable initiatives and projects that improve the quality of life in the region; promoting cooperation; learning new skills and learning about Istria through a diverse volunteering work. Examples of actions that we carry out include: helping organic farmers, renovating children’s playgrounds, collecting and transporting food for people in need, helping elderly… If you or your local community need help or you know someone who needs help, you can write to us at info@parkistra.com or call us at 040 420 500.',
//           position: 'left', // Use 'left' instead of 'string'
//         },
//         {
//           image: '/project2ParkIstra.jpeg',
//           title: 'SUPPORTING LOCAL ORGANIZATIONS',
//           description: 'Many local organizations in our area have excellent ideas and a good knowledge of the needs of the local population. Unfortunately, they are often hindered by the lack of resources and staff, so we are there to help them. Examples of our activities:supporting regional Red Cross association;supporting the Daytime Center for the homeless in Bertoki;assistance to Zveza Sonček in maintenance of their therapeutic center and working with users of their facilities;help in the local Animal Shelter …',
//           position: 'right', // Use 'right' instead of 'string'
//         },
//         {
//           image: '/project3ParkIstra.jpeg',
//           title: 'PRESERVING ISTRIAN HERITAGE',
//           description: 'Istria is full of natural and cultural wonders. Taking care for them is the basis of the preservation of local identity, the development of green tourism, and hence the creation of new quality jobs and the revitalization of the Istrian countryside. Park Istra carries out the following activities for preserving the natural and cultural heritage of Istria:maintenance of cultural monuments, old houses, churches;organization of clean-up actions;restoration of drywalls;cleaning overgrown rural paths;assistance in the care of protected natural areas;promoting local products, traditional music, old customs and crafts.',
//           position: 'left', // Use 'right' instead of 'string'
//         },
//         // Add more projects as needed
//       ];

//   return (
//     <main className='bg-[#ECE3CE]'>
//         <div className="container mx-auto p-8 bg-[#ECE3CE]">
//             {projects.map((project, index) => (
//              <Project key={index} {...project} />
//             ))}
//         </div>
//     </main>

//   )
// }
