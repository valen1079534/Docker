import { pool } from "../conexion.js";

export const registro = async (req, res) => {
    try {
        const {nombre, email}= req.body

        const sql = `INSERT INTO usuario (nombre, email) VALUES (?, ?)`

        const [rows] = await pool.query(sql, [nombre, email])

        if(rows.affectedRows > 0){
            res.status(200).json({status:200, message: 'Usuario registrado'})
        }else{
            res.status(404).json({status:200, message: 'Usuario NO registrado'})
        }

    } catch (error) {
        console.log('error', error)
    }
}