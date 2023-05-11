/*
  Warnings:

  - You are about to drop the column `decription` on the `planning_unit_measures` table. All the data in the column will be lost.
  - Added the required column `description` to the `planning_unit_measures` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "planning_unit_measures" DROP COLUMN "decription",
ADD COLUMN     "description" TEXT NOT NULL;
