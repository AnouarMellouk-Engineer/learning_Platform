/*
  Warnings:

  - The primary key for the `OrderForm` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[studentId,courseId]` on the table `OrderForm` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `OrderForm` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "public"."OrderForm" DROP CONSTRAINT "OrderForm_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ALTER COLUMN "result" SET DEFAULT false,
ADD CONSTRAINT "OrderForm_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "OrderForm_studentId_courseId_key" ON "public"."OrderForm"("studentId", "courseId");
