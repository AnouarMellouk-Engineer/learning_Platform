import { Request, Response } from "express";
import { prisma } from "../../config/database";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// JWT secret
const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

// REGISTER

export const register = async (req: Request, res: Response) => {
  try {
    const {
      firstName,
      lastName,
      email,
      username,
      password,
      phone_number,
      wilaya,
      picture,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !username ||
      !password ||
      !phone_number ||
      !wilaya
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // check if email or username already exists
    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ email }, { username }] },
    });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "Email or username already taken" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        username,
        password: hashedPassword,
        phone_number,
        wilaya,
        picture,
        role: "user", // enforce default, don't trust client
      },
    });

    return res.status(201).json({
      status: "success",
      message: "User registered successfully",
      data: {
        id: newUser.id,
        email: newUser.email,
        username: newUser.username,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to register" });
  }
};

// LOGIN
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, {
      expiresIn: "1d",
    });

    // send JWT as httpOnly cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(200).json({
      status: "success",
      message: "Logged in successfully",
      data: { id: user.id, email: user.email, role: user.role },
    });
  } catch {
    return res.status(500).json({ message: "Failed to login" });
  }
};

// LOGOUT
export const logout = (req: Request, res: Response) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "Logged out successfully" });
};

export const getTokenacces = (req: Request, res: Response) => {};
