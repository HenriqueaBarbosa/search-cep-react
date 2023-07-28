import express from 'express';
import cors from 'cors';
import { consultarCep } from 'correios-brasil';

const app = express();
const port = 3001;

app.use(cors());

app.listen(port, () => console.log(`Listening on port: ${port}`));

app.get('/', (req, res) => {
    const { tracking } = req.query;

    consultarCep(tracking) 
        .then(result => {
            res.send(result); 
            console.log(result);
        })
        .catch(error => {
            console.log(error);
            res.status(500).send(error); 
        }
    );
});

