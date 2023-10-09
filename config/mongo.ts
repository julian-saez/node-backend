import mongoose from "mongoose";
const HOST = process.env.MONGO_HOST as string | '';
const PORT = process.env.MONGO_PORT as string | '';
const DB_NAME = process.env.MONGO_DB as string | '';
const USERNAME = process.env.MONGO_USERNAME as string | '';
const PASSWORD = process.env.MONGO_PASSWORD as string | '';
const PROTOCOL = process.env.MONGO_PROTOCOL as string | '';

const dbConnect = () => {
    const DB_URI = `${PROTOCOL}://${USERNAME}:${PASSWORD}@${HOST}:${PORT}/${DB_NAME}`;
    mongoose.connect(DB_URI)
        .then(() => console.log( "Conectado a la DB correctamente!" ))
        .catch( err => console.log( err ) );
}

export default dbConnect;