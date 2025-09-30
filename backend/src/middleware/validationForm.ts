import { body } from "express-validator";

export const orderVAlidationRules = [
  body("studentId")
    .notEmpty()
    .withMessage("Student ID is required")
    .isUUID()
    .withMessage("Student ID must be a valid UUID"),

  body("courseId")
    .notEmpty()
    .withMessage("Course ID is required")
    .isUUID()
    .withMessage("Course ID must be a valid UUID"),
];

export const orderFormValidationRules = [
  body("student")
    .notEmpty()
    .withMessage("Student ID is required")
    .isUUID()
    .withMessage("Student ID must be a valid UUID"),

  body("course")
    .notEmpty()
    .withMessage("Course ID is required")
    .isUUID()
    .withMessage("Course ID must be a valid UUID"),

  body("firstName")
    .notEmpty()
    .withMessage("First name is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("First name must be 2–50 characters"),

  body("lastName")
    .notEmpty()
    .withMessage("Last name is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("Last name must be 2–50 characters"),

  body("phone")
    .notEmpty()
    .withMessage("Phone number is required")
    .isMobilePhone("any")
    .withMessage("Invalid phone number"),

  body("motivation")
    .notEmpty()
    .withMessage("Motivation is required")
    .isLength({ min: 10 })
    .withMessage("Motivation must be at least 10 characters"),

  body("result")
    .optional()
    .isBoolean()
    .withMessage("Result must be true or false"),
];
