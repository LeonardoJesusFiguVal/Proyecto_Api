const productRouter= require('../routes/products');
const usersRouter= require('../routes/users');
const helpRouter= require('../routes/help');

const express= require('express');


let apiRouter= app => {
    const router= express.Router();
    app.use('/api/v1', router);
    router.use('/products', productRouter);
    router.use('/users', usersRouter);
    router.use('/help', helpRouter);
}


/*
function apiRouter(app){
    const router= express.Router();
    app.use('/api/v1', router);
    router.use('/products', productRouter);
    router.use('/users', usersRouter);
    router.use('/help', helpRouter);
}
*/

module.exports= apiRouter;
