const faker= require('faker');
const boom= require('@hapi/boom');



const getAllProducts= async (req, res)=> {
    try {
        const products= [];
        const {size}= req.query;
        const limit= size || 5;
        for (let index=0; index<limit; index++){
            products.push({
                name: faker.commerce.productName(),
                price:  parseInt(faker.commerce.price(),10),
                image: faker.image.imageUrl()
            })
        }
        return products;
    } catch (error) {
        console.log(error);
    }
    
}


const getOneProduct= async (req, res)=> {
    try {
        const {id}= req.params;
        res.json({
            "id": id,
            "name": "teclado",
            "precio": 22,
            "category": "tecnology"
        });
        return res;
    } catch (error) {
        console.log(error);
    }
}

const postProduct= async (req, res)=> {
    try{
        let body= req.body;
        res.json ({
            ok: true,
            data: body
        });
        return res;
    } catch(error){
        console.log(error);
    }
}

const updateProduct= async (req, res)=> {
    try{
        const {id}= req.params;
        let body= req.body;
        if (id != 1){
            //throw new Error("id no encontrado");
            throw boom.notFound("Id no encontrado")
        }
        res.json ({
            ok: true,
            op: "PATCH",
            data: body,
            id
        });
    } catch (error){
        console.log(error);
    }
}

const deleteProduct= async (req, res)=> {
    try {
        const {id}= req.params;
        res.json({
            "op": "DELETE",
            "id": id
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports= {getAllProducts, getOneProduct, postProduct, updateProduct, deleteProduct};