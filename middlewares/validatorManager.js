import { validationResult, body } from "express-validator";
import { validatorResult } from './validatorResult.js'

export const bodyRegisterValidator = [
    body("username", "Nombre de usuario muy largo.(max:20)")
        .trim()
        .isLength({max:20}),
    body("email", "Formato de email no correcto")
        .trim()
        .isEmail()
        .normalizeEmail(),
    body("password", "Mínimo 6 caracteres").trim().isLength({ min: 6 }),
    body("password", "Formato de password incorrecto").custom(
        (value, { req }) => {
            if (value !== req.body.repassword)
                throw new Error("Contraseñas no coincidentes");
            return value;
        }
    ),
    validatorResult
]