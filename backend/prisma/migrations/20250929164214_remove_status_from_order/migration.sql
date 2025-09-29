/*
  Warnings:

  - You are about to drop the column `status` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Order" DROP COLUMN "status",
ALTER COLUMN "paymentMethod" SET DEFAULT 'CCP';
