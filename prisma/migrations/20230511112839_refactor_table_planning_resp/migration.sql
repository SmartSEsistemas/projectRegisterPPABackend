/*
  Warnings:

  - Added the required column `crc` to the `planning_resps` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entity_id` to the `planning_resps` table without a default value. This is not possible if the table is not empty.
  - Added the required column `final_date` to the `planning_resps` table without a default value. This is not possible if the table is not empty.
  - Added the required column `office` to the `planning_resps` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_date` to the `planning_resps` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "planning_resps" ADD COLUMN     "crc" TEXT NOT NULL,
ADD COLUMN     "entity_id" INTEGER NOT NULL,
ADD COLUMN     "final_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "office" TEXT NOT NULL,
ADD COLUMN     "start_date" TIMESTAMP(3) NOT NULL;
