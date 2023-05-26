const joi= require("joi");

const id= joi.string().uuid();
const name= joi.string().alphanum().min(3).max(10);

const price= joi.number().integer().min(10);

const schemaProductCreate= joi.object({
    name: name.required(),
    price: price.required()
});

const schemaProductUpdate= joi.object({
    name: name,
    price: price
});

const schemaProductGet= joi.object({
    id: id.required()
});

module.exports={schemaProductCreate,
                schemaProductUpdate,
                schemaProductGet};