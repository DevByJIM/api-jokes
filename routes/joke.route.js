import express from 'express';
import { getJoke, getJokes, addJoke } from '../controllers/joke.controller.js';


const router = express.Router();

router.get('/', getJokes);
router.get('/rnd', getJoke);
router.post('/', addJoke);


export default router;