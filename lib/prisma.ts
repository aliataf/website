import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  // In production mode, it's best to not use a global variable
  prisma = new PrismaClient();
} else {
  // In development, use a global variable so the client
  // is not created multiple times when hot reloading
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export { prisma };
