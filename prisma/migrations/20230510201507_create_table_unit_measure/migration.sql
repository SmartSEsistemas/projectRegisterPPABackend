-- CreateTable
CREATE TABLE "planning_unit_measures" (
    "id" SERIAL NOT NULL,
    "decription" TEXT NOT NULL,
    "entity_id" INTEGER NOT NULL,

    CONSTRAINT "planning_unit_measures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planning_unit_resps" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "nb_tce" TEXT NOT NULL,
    "default" BOOLEAN NOT NULL,
    "entity_id" INTEGER NOT NULL,

    CONSTRAINT "planning_unit_resps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planning_resps" (
    "id" SERIAL NOT NULL,
    "natural_person_id" INTEGER NOT NULL,
    "planning_type_resp_id" INTEGER NOT NULL,

    CONSTRAINT "planning_resps_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "planning_resps" ADD CONSTRAINT "planning_resps_planning_type_resp_id_fkey" FOREIGN KEY ("planning_type_resp_id") REFERENCES "planning_unit_resps"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
