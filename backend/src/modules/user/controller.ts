import { Request, Response } from "express";
import { prisma } from "../../config/database.js";
import { User } from "../../config/generated/prisma/index.js";

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
      .json({ message: "find all instructors OK ", data: instructors });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const createInstructor = async (req: Request, res: Response) => {
  try {
    const instructor: User = req.body;
    // validate input

    //insert to DB
    const user = await prisma.user.create({
      data: instructor,
    });
    return res
      .status(201)
      .json({ message: "create new instructor", data: user });
  } catch (error) {
    return res.status(400).json({ error });
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
