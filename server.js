const express = require("express")
const app = express();
const router = express.Router();

const response = require("./response.js")

const body_parser = require("body-parser")


app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:false}))
app.use(router)


// RUTAS
router.get("/message", (req,res)=>{
    response.success(req, res, "Lista de mensajes", 200)
});

router.post("/message", (req, res)=>{
    if(req.query.error == 'ok') response.error(req, res, "Error simulado", 404)
    else response.success(req, res, "Mensaje añadido", 201)
});

router.delete("/message", (req,res)=>{
    res.send("Mensaje eliminado")

    response.success(req, res, "Eliminado correctamente", 200)
});

app.use('/api', express.static('public'))

app.listen(3001, ()=>{
    console.log("Litering in port 3001")
})
