/*
  Warnings:

  - You are about to drop the column `planning_functionId` on the `planning_sub_functions` table. All the data in the column will be lost.
  - Added the required column `planning_function_id` to the `planning_sub_functions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "planning_sub_functions" DROP CONSTRAINT "planning_sub_functions_planning_functionId_fkey";

-- AlterTable
ALTER TABLE "planning_sub_functions" DROP COLUMN "planning_functionId",
ADD COLUMN     "planning_function_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "planning_sub_functions" ADD CONSTRAINT "planning_sub_functions_planning_function_id_fkey" FOREIGN KEY ("planning_function_id") REFERENCES "planning_functions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
