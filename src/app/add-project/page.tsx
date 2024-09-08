import FormSubmitButton from "@/components/FormSubmitButton";
import prisma from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import React from "react";
import { getTranslation } from "@/lib/translation"; // Import the translation utility

export const metadata = {
  title: "Add Project - Parkistra",
};

async function addProject(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const descriptionSlovene = formData.get("descriptionSlovene")?.toString();
  const nameSlovene = formData.get("nameSlovene")?.toString();

  if (
    !name ||
    !description ||
    !imageUrl ||
    !descriptionSlovene ||
    !nameSlovene
  ) {
    throw Error("Missing reuqired fields");
  }

  await prisma.project.create({
    data: { name, description, descriptionSlovene, nameSlovene, imageUrl },
  });

  redirect("/projects");
}

export default function AddProjectPage() {
  const { language, translation } = getTranslation();

  // console.log(translation);

  return (
    <div className="flex justify-center m-11">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-lg mb-3 font-bold">
            {translation.publish_project}
          </h1>
          <form action={addProject}>
            <input
              required
              name="name"
              placeholder={translation.name}
              className="mb-3 w-full input input-bordered"
            />
            <input
              required
              name="nameSlovene"
              placeholder={translation.name_slovene}
              className="mb-3 w-full input input-bordered"
            />
            <textarea
              required
              name="description"
              placeholder={translation.description}
              className="textarea-bordered textarea mb-3 w-full p-5"
            />
            <textarea
              required
              name="descriptionSlovene"
              placeholder={translation.description_slovene}
              className="textarea-bordered textarea mb-3 w-full p-5"
            />
            <input
              required
              name="imageUrl"
              placeholder={translation.image_url}
              type="url"
              className="mb-3 w-full input input-bordered"
            />
            <FormSubmitButton className="btn-block">
              {translation.add_project}
            </FormSubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
}
