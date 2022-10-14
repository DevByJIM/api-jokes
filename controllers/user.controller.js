import { User } from '../models/user.js'
import { generateToken } from '../helpers/tokenManager.js';


export const register = async (req, res) => {
    console.log(req.body);
    const { username, email, password } = req.body;
    try {
        const user = new User({ username, email, password });
        await user.save();
        return res.json({ UserRegister: username })

    } catch (error) {
        console.log(error.code)
        if (error.code === 11000) 
            return res.status(400).json({ error: "Este usuario ya está registrado" });
        return res.status(500).json({ error: "Error del servidor" });
    }
}

export const login = async (req, res) => {
   try {
        const { email, password } = req.body;

        let user = await User.findOne({ email });
        if (!user)
            return res.status(403).json({ error: "No existe este usuario" });

        const respuestaPassword = await user.comparePassword(password);
        if (!respuestaPassword)
            return res.status(403).json({ error: "Contraseña incorrecta" });

        // Generar el token JWT
        const { token, expiresIn } = generateToken(user.id);
        // generateRefreshToken(user.id, res);

        return res.json({ token, expiresIn });
        // return res.json({logeado: user.username})
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error de servidor" });
    }

};

