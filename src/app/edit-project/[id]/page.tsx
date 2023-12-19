import EditForm from "@/components/EditForm";
import { useState, useEffect } from "react";

async function getProjectById(id: string) {
    try {
        const res = await fetch(`/api/auth/project/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch project");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function EditTopic(params: any) {
    const { id } = params;
    const { project } = await getProjectById(id);
    if (!project) {
        return <div>Project not found</div>;
    }
    const { name, description } = project;

    return <EditForm id={id} name={name} description={description} />;
}
