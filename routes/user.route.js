import express from 'express';
import { login, register } from '../controllers/user.controller.js';
import { bodyRegisterValidator } from '../middlewares/validatorManager.js'

const router = express.Router();

router.post('/register', bodyRegisterValidator, register)
router.post('/login', login);

export default router;