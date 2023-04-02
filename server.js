const express = require('express')
const router = express.Router()

const bodyParser = require("body-parser")

const app = express()

/* app.use('/', (req, res)=>{
    res.send("Hola Alex")
}) */

app.use(bodyParser)
app.use(router)

router.get("/message", (req, res)=>{
    res.send("Lista de mensajes")
})

router.post("/message", (req, res)=>{
    res.send("Mensaje añanido")
})

app.listen(3000, ()=>{
    console.log("Server escuchando en el puerto 3000")
})