/*
  Warnings:

  - You are about to drop the column `planning_standard_resource_id` on the `planning_type_resources` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "planning_type_resources" DROP COLUMN "planning_standard_resource_id";
