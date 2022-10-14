import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI_MONGO);
    console.log("BBDD conectada con éxito ✨✨");
} catch (error) {
    console.log("Falló la conexión a Mongodb:" + error);

}
