"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function EditForm({
    id,
    name,
    description,
}: {
    id: string;
    name: string;
    description: string;
}) {
    const [newName, setNewName] = useState("");
    const [newDescription, setNewDescription] = useState("");

    useEffect(() => {
        async function fetchData() {
            // Fetch your data here

            setNewName(name);
            setNewDescription(description);
        }

        fetchData();
    }, [id, name, description]);

    const router = useRouter();

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();

        try {
            const res = await fetch(`/api/auth/project/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newName, newDescription }),
            });

            if (!res.ok) {
                throw new Error("Failed to update topic");
            }

            router.refresh();
            router.push("/projects", { scroll: false });
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex justify-center m-11">
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className="text-lg mb-3 font-bold">Edit a Project</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <input
                            onChange={(e) => setNewName(e.target.value)}
                            value={newName}
                            className="border border-slate-500 px-8 py-2"
                            type="text"
                            placeholder="Project Name"
                        />

                        <input
                            onChange={(e) => setNewDescription(e.target.value)}
                            value={newDescription}
                            className="border border-slate-500 px-8 py-2"
                            type="text"
                            placeholder="Project Description"
                        />

                        <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
                            Update Project
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
