"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
import FormSubmitButton from "./FormSubmitButton";
import en from "../../locales/en.json";
import sl from "../../locales/sl.json";

type Language = "en" | "sl";

const translations: Record<Language, typeof en> = { en, sl };

export default function EditForm({
  id,
  name,
  description,
  descriptionSlovene,
  nameSlovene,
}: {
  id: string;
  name: string;
  description: string;
  descriptionSlovene: string;
  nameSlovene: string;
}) {
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newDescriptionSlovene, setNewDescriptionSlovene] = useState("");
  const [newNameSlovene, setNewNameSlovene] = useState("");
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const storedLang = (localStorage.getItem("lang") as Language) || "en";
    setLanguage(storedLang);
  }, []);

  useEffect(() => {
    async function fetchData() {
      // Fetch your data here

      setNewName(name);
      setNewDescription(description);
      setNewDescriptionSlovene(descriptionSlovene);
      setNewNameSlovene(nameSlovene);
    }

    fetchData();
  }, [id, name, description, descriptionSlovene, nameSlovene]);

  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/auth/project/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newName,
          newDescription,
          newDescriptionSlovene,
          newNameSlovene,
        }),
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
          <h1 className="text-lg mb-3 font-bold">
            {translations[language].edit_project_heading}
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              onChange={(e) => setNewName(e.target.value)}
              value={newName}
              className="mb-3 w-full input input-bordered"
              type="text"
              placeholder={translations[language].name}
            />

            <input
              onChange={(e) => setNewNameSlovene(e.target.value)}
              value={newNameSlovene}
              className="mb-3 w-full input input-bordered"
              type="text"
              placeholder={translations[language].name_slovene}
            />

            <textarea
              onChange={(e) => setNewDescription(e.target.value)}
              value={newDescription}
              className="textarea-bordered textarea mb-3 w-full p-5"
              placeholder={translations[language].description}
            />

            <textarea
              onChange={(e) => setNewDescriptionSlovene(e.target.value)}
              value={newDescriptionSlovene}
              className="textarea-bordered textarea mb-3 w-full p-5"
              placeholder={translations[language].description_slovene}
            />

            <FormSubmitButton className="btn-block">
              {translations[language]["edit_project"]}
            </FormSubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
}
