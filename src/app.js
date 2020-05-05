import express from 'express';

const app = express();
require('dotenv').config();

app.get('/test', async (req, res) => {
    res.status(200).json({
        message: "OK"
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});