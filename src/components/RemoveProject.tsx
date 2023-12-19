"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }: String | any) {
    const router = useRouter();
    const removeTopic = async () => {
        const confirmed = confirm("Are you sure?");

        if (confirmed) {
            const res = await fetch(`/api/auth/project?id=${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                router.refresh();
            }
        }
    };

    return (
        <button onClick={removeTopic} className="btn btn-error my-2">
            <HiOutlineTrash size={24} />
        </button>
    );
}
