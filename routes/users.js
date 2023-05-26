var express= require('express');
const usersServices= require("../services/serviceUsers");

const router= express.Router();

router.get('/', async (req, res)=> {
    try {
        const users= await usersServices.getUsers(req, res);
        res.json(users);
    } catch (error) {
        console.log(error);
    }
});

module.exports= router;