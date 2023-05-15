/*
  Warnings:

  - You are about to drop the column `type` on the `planning_standard_resources` table. All the data in the column will be lost.
  - Added the required column `type_resource_id` to the `planning_standard_resources` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "planning_standard_resources" DROP COLUMN "type",
ADD COLUMN     "type_resource_id" INTEGER NOT NULL;
