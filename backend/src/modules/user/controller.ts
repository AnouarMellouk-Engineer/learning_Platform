import { Request, Response } from "express";
import { prisma } from "../../config/database.js";

export const getAllInstructors = async (req: Request, res: Response) => {
  try {
    const instructors = await prisma.user.findMany({
      where: {
        role: "instructor",
      },
      include: {
        details: true,
      },
    });
    return res
      .status(200)
      .json({ message: "find all instructors OK ", instructors });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const createInstructor = async (req: Request, res: Response) => {
  try {
    // validate data
    const instructor = req.body;

    // verify emain unique
    const exitingEmail = await prisma.user.findUnique({
      where: {
        email: instructor.email,
      },
    });
    if (exitingEmail) {
      return res.status(400).json({ message: "email already exist" });
    }

    // add the instructor
    const user = await prisma.user.create({
      data: {
        ...instructor,
        role: "instructor",
        details: { create: { ...instructor.details, status: true } },
      },
    });
    return res
      .status(201)
      .json({ message: "create new instructor", data: user });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const deleteInstructor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    //Find the user
    const user = await prisma.user.findUnique({ where: { id } });

    if (!user || user.role !== "instructor") {
      return res.status(404).json({ error: "Instructor not found" });
    }

    //Soft delete in details
    await prisma.userDetails.update({
      where: { userId: id },
      data: { status: false },
    });

    return res.status(200).json({ message: "Deleted instructor OK" });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

export const getAllCreators = async (req: Request, res: Response) => {
  try {
    const creators = await prisma.user.findMany({
      where: {
        role: "creator",
      },
      include: {
        details: true,
      },
    });
    return res
      .status(200)
      .json({ message: "find all creators OK ", data: creators });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const getUserCourses = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const courses = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        coursesS: {
          include: {
            instructor: true,
          },
        },
      },
    });

    if (!courses) {
      return res.status(404).json({ message: "courses not found" });
    }
    return res.status(200).json({ message: "find all courses", courses });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const addcomment = async (req: Request, res: Response) => {
  const com = req.body;
  if (!com.comment) {
    return res.status(400).json({ message: "comment is required" });
  }
  try {
    const newComment = await prisma.comment.create({
      data: {
        ...com,
        student: {
          connect: {
            id: com.student,
          },
        },
        course: {
          connect: {
            id: com.course,
          },
        },
      },
    });
    return res.status(201).json({ message: "created comment OK ", newComment });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
