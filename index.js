const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

// Servir los archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
