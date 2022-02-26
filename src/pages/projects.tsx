import { PrismaClient, Project } from '@prisma/client';

import { ProjectWithPhoto } from '@/lib/types';

import ProjectCard from '@/components/ProjectCard';
import Seo from '@/components/Seo';

type ProjectsProps = {
  projects: ProjectWithPhoto[];
};

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const projects: Project[] = await prisma.project.findMany({
    include: { photo: true },
  });
  return {
    props: {
      projects: projects.filter((project: Project) => project.id !== 0),
    },
  };
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <>
      <Seo templateTitle='Projects' />

      <section className='bg-secondary px-16'>
        <div className='flex justify-between min-h-screen'>
          <div className='flex-1 pt-32'>
            <div className='flex items-center'>
              <div className='pr-6 text-3xl'>Projects</div>
              <div
                className='flex-1 border border-yellow-400'
                style={{ height: '1px' }}
              />
            </div>
            <div className='flex flex-wrap pb-4 mt-16 text-gray-300'>
              {projects &&
                projects.map((project: ProjectWithPhoto) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
