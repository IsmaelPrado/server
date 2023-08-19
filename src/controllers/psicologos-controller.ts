import { Request,Response } from "express";
import {pool} from "../database";

class PsicologosController {
async getPsicologos(req:Request, res:Response) {
const result = await pool.query ('SELECT * FROM tb_psicologos');
res.json(result[0]);
}

async getByPsicologos(req:Request, res:Response) {
const {id} = req.params;
const result = await pool.query('SELECT * FROM tb_psicologos WHERE id_psicologo = ?',[id]);
res.json(result [0]);
}

async createPsicologos(req:Request, res:Response) {
const result = await pool.query('INSERT INTO tb_psicologos SET ?',[req.body]);
res.json({message:'Registro guardado'});
}

async deletePsicologos(req:Request, res:Response) {
const {id} = req.params;
const result = await pool.query('DELETE FROM tb_psicologos WHERE id_psicologo= ?',[id]);
res.json({message:'Registro Eliminado'});
}

async updatePsicologo(req:Request, res:Response) {
const {id} = req.params;
const result = await pool.query('UPDATE tb_psicologos SET ? WHERE id_psicologo= ?',[req.body, id]);
res.json({message:'Registro Actualizado'});
}
}
export const psicologosController = new PsicologosController();

