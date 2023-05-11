/*
  Warnings:

  - You are about to drop the `planning_unit_resps` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "planning_resps" DROP CONSTRAINT "planning_resps_planning_type_resp_id_fkey";

-- DropTable
DROP TABLE "planning_unit_resps";

-- CreateTable
CREATE TABLE "planning_type_resps" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "nb_tce" TEXT NOT NULL,
    "default" BOOLEAN NOT NULL,
    "entity_id" INTEGER NOT NULL,

    CONSTRAINT "planning_type_resps_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "planning_resps" ADD CONSTRAINT "planning_resps_planning_type_resp_id_fkey" FOREIGN KEY ("planning_type_resp_id") REFERENCES "planning_type_resps"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
