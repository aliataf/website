import { PrismaClient, Project } from '@prisma/client';
import { motion } from 'framer-motion';

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
      projects,
    },
  };
}

export default function Projects({ projects }: ProjectsProps) {
  console.log('s', projects);
  return (
    <>
      <Seo templateTitle='Projects' />

      <section className='bg-secondary px-16'>
        <div className='flex justify-between min-h-screen'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className='flex-1 pt-32'
          >
            <div className='flex items-center'>
              <div className='pr-6 text-3xl'>Projects</div>
              <motion.div
                className='flex-1 border border-yellow-400'
                style={{ height: '1px' }}
                initial={{ x: '100%' }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className='flex flex-wrap pb-4 mt-16 text-gray-300'>
              {projects &&
                projects.map((project: ProjectWithPhoto) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
