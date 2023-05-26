var express= require('express');
const productsSevices= require("../services/serviceProducts");
const {schemaProductCreate, schemaProductUpdate, schemaProductGet}= require("../schema/schemaProduct");
const {validatorHandler}= require("../middleware/validatorHandler");

const router= express.Router();


router.get('/', async (req, res, next)=> {
    try {
        const products= await productsSevices.getAllProducts(req, res);
        res.json(products);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', validatorHandler(schemaProductGet, 'params'), async (req, res)=> {
    try {
        const product= await productsSevices.getOneProduct(req, res);
        res.json(product);
    } catch (error) {
        console.log(error);
    }
});

router.post('/', validatorHandler(schemaProductCreate, 'body'), async (req, res)=> {
    try {
        const product= await productsSevices.postProduct(req, res);
        res.json(product)
    } catch (error) {
        console.log(error);
    }
});

router.patch('/:id', validatorHandler(schemaProductUpdate, 'body'), async (req, res) => {
    try {
        const product= await productsSevices.updateProduct(req, res);
        res.json(product);
    } catch (error) {
        console.log(error);
    }
});

router.delete('/:id', async (req, res)=> {
    try {
        const product= await productsSevices.deleteProduct(req, res);
        res.json(product);
    } catch (error) {
        console.log(error);
    }
});

module.exports= router;