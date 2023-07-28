import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());

app.listen(port, () => console.log(`Listening on port: ${port}`));

app.get('/', (req, res) => {
    res.json({message: 'ok'});
});

