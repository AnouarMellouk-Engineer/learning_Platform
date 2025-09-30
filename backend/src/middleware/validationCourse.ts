import { body } from "express-validator";

export const courseValidationRules = [
  // --- Course main fields ---
  body("name")
    .notEmpty()
    .withMessage("Course name is required")
    .isLength({ min: 3, max: 100 })
    .withMessage("Course name must be 3-100 characters"),

  body("description")
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ min: 10 })
    .withMessage("Description must be at least 10 characters"),

  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isFloat({ min: 0 })
    .withMessage("Price must be a positive number"),

  body("picture")
    .notEmpty()
    .withMessage("Picture is required")
    .isURL()
    .withMessage("Picture must be a valid URL"),

  body("type")
    .optional()
    .isIn(["course", "online", "onsite"])
    .withMessage("Type must be either 'course' or 'online'"),

  body("discount")
    .optional()
    .isFloat({ min: 0, max: 50 })
    .withMessage("Discount must be between 0 and 50"),

  body("categorie").notEmpty().withMessage("Categorie is required"),

  body("level")
    .optional()
    .isIn(["begginer", "intermediate", "advanced"])
    .withMessage("Level must be beginner, intermediate or advanced"),

  body("status")
    .optional()
    .isIn(["not", "active", "archived"])
    .withMessage("Status must be 'not', 'active', or 'archived'"),

  body("startDate")
    .optional()
    .isISO8601()
    .withMessage("Start date must be a valid date"),

  body("instructorId")
    .notEmpty()
    .withMessage("Instructor ID is required")
    .isUUID()
    .withMessage("Instructor ID must be a valid UUID"),

  // --- Overviews ---
  body("overviews")
    .isArray({ min: 1 })
    .withMessage("At least one overview is required"),

  body("overviews.*.statement")
    .notEmpty()
    .withMessage("Overview statement is required")
    .isLength({ min: 5 })
    .withMessage("Overview statement must be at least 5 characters"),

  body("overviews.*.type")
    .notEmpty()
    .withMessage("Overview type is required")
    .isIn(["goal", "requirement", "audience"])
    .withMessage("Overview type must be 'goal', 'requirement', or 'audience'"),

  // --- Details (optional) ---
  body("details").optional().isArray().withMessage("Details must be an array"),

  body("details.*.week")
    .if(body("details").exists())
    .notEmpty()
    .withMessage("Week number is required")
    .isInt({ min: 1 })
    .withMessage("Week must be a positive integer"),

  body("details.*.title")
    .if(body("details").exists())
    .notEmpty()
    .withMessage("Week title is required")
    .isLength({ min: 3 })
    .withMessage("Week title must be at least 3 characters"),

  // --- Lessons (optional inside details) ---
  body("details.*.lessons")
    .optional()
    .isArray()
    .withMessage("Lessons must be an array"),

  body("details.*.lessons.*.name")
    .if(body("details.*.lessons").exists())
    .notEmpty()
    .withMessage("Lesson name is required"),

  body("details.*.lessons.*.url")
    .optional()
    .isURL()
    .withMessage("Lesson URL must be valid"),

  body("details.*.lessons.*.type")
    .optional()
    .isIn(["video", "article"])
    .withMessage("Lesson type must be video, article, or quiz"),

  body("details.*.lessons.*.duration")
    .optional()
    .isString()
    .withMessage("Duration must be a string (e.g., '15min')"),

  body("details.*.lessons.*.position")
    .if(body("details.*.lessons").exists())
    .notEmpty()
    .withMessage("Lesson position is required")
    .isInt({ min: 1 })
    .withMessage("Lesson position must be a positive integer"),
];
