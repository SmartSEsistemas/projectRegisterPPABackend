/*
  Warnings:

  - You are about to drop the column `planning_standard_resource_id` on the `planning_resources` table. All the data in the column will be lost.
  - Added the required column `standard_resource_id` to the `planning_resources` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "planning_resources" DROP COLUMN "planning_standard_resource_id",
ADD COLUMN     "standard_resource_id" TEXT NOT NULL;
