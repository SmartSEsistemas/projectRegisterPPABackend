/*
  Warnings:

  - Added the required column `percentage` to the `planning_nrrevenue_x_resources` table without a default value. This is not possible if the table is not empty.
  - Added the required column `required` to the `planning_nrrevenue_x_resources` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "planning_nrrevenue_x_resources" ADD COLUMN     "percentage" INTEGER NOT NULL,
ADD COLUMN     "required" BOOLEAN NOT NULL;
