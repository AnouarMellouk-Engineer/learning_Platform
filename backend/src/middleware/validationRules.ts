import { body } from "express-validator";
export const loginRules = [
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];

export const userValidationRules = [
  body("firstName")
    .notEmpty()
    .withMessage("First name is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("First name must be 2-50 characters"),

  body("lastName")
    .notEmpty()
    .withMessage("Last name is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("Last name must be 2-50 characters"),

  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),

  body("username")
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 3, max: 20 })
    .withMessage("Username must be 3-20 characters"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
    .matches(/[A-Z]/)
    .withMessage("Password must contain an uppercase letter")
    .matches(/[0-9]/)
    .withMessage("Password must contain a number"),

  body("phone_number")
    .notEmpty()
    .withMessage("Phone number is required")
    .isMobilePhone("any")
    .withMessage("Invalid phone number"),

  body("wilaya")
    .notEmpty()
    .withMessage("Wilaya is required")
    .isLength({ min: 2 })
    .withMessage("Wilaya must be at least 2 characters"),

  body("picture").optional().isURL().withMessage("Picture must be a valid URL"),

  body("role")
    .optional()
    .isIn(["user", "instructor"])
    .withMessage("Role must be user,or teacher"),
];

export const detailsValidationRules = [
  // --- Nested UserDetails fields ---
  body("details.title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Title must be 2-100 characters"),

  body("details.status")
    .optional()
    .isBoolean()
    .withMessage("Status must be true or false"),

  body("details.linkedIn")
    .optional()
    .isURL()
    .withMessage("LinkedIn must be a valid URL"),

  body("details.x")
    .optional()
    .isURL()
    .withMessage("X (Twitter) must be a valid URL"),
];
