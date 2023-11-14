const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

let apiData = 'Hello from the server!';

app.get('/api/data', (req, res) => {
    res.json({ data: apiData });
});

app.post('/api/data', (req, res) => {
    apiData = req.body.data;
    res.json({ message: 'API data updated successfully' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});