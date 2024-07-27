import { Prisma } from '@prisma/client';
import { prisma } from './prisma';

export type ProjectWithPhoto = Prisma.ProjectGetPayload<{
  include: { photo: true };
}>;

export async function getProjects(): Promise<ProjectWithPhoto[]> {
  const projects: ProjectWithPhoto[] = await prisma.project.findMany({
    include: { photo: true },
  });

  return projects.filter((project) => project.id !== 0);
}
