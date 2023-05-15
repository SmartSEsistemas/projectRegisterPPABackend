/*
  Warnings:

  - You are about to drop the `Planning_nrresource_x_marker` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Planning_nrresource_x_marker" DROP CONSTRAINT "Planning_nrresource_x_marker_planning_marker_id_fkey";

-- DropForeignKey
ALTER TABLE "Planning_nrresource_x_marker" DROP CONSTRAINT "Planning_nrresource_x_marker_planning_nature_revenue_id_fkey";

-- DropTable
DROP TABLE "Planning_nrresource_x_marker";

-- CreateTable
CREATE TABLE "Planning_nrrevenue_x_marker" (
    "id" SERIAL NOT NULL,
    "planning_marker_id" INTEGER NOT NULL,
    "planning_nature_revenue_id" INTEGER NOT NULL,

    CONSTRAINT "Planning_nrrevenue_x_marker_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Planning_nrrevenue_x_marker" ADD CONSTRAINT "Planning_nrrevenue_x_marker_planning_marker_id_fkey" FOREIGN KEY ("planning_marker_id") REFERENCES "planning_markers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Planning_nrrevenue_x_marker" ADD CONSTRAINT "Planning_nrrevenue_x_marker_planning_nature_revenue_id_fkey" FOREIGN KEY ("planning_nature_revenue_id") REFERENCES "planning_nature_revenues"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
