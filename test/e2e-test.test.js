const chai= require("chai");
const chaiHttp= require("chai-http");
const expect= require("chai").expect;

chai.use(chaiHttp);

const app= require("../index.js").app;

const url= "http://localhost:3000";

describe ("2. Test post insertar nombre y precio", ()=>{
    it ("Esperamos un name y un price", (done)=>{
        chai.request(url)
        .post("/api/v1/products")
        .send ({name: 'teclado', price: 20})
        .end((error, res)=>{
            console.log(res.text);
            expect(res).to.have.status(200);
            done();
        })
    })
})

describe("3. Test get ", ()=>{
    it("Esperamos 5 productos en forma de Json", (done)=>{
        chai.request(url)
        .get("/api/v1/products")
        .end((error, res)=>{
            console.log(res.text);
            expect(res).to.have.status(200);
            done();
        })
    })
})

describe("4. Test delete", ()=>{
    it("Esperamos el nombre de la operacion y el id del producto", (done)=>{
        chai.request(url)
        .del("/api/v1/products/1")
        .end((error, res)=>{
            console.log(res.text);
            expect(res).to.have.status(200);
            done();
        })
    })
})