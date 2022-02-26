/*
  Warnings:

  - A unique constraint covering the columns `[projectId]` on the table `Photo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Photo_projectId_key" ON "Photo"("projectId");
