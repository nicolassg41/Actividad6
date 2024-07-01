const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Servicios
app.get('/api/resource', (req, res) => {
    res.send('GET request to the resource');
});

app.post('/api/resource', (req, res) => {
    res.send('POST request to the resource');
});

app.put('/api/resource', (req, res) => {
    res.send('PUT request to the resource');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});