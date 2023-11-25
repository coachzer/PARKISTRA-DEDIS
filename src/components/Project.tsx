// components/Project.tsx
import React from 'react';

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  position: 'left' | 'right' | string; // Define position as a union type
}

const Project: React.FC<ProjectProps> = ({ image, title, description, position }) => {
  return (
    <div
      className={`flex ${
        position === 'left' ? 'flex-row' : 'flex-row-reverse'
      } mb-8 w-full justify-between items-center`}
    >
      <div className="flex-shrink-0 w-1/2">
        <img src={image} alt={title} className="w-full h-auto rounded-3xl border-black border-2" />
      </div>
      <div className="flex-shrink-0 w-1/2 ml-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Project;
