import express from "express";
import body_parser from "body-parser"
import cors from "cors"
import { usuarioRuta } from "./routerLogin.js";

const app = express()

app.use(cors())

app.use(body_parser.json())
app.use(body_parser.urlencoded({extends: false}))

app.use('/usuario', usuarioRuta)

app.listen(5000, () => {console.log('Corriendo en el puerto 5000')} )