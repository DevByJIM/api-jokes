import express from 'express';
import { getJokes, addJoke } from '../controllers/joke.controller.js';


const router = express.Router();

router.get('/', getJokes);
router.post('/', addJoke);


export default router;