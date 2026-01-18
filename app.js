const axios = require('axios');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const apiBase = 'https://rickandmortyapi.com/api/character';


app.get('/characters/:name', async (req, res) => {
    try {
        const { name } = req.params;

        const response = await axios.get(`${apiBase}/?name=${name}`);

        res.json(response.data.results);
    } catch (error) {
        res.status(404).json({ error: 'No se encontraron personajes' });
    }
});

app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000");
});
