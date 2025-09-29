import { Request, Response } from "express";
import { prisma } from "../../config/database";

export const getAllCourses = async (req: Request, res: Response) => {
  try {
    const courses = await prisma.course.findMany();
    return res.status(200).json({ message: "get courses OK", data: courses });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const addCourse = async (req: Request, res: Response) => {
  let course = req.body;
  /*
  course = {
  ...
  instructorId ,
  overviews: [ {}, {}, {}...],
  details: [
  {
    week , title 
    lessons : [ {}, {},{}...]
  }, 
  {
   week , title 
    lessons : [ {}, {},{}...]
  } ,
  {
   week , title 
    lessons : [ {}, {},{}...]
  }...]
  }
  */

  // validate the course data

  try {
    const resultcourse = await prisma.course.create({
      data: {
        ...course,

        overviews: {
          create: course.overviews,
        },
        details: {
          //@ts-ignore
          create: course.details.map((detail) => {
            return { ...detail, lessons: { create: detail.lessons } };
          }),
        },
      },
    });
    return res
      .status(201)
      .json({ message: "create new course", data: resultcourse });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const getCourseDetails = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const course = await prisma.course.findUnique({
      where: {
        id,
      },
      include: {
        instructor: true,
        overviews: true,
        details: {
          include: {
            lessons: true,
          },
        },
        Comment: { include: { student: true } },
      },
    });
    return res
      .status(200)
      .json({ message: "get course details", data: course });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const updateCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    let course = req.body;

    /*
  course = {
  ...
  instructorId ,
  overviews: [ {}, {}, {}...],
  details: [
  {
    week , title 
    lessons : [ {}, {},{}...]
  }, 
  {
   week , title 
    lessons : [ {}, {},{}...]
  } ,
  {
   week , title 
    lessons : [ {}, {},{}...]
  }...]
  }
  */

    // validate the course data

    //delete overviews and details
    await prisma.overViews.deleteMany({
      where: {
        courseId: id,
      },
    });

    await prisma.details.deleteMany({
      where: {
        courseId: id,
      },
    });

    //update course
    const updatedCourse = await prisma.course.update({
      where: {
        id,
      },
      data: {
        ...course,

        overviews: {
          create: course.overviews,
        },
        details: {
          //@ts-ignore
          create: course.details.map((detail) => {
            return { ...detail, lessons: { create: detail.lessons } };
          }),
        },
      },
    });
    return res
      .status(200)
      .json({ message: "course updated OK", updatedCourse });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const course = await prisma.course.findUnique({
      where: {
        id,
      },
    });

    if (!course || course.type === "course") {
      return res.status(404).json({ message: "course not found" });
    }

    const deletedcourse = await prisma.course.delete({
      where: {
        id,
      },
    });
    return res
      .status(200)
      .json({ message: "deleted course OK", data: deletedcourse });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const getcomments = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;

    const comments = await prisma.comment.findMany({
      where: {
        courseId,
      },
      include: {
        student: true,
      },
    });
    return res.status(201).json({ message: "get comment OK ", comments });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
