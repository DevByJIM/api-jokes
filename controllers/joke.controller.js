import { getRandom } from "../helpers/tools.js";
import { Joke } from "../models/joke.js";


export const getJoke = async (req, res) => {
    try {
        Joke.count().exec((err, count) => {
            Joke.findOne().skip(getRandom(count)).exec((err, result) => {
                return res.status(201).json(result)
            })
        })
    } catch (error) {      
        return res.status(500).json({ error: "Error del servidor" });
    }
}


export const getJokes = async (req, res) => {
    try {
        const jokes = await Joke.find();
        // return res.json({ books });
        return res.json({ jokes });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error de servidor" });
    }
}


export const addJoke = async (req, res) => {
    console.log(req.body);
    const { category, age, lang, type, story, delivery } = req.body;
    try {
        const joke = new Joke({ category, age, lang, type, story, delivery });
        await joke.save();
        return res.json(joke)

    } catch (error) {
        if (error.code === 11000)
            return res.status(400).json({ error: "Este chiste ya está registrado" });
        return res.status(500).json({ error: "Error del servidor" });
    }
}
