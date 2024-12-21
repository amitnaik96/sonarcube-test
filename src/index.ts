import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send("Hello There!");
});

app.listen(3001, () => console.log(`Listening on port ${3000}`));