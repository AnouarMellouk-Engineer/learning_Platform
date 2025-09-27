/*
  Warnings:

  - The primary key for the `Order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[studentId,courseId]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `Order` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "public"."Order" DROP CONSTRAINT "Order_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Order_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_studentId_courseId_key" ON "public"."Order"("studentId", "courseId");
