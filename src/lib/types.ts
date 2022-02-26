import { Prisma } from '@prisma/client';

type ProjectWithPhoto = Prisma.ProjectGetPayload<{
  include: { photo: true };
}>;

export type { ProjectWithPhoto };
