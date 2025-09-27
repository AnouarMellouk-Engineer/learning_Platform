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
    const instructor = req.body;

    // validate instructor

    const user = await prisma.user.create({
      data: { ...instructor, details: { create: instructor.details } },
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

export const deleteInstructor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedInstructor = await prisma.user.delete({
      where: {
        id,
      },
    });

    return res.status(200).json({ message: "deleted  instructor OK " });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const register = async (req: Request, res: Response) => {};

export const login = async (req: Request, res: Response) => {};
export const logout = async (req: Request, res: Response) => {};
