var express= require('express');

const router= express.Router();


router.get('/', (req, res)=> res.status(200).send('Le proporcionaremos ayuda'));

module.exports= router;