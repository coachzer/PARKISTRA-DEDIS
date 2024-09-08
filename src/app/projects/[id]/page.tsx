import prisma from "@/lib/db/prisma";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";
import parse from "html-react-parser";
import { getTranslation } from "@/lib/translation"; // Import the translation utility

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

const formatTextWithLineBreaks = (text: String) => {
  return text.replace(/\r\n/g, "<br/>").replace(/\n/g, "<br/>");
};

export default async function ProjectPage({
  params: { id },
}: ProjectPageProps) {
  const project = await getProject(id);
  const { language, translation } = getTranslation();

  return (
    <main className="bg-[#ECE3CE]">
      <div className="max-w-screen-lg mx-auto items-center mt-11">
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
            {language === "sl" ? project.nameSlovene : project.name}
          </h1>
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-700">
              {translation.description}
            </h2>

            <p className="text-gray-700 text-lg">
              {parse(
                formatTextWithLineBreaks(
                  language === "sl"
                    ? project.descriptionSlovene
                    : project.description
                )
              )}
            </p>
          </div>
        </div>

        {/* Added margin and order to adjust the layout */}
        <div className="mx-auto mb-4 flex justify-center">
          <Image
            priority={true}
            src={project.imageUrl}
            alt={language === "sl" ? project.nameSlovene : project.name}
            width={1000} // Adjusted image width
            height={600} // Adjusted image height
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </main>
  );
}
