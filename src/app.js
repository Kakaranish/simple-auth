import express from 'express';
import mongoose from 'mongoose';

const app = express();
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => console.log("Connection with db has been established.")).catch(error => {
    console.log("Establishing connection with db failed");
    throw error;
});

app.get('/test', async (req, res) => {
    res.status(200).json({
        message: "OK"
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});