-- CreateTable
CREATE TABLE "planning_ppa_registers" (
    "id" SERIAL NOT NULL,
    "quadrennium" TEXT NOT NULL,
    "control_cost" TEXT NOT NULL,
    "control_revenue" TEXT NOT NULL,
    "has_subaction" BOOLEAN NOT NULL,
    "sent" BOOLEAN NOT NULL,

    CONSTRAINT "planning_ppa_registers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planning_law_ppa" (
    "id" SERIAL NOT NULL,
    "law" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "type_local_publication" TEXT NOT NULL,
    "local_publication" TEXT NOT NULL,
    "planning_ppa_register_id" INTEGER NOT NULL,

    CONSTRAINT "planning_law_ppa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planning_law_alt_apps" (
    "id" SERIAL NOT NULL,
    "law" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "type_local_publication" TEXT NOT NULL,
    "local_publication" TEXT NOT NULL,
    "planning_ppa_register_id" INTEGER NOT NULL,

    CONSTRAINT "planning_law_alt_apps_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "planning_law_ppa" ADD CONSTRAINT "planning_law_ppa_planning_ppa_register_id_fkey" FOREIGN KEY ("planning_ppa_register_id") REFERENCES "planning_ppa_registers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "planning_law_alt_apps" ADD CONSTRAINT "planning_law_alt_apps_planning_ppa_register_id_fkey" FOREIGN KEY ("planning_ppa_register_id") REFERENCES "planning_ppa_registers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
