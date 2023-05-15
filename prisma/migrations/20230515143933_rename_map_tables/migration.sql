/*
  Warnings:

  - You are about to drop the `planning_law_alt_apps` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `planning_law_ppa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "planning_law_alt_apps" DROP CONSTRAINT "planning_law_alt_apps_planning_ppa_register_id_fkey";

-- DropForeignKey
ALTER TABLE "planning_law_ppa" DROP CONSTRAINT "planning_law_ppa_planning_ppa_register_id_fkey";

-- DropTable
DROP TABLE "planning_law_alt_apps";

-- DropTable
DROP TABLE "planning_law_ppa";

-- CreateTable
CREATE TABLE "planning_law_ppas" (
    "id" SERIAL NOT NULL,
    "law" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "type_local_publication" TEXT NOT NULL,
    "local_publication" TEXT NOT NULL,
    "planning_ppa_register_id" INTEGER NOT NULL,

    CONSTRAINT "planning_law_ppas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planning_law_alt_ppas" (
    "id" SERIAL NOT NULL,
    "law" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "type_local_publication" TEXT NOT NULL,
    "local_publication" TEXT NOT NULL,
    "planning_ppa_register_id" INTEGER NOT NULL,

    CONSTRAINT "planning_law_alt_ppas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "planning_law_ppas" ADD CONSTRAINT "planning_law_ppas_planning_ppa_register_id_fkey" FOREIGN KEY ("planning_ppa_register_id") REFERENCES "planning_ppa_registers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "planning_law_alt_ppas" ADD CONSTRAINT "planning_law_alt_ppas_planning_ppa_register_id_fkey" FOREIGN KEY ("planning_ppa_register_id") REFERENCES "planning_ppa_registers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
