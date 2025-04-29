
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  slug,
  className
}) => {
  return (
    <div className={cn(
      "group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl bg-white",
      className
    )}>
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-energy-blue">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Link
          to={`/proyectos/`}
          className="inline-block text-energy-blue font-medium hover:text-energy-lightBlue"
        >
          Ver proyecto
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;