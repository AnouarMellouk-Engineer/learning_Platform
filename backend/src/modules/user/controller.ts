import { Request, Response } from "express";
import { prisma } from "../../config/database.js";
// import { PrismaClient, Prisma } from "../../generated/prisma";
import { PrismaClient } from "@prisma/client";

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

    const userSchema = {
      firstName: instructor.firstName,
      lastName: instructor.lastName,
      email: instructor.email,
      username: instructor.username,
      password: instructor.password,
      phone_number: instructor.phone_number,
      wilaya: instructor.wilaya,
      picture: instructor.picture,
      role: "instructor",
      details: {
        create: {
          title: instructor.details.title,
          linkedIn: instructor.details.linkedIn,
          x: instructor.details.x,
          status: true,
        },
      },
    };

    // add the instructor
    const user = await prisma.user.create({
      data: userSchema,
    });

    console.dir(userSchema, { depth: null });

    return res
      .status(201)
      .json({ message: "create new instructor", data: user });
  } catch (error) {
    // return res.status(400).json({ error });
    // console.error("Prisma Error:", error);

    // if (error instanceof Prisma.PrismaClientKnownRequestError) {
    //   console.error("Known request error:", error.code, error.message);
    // }

    // if (error instanceof Prisma.PrismaClientValidationError) {
    //   console.error("Validation error details:", error.message);
    // }

    return res.status(400).json({
      message: "Something went wrong",
      error,
    });
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
