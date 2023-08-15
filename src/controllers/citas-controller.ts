import { Request,Response } from "express";
import {pool} from "../database";

class CitasController {
async getCitas(req:Request, res:Response) {
const result = await pool.query('SELECT * FROM tb_citas');
res.json(result[0]);
}

async getByCita(req:Request, res:Response) {
const {id} = req.params;
const result = await pool.query('SELECT * FROM tb_citas WHERE id_cita = ?',[id]);
res.json(result [0]);
}

async createCitas(req:Request, res:Response) {
const result = await pool.query('INSERT INTO tb_citas SET ?',[req.body]);
res.json({message:'Registro guardado'});
}

async deleteCita(req:Request, res:Response) {
const {id} = req.params;
const result = await pool.query('DELETE FROM tb_citas WHERE id_cita= ?',[id]);
res.json({message:'Registro Eliminado'});
}

async updateCita(req:Request, res:Response) {
const {id} = req.params;
const result = await pool.query('UPDATE tb_citas SET ? WHERE id_cita= ?',[req.body, id]);
res.json({message:'Registro Actualizado'});
}
}
export const citasController = new CitasController();

