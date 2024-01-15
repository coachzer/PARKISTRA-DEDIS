"use client";

import EditForm from "@/components/EditForm";
import next from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface Project {
    id: string;
    name: string;
    description: string;
}

let cache: Record<string, Project> = {};

async function getProjectById(id: string) {
    if (cache[id]) {
        return cache[id];
    }

    try {
        const res = await fetch(`/api/auth/project/${id}`);
        if (!res.ok) {
            throw new Error("Failed to fetch project");
        }

        const project = await res.json();
        cache[id] = project; // Store the data in the cache

        return project;
    } catch (error) {
        console.error("Error fetching project:", error);
        return { project: null };
    }
}

export default function EditTopic(params: any) {
    // console.log("id: " + params.params.id);

    const [projectData, setProjectData] = useState({
        id: "",
        name: "",
        description: "",
    });

    const { data: session } = useSession();

    const router = useRouter();

    useEffect(() => {
        if (!session) {
            router.push("/api/auth/signin");
        }
    }, [session, router]);

    useEffect(() => {
        const fetchData = async () => {
            const id = params.params.id; // works for now
            const project = await getProjectById(id);
            const { name, description } = project;

            console.log(project.projects);

            if (!project) {
                // Handle the case where the project is not found
                console.error("Project not found");
                return;
            }

            setProjectData({
                id,
                name: project.projects.name,
                description: project.projects.description,
            });
        };

        fetchData();
    }, [params]); // Make sure to rerun the effect when params change

    const { id, name, description } = projectData;

    return <EditForm id={id} name={name} description={description} />;
}
