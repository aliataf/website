import { Metadata } from 'next';
import { ProjectCard } from '@/components';
import { getProjects } from '~/lib';

export const metadata: Metadata = {
  title: 'Projects',
};

export default async function Projects() {
  const projects = await getProjects();

  return (
    <>
      <section className="px-8 sm:px-16 pt-16">
        <div className="flex items-center">
          <div className="pr-6 text-3xl">Projects</div>
          <div className="flex-1 border border-yellow-400 h-0.5" />
        </div>
        <div className="flex flex-wrap pb-4 mt-8 text-gray-300">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
