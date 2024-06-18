import { prisma } from '~/lib';

export default async function Home() {
  const projects = await prisma.project.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
    </main>
  );
}
