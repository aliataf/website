'use client';

import { Photo } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

// import ArrowLink from './links/ArrowLink';
import { ProjectWithPhoto } from '~/lib';

type ProjectCardProps = {
  readonly project: ProjectWithPhoto;
};

function onPhotoClick(photo: Photo | null): void {
  if (photo) {
    const image: HTMLImageElement = document.createElement('img');
    image.src = photo.url;
    const newWindow = window.open('');
    newWindow?.document.write(image.outerHTML);
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="w-full sm:p-4 mt-4 sm:mt-0 sm:w-6/12 md:w-4/12">
      <div className="h-[350px] bg-accent flex-col pt-4 rounded-xl transition-all dark:bg-slate-800 hover:scale-105">
        {project.photo && (
          <div className="flex justify-center items-center">
            <div className="w-40 h-40 relative">
              <Image
                role="button"
                tabIndex={0}
                src={project.photo.url}
                alt={project.photo.alt}
                className="cursor-zoom-in rounded-xl"
                onClick={() => onPhotoClick(project.photo)}
                onKeyDown={(e) => e.key === 'Enter' && onPhotoClick(project.photo)}
                fill
              />
            </div>
          </div>
        )}
        <div className="mt-4 text-2xl font-medium text-center">
          <Link
            href={project.url ? project.url : ''}
            className="underline cursor-pointer"
            target="_blank"
            aria-label={`Visit ${project.title} project page`}
          >
            {project.title}
          </Link>
        </div>
        <div className="flex-1 px-8 pb-6 mt-4 text-center md:text-left">
          <p className="text-center">{project.content}</p>
        </div>
      </div>
    </article>
  );
}
