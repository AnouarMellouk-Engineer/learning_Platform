/*
  Warnings:

  - You are about to drop the `_Strudent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Course" DROP CONSTRAINT "Course_instructorId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Details" DROP CONSTRAINT "Details_courseId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Lessons" DROP CONSTRAINT "Lessons_weekId_fkey";

-- DropForeignKey
ALTER TABLE "public"."OverViews" DROP CONSTRAINT "OverViews_courseId_fkey";

-- DropForeignKey
ALTER TABLE "public"."UserDetails" DROP CONSTRAINT "UserDetails_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."_Strudent" DROP CONSTRAINT "_Strudent_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_Strudent" DROP CONSTRAINT "_Strudent_B_fkey";

-- DropTable
DROP TABLE "public"."_Strudent";

-- CreateTable
CREATE TABLE "public"."_Student" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_Student_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_Student_B_index" ON "public"."_Student"("B");

-- AddForeignKey
ALTER TABLE "public"."UserDetails" ADD CONSTRAINT "UserDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Course" ADD CONSTRAINT "Course_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OverViews" ADD CONSTRAINT "OverViews_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "public"."Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Details" ADD CONSTRAINT "Details_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "public"."Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Lessons" ADD CONSTRAINT "Lessons_weekId_fkey" FOREIGN KEY ("weekId") REFERENCES "public"."Details"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_Student" ADD CONSTRAINT "_Student_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_Student" ADD CONSTRAINT "_Student_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
