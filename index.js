var express= require('express');
const apiRouter = require('./server');
var app= express();
app.use(express.json());

apiRouter(app);

const port= 3000;

app.listen(port, () => console.log(`Aplicacion de ejemplo escuchando en el puerto ${port}`));

app.get('/', (req, res) => res.send('Hola Mundo!') );