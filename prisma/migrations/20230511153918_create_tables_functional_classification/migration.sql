-- CreateTable
CREATE TABLE "planning_standard_resources" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "separator" TEXT NOT NULL,
    "size_level" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "type_tce" TEXT NOT NULL,

    CONSTRAINT "planning_standard_resources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planning_standard_nr_revenues" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "separator" TEXT NOT NULL,
    "size_level" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "type_tce" TEXT NOT NULL,

    CONSTRAINT "planning_standard_nr_revenues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planning_functions" (
    "id" SERIAL NOT NULL,
    "number" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "final_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "planning_functions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planning_sub_functions" (
    "id" SERIAL NOT NULL,
    "number" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "planning_functionId" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "final_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "planning_sub_functions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planning_markers" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "default" BOOLEAN NOT NULL,

    CONSTRAINT "planning_markers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planning_type_resources" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "planning_type_resources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planning_resources" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "planning_type_resource_id" INTEGER NOT NULL,
    "superavit" BOOLEAN NOT NULL,
    "planning_id" INTEGER,

    CONSTRAINT "planning_resources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Planning_resource_x_markers" (
    "id" SERIAL NOT NULL,
    "planning_resource_id" INTEGER NOT NULL,
    "planning_marker_id" INTEGER NOT NULL,

    CONSTRAINT "Planning_resource_x_markers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planning_nature_costs" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "final_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "planning_nature_costs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planning_nrcost_x_markers" (
    "id" SERIAL NOT NULL,
    "planning_nature_cost_id" INTEGER NOT NULL,
    "planning_marker_id" INTEGER NOT NULL,

    CONSTRAINT "planning_nrcost_x_markers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planning_standard_nr_costs" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "separator" TEXT NOT NULL,
    "size_level" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "type_tce" TEXT NOT NULL,

    CONSTRAINT "planning_standard_nr_costs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planning_nature_revenues" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "deduction" BOOLEAN NOT NULL,
    "nr_deduction" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "final_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "planning_nature_revenues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planning_nrrevenue_x_resources" (
    "id" SERIAL NOT NULL,
    "planning_nature_revenue_id" INTEGER NOT NULL,
    "planning_resource_id" INTEGER NOT NULL,

    CONSTRAINT "planning_nrrevenue_x_resources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Planning_nrresource_x_marker" (
    "id" SERIAL NOT NULL,
    "planning_marker_id" INTEGER NOT NULL,
    "planning_nature_revenue_id" INTEGER NOT NULL,

    CONSTRAINT "Planning_nrresource_x_marker_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "planning_sub_functions" ADD CONSTRAINT "planning_sub_functions_planning_functionId_fkey" FOREIGN KEY ("planning_functionId") REFERENCES "planning_functions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "planning_resources" ADD CONSTRAINT "planning_resources_planning_type_resource_id_fkey" FOREIGN KEY ("planning_type_resource_id") REFERENCES "planning_type_resources"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "planning_resources" ADD CONSTRAINT "planning_resources_planning_id_fkey" FOREIGN KEY ("planning_id") REFERENCES "planning_resources"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Planning_resource_x_markers" ADD CONSTRAINT "Planning_resource_x_markers_planning_resource_id_fkey" FOREIGN KEY ("planning_resource_id") REFERENCES "planning_resources"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Planning_resource_x_markers" ADD CONSTRAINT "Planning_resource_x_markers_planning_marker_id_fkey" FOREIGN KEY ("planning_marker_id") REFERENCES "planning_markers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "planning_nrcost_x_markers" ADD CONSTRAINT "planning_nrcost_x_markers_planning_nature_cost_id_fkey" FOREIGN KEY ("planning_nature_cost_id") REFERENCES "planning_nature_costs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "planning_nrcost_x_markers" ADD CONSTRAINT "planning_nrcost_x_markers_planning_marker_id_fkey" FOREIGN KEY ("planning_marker_id") REFERENCES "planning_markers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "planning_nrrevenue_x_resources" ADD CONSTRAINT "planning_nrrevenue_x_resources_planning_nature_revenue_id_fkey" FOREIGN KEY ("planning_nature_revenue_id") REFERENCES "planning_nature_revenues"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "planning_nrrevenue_x_resources" ADD CONSTRAINT "planning_nrrevenue_x_resources_planning_resource_id_fkey" FOREIGN KEY ("planning_resource_id") REFERENCES "planning_resources"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Planning_nrresource_x_marker" ADD CONSTRAINT "Planning_nrresource_x_marker_planning_marker_id_fkey" FOREIGN KEY ("planning_marker_id") REFERENCES "planning_markers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Planning_nrresource_x_marker" ADD CONSTRAINT "Planning_nrresource_x_marker_planning_nature_revenue_id_fkey" FOREIGN KEY ("planning_nature_revenue_id") REFERENCES "planning_nature_revenues"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
