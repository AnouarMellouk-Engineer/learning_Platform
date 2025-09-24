-- CreateTable
CREATE TABLE "public"."Course" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "picture" TEXT NOT NULL,
    "type" TEXT DEFAULT 'course',
    "discount" DOUBLE PRECISION DEFAULT 0,
    "categorie" TEXT NOT NULL,
    "level" TEXT NOT NULL DEFAULT 'begginer',
    "status" TEXT NOT NULL DEFAULT 'not',
    "startDate" TIMESTAMP(3),
    "instructorId" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."OverViews" (
    "id" TEXT NOT NULL,
    "statement" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,

    CONSTRAINT "OverViews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Details" (
    "id" TEXT NOT NULL,
    "week" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,

    CONSTRAINT "Details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Lessons" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT,
    "type" TEXT NOT NULL DEFAULT 'video',
    "duration" TEXT,
    "position" INTEGER NOT NULL,
    "weekId" TEXT NOT NULL,

    CONSTRAINT "Lessons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Order" (
    "studentId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "proof" TEXT NOT NULL,
    "status" TEXT DEFAULT 'not',
    "paymentMethod" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("studentId","courseId")
);

-- CreateTable
CREATE TABLE "public"."OrderForm" (
    "studentId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "motivation" TEXT NOT NULL,
    "result" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "OrderForm_pkey" PRIMARY KEY ("studentId","courseId")
);

-- CreateTable
CREATE TABLE "public"."Comment" (
    "studentId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "comment" TEXT,
    "rating" INTEGER DEFAULT 5,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("studentId","courseId")
);

-- CreateTable
CREATE TABLE "public"."_Strudent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_Strudent_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_Strudent_B_index" ON "public"."_Strudent"("B");

-- AddForeignKey
ALTER TABLE "public"."Course" ADD CONSTRAINT "Course_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OverViews" ADD CONSTRAINT "OverViews_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "public"."Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Details" ADD CONSTRAINT "Details_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "public"."Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Lessons" ADD CONSTRAINT "Lessons_weekId_fkey" FOREIGN KEY ("weekId") REFERENCES "public"."Details"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Order" ADD CONSTRAINT "Order_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Order" ADD CONSTRAINT "Order_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "public"."Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OrderForm" ADD CONSTRAINT "OrderForm_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OrderForm" ADD CONSTRAINT "OrderForm_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "public"."Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Comment" ADD CONSTRAINT "Comment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Comment" ADD CONSTRAINT "Comment_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "public"."Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_Strudent" ADD CONSTRAINT "_Strudent_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_Strudent" ADD CONSTRAINT "_Strudent_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
