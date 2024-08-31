import FormSubmitButton from "@/components/FormSubmitButton";
import prisma from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import React from "react";

export const metadata = {
    title: "Add Project - Parkistra",
};

async function addProject(formData: FormData) {
    "use server";

    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();

    if (!name || !description || !imageUrl) {
        throw Error("Missing reuqired fields");
    }

    await prisma.project.create({
        data: { name, description, imageUrl },
    });

    redirect("/projects");
}

export default function AddProjectPage() {
    return (
        <div className="flex justify-center m-11">
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className="text-lg mb-3 font-bold">Publish a Project</h1>
                    <form action={addProject}>
                        <input
                            required
                            name="name"
                            placeholder="Name"
                            className="mb-3 w-full input input-bordered"
                        />
                        <textarea
                            required
                            name="description"
                            placeholder="Description"
                            className="textarea-bordered textarea mb-3 w-full p-5"
                        />
                        <input
                            required
                            name="imageUrl"
                            placeholder="Image Url"
                            type="url"
                            className="mb-3 w-full input input-bordered"
                        />
                        <FormSubmitButton className="btn-block">Add Project</FormSubmitButton>
                    </form>
                </div>
            </div>
        </div>
    );
}
