import { Request, Response } from "express";
import { prisma } from "../../config/database";

export const addOrder = async (req: Request, res: Response) => {
  try {
    const { studentId, courseId, proof } = req.body;
    // validation

    const order = await prisma.order.create({
      data: {
        proof,
        paymentMethod: "CCP",
        student: { connect: { id: studentId } },
        course: { connect: { id: courseId } },
      },
    });
    return res.status(201).json({ message: "add order OK", order });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await prisma.order.findMany({
      where: {
        status: "not",
      },
      include: {
        course: true,
        student: true,
      },
    });

    return res.status(200).json({ message: "get orders OK", orders });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const { status, courseId, studentId } = req.body;

    const updatedOrder = await prisma.order.update({
      where: {
        studentId_courseId: {
          courseId,
          studentId,
        },
      },
      data: {
        status,
      },
    });
    return res.status(200).json({ message: "update order Ok", updatedOrder });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const getForms = async (req: Request, res: Response) => {};
export const addForm = async (req: Request, res: Response) => {};
