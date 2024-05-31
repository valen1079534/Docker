import { Router } from "express";
import { registro } from "./controller/Login.js";

export const usuarioRuta = Router()

usuarioRuta.post('/registrar', registro)