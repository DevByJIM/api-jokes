import express from 'express';
import { getJoke, getJokes, addJoke } from '../controllers/joke.controller.js';


const router = express.Router();

router.get('/rnd', getJoke);
router.get('/', getJokes);
router.post('/', addJoke);


export default router;