import {getConnection, sql} from '../database/connection';
import {queries} from '../database/querys';

export const getNormas = async (req,res) => {

    try {
        const pool = await getConnection()
        const result = await pool.request().query(queries.getAllNormas)
        
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const createNewNorma = async (req, res) => {

    try {
        const { id, numero_norma, tipo_norma, tema, actor, fecIni, fecFin } = req.body;
    
        const pool = await getConnection();
        const result = await pool.request()
        .input("id", sql.Int, id)
        .input("numero_norma", sql.VarChar, numero_norma)
        .input("tipo_norma", sql.Int, tipo_norma)
        .input("tema", sql.VarChar, tema)
        .input("actor", sql.VarChar, actor)
        .input("fecha_inicio", sql.VarChar, fecIni)
        .input("fecha_final", sql.VarChar, fecFin)
        .query(queries.addNewNorma)
        console.log("resultado: ", result ) //respuesta de la base de datos
        res.json('Norma creada')
        //res.json(id, numero_norma, tema, actor, fecIni, fecFin)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }    
}

export const getNormasById = async (req,res) => {

    try {
        const {id} = req.params;

        const pool = await getConnection();
        const result = await pool.request()
        .input("id", sql.Int, id)
        .query(queries.getNormaById)

        res.json(result.recordset[0])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}

export const updateValidityNorma = async (req, res) => {

    try {
        const {id} = req.params;
        const {fecFin} = req.body;

        const pool = await getConnection();
        const result = await pool.request()
        .input("id", sql.Int, id)
        .input("fecFin", sql.VarChar, fecFin)
        .query(queries.updateNormaById)

        
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}