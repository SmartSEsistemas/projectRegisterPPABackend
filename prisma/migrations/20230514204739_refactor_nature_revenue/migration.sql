/*
  Warnings:

  - Added the required column `planning_type_resource_id` to the `planning_nature_revenues` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "planning_nature_revenues" ADD COLUMN     "planning_type_resource_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "planning_nature_revenues" ADD CONSTRAINT "planning_nature_revenues_planning_type_resource_id_fkey" FOREIGN KEY ("planning_type_resource_id") REFERENCES "planning_type_resources"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
