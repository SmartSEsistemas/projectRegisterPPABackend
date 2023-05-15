/*
  Warnings:

  - Added the required column `standard_resource_id` to the `planning_nature_revenues` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "planning_nature_revenues" ADD COLUMN     "standard_resource_id" TEXT NOT NULL;
