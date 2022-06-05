import { Photo } from '@prisma/client';
import Image from 'next/image';

import type { ProjectWithPhoto } from '@/lib/types';

import ArrowLink from './links/ArrowLink';

type ProjectCardProps = {
	project: ProjectWithPhoto;
};

export default function ProjectCard({ project }: ProjectCardProps) {
	function onPhotoClick(photo: Photo | null) {
		if (photo) {
			const image: HTMLImageElement = document.createElement('img');
			image.src = photo.url;
			const w = window.open('');
			w?.document.write(image.outerHTML);
		}
	}

	return (
		<div className="w-12/12 sm:p-4 mt-4 sm:mt-0 sm:w-6/12 md:w-4/12">
			<div className="bg-accent flex-col pt-4 rounded-xl transition-all dark:bg-slate-800 hover:scale-105">
				{project.photo && (
					<div className="flex justify-center">
						<Image
							src={project.photo.url}
							alt={project.photo.alt}
							width="150px"
							height="150px"
							className="cursor-zoom-in rounded-xl"
							onClick={() => onPhotoClick(project.photo)}
						/>
					</div>
				)}
				<div className="mt-4 text-2xl font-medium text-center">
					<ArrowLink href={project.url ? project.url : ''} className="border-gray-700">
						{project.title}
					</ArrowLink>
				</div>
				<div className="flex-1 px-8 pb-6 mt-4 text-center md:text-left">
					<div className="flex-col flex-1 justify-center">
						<p className="text-center">{project.content}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
