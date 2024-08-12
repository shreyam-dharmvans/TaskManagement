import { body, validationResult } from "express-validator";
export const validate = (validations) => {
    return async (req, res, next) => {
        for (const validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break;
            }
        }
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        else {
            return res.status(400).json({ errors: errors.array() });
        }
    };
};
export const taskValidators = [
    body('title')
        .trim()
        .notEmpty().withMessage('Title is required')
        .isLength({ max: 100 }).withMessage('Title must be less than 100 characters long'),
    body('deadline')
        .trim()
        .notEmpty().withMessage('Deadline is required')
        .isISO8601().withMessage('Deadline must be a valid date format (ISO 8601)'),
    body('description')
        .trim()
        .isLength({ max: 500 }).withMessage('Description must be less than 500 characters long'),
    body('category')
        .trim()
        .isIn(['To Do', 'In Progress', 'Done', 'Timeout']).withMessage('Category must be one of the following: To Do, In Progress, Done, Timeout')
];
