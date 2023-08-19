import { Request,Response } from "express";
import { pool } from "../database";

class ConsultorioController{

    async getConsultorio(req:Request, res:Response) {
        const result = await pool.query('SELECT * FROM tb_consultorio');
        res.json(result[0]);
    }

    async getByConsultorio (req:Request, res:Response){
        const {id_consultorio} = req.params;
        const result = await pool.query('SELECT * FROM tb_consultorio WHERE id_consultorio = ?', [id_consultorio]);
        res.json(result[0]);
    }

    async createConsultorio (req:Request, res:Response){
        try {
            await pool.query('INSERT INTO tb_consultorio SET ?', [req.body]);
            res.json({message:'Agenda Guardada'});
          } catch (error) {
            if (error instanceof Error) {
              console.error('Error al crear Agenda:', error);
              res.status(500).json({ error: 'Error al crear Agenda', details: error.message });
            } else {
              console.error('Error al crear tipos:', error);
              res.status(500).json({ error: 'Error al crear Agenda' });
            }
          }
        }

    async updateConsultorio (req:Request, res:Response){
        const {id_consultorio} = req.params; 
        await pool.query('UPDATE tb_consultorio SET ? WHERE id_consultorio = ?', [req.body, id_consultorio]);
        res.json({message:'Agenda Actualizada'});
    }
    
    async deleteConsultorio (req:Request, res:Response){
        const {id_consultorio} = req.params; 
        await pool.query('DELETE FROM tb_consultorio WHERE id_consultorio = ?', [id_consultorio]);
        res.json({message:'Agenda Eliminada'});
    }

}

export const consultorioController = new ConsultorioController();