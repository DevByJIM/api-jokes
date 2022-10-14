import "dotenv/config";
import cookieParser from "cookie-parser";
import "./database/connectdb.js";
import express from "express";
import cors from "cors";
import userRouter from './routes/user.route.js';
import jokeRouter from './routes/joke.route.js';

const app = express();

const whiteList = [process.env.ORIGIN1, process.env.ORIGIN2, process.env.ORIGIN3];

// app.set('trust proxy',1);
app.use(cors({
        origin: function(origin, callback) {
            console.log("😲😲😲 =>", origin);
            if (!origin || whiteList.includes(origin)) {
                return callback(null, origin);
            }
            return callback(
                "Origen " + origin + " no autorizado por CORS"
                );
        },
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", userRouter);
app.use("/api/v1/joke", jokeRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, 
     console.log("🔥💧🔥 http://localhost:" + PORT));