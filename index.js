const cors= require('cors');
var express= require('express');
const apiRouter = require('./server');
var app= express();

const {errorLogs, handleError}= require("./middleware/error.handler");


app.use(cors());
apiRouter(app);
app.use(express.json());
app.use(handleError);
app.use(errorLogs);


const port= 3000;

app.listen(port, () => console.log(`Aplicacion de ejemplo escuchando en el puerto ${port}`));

app.get('/', (req, res) => res.send('Hola Mundo!') );