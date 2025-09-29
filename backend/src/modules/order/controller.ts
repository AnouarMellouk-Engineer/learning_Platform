import { Request, Response } from "express";
import { prisma } from "../../config/database";

export const addOrder = async (req: Request, res: Response) => {
  try {
    const { studentId, courseId, proof } = req.body;
    // validation

    const order = await prisma.order.create({
      //@ts-ignore
      data: {
        proof,
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
    // const { status, courseId, studentId } = req.body;
    const { id } = req.params;

    //  studentId_courseId: {
    //       courseId,
    //       studentId,
    //     },

    //get order
    const order = await prisma.order.findUnique({
      where: {
        id,
      },
    });

    if (!order) {
      return res.status(404).json({ message: "order not found" });
    }

    // create the course with the user to acces the course
    const StudentCourse = await prisma.user.update({
      where: {
        id: order.studentId,
      },
      data: {
        coursesS: {
          connect: { id: order.courseId },
        },
      },
    });

    // delete the order
    await prisma.order.delete({
      where: {
        id,
      },
    });

    return res.status(200).json({ message: "update order Ok", StudentCourse });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const exitingOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const order = await prisma.order.findUnique({
      where: {
        id,
      },
    });
    return res.status(200).json({ message: "get order Ok", order });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const order = await prisma.order.delete({
      where: {
        id,
      },
    });
    return res.status(200).json({ message: "deleted order Ok", order });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const getForms = async (req: Request, res: Response) => {
  try {
    const forms = await prisma.orderForm.findMany({
      include: {
        course: true,
        student: true,
      },
    });
    return res.status(200).json({ message: "get forms OK", forms });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const findForm = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const form = await prisma.orderForm.findUnique({
      where: {
        id,
      },
    });
    return res.status(200).json({ message: "get form OK", form });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const addForm = async (req: Request, res: Response) => {
  try {
    const form = req.body;

    const createdForm = await prisma.orderForm.create({
      data: {
        ...form,
        course: {
          connect: { id: form.courseId },
        },
        student: {
          connect: { id: form.studentId },
        },
      },
    });
    return res.status(200).json({ message: "create form OK", createdForm });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const updateForm = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const form = await prisma.orderForm.update({
      where: {
        id,
      },
      data: {
        result: true,
      },
    });
    return res.status(200).json({ message: "updated form OK", form });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const deleteForm = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const form = await prisma.orderForm.delete({
      where: {
        id,
      },
    });
    return res.status(200).json({ message: "deleted form OK", form });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
