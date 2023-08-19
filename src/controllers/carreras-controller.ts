import { Request,Response } from "express";
import {pool} from "../database";
class CarrerasController {
    async getCarreras(req:Request, res:Response) {
    const result = await pool.query ('SELECT * FROM tb_carreras');
    res.json(result[0]);
    }
    
    async getByCarreras(req:Request, res:Response) {
    const {id} = req.params;
    const result = await pool.query('SELECT * FROM tb_carreras WHERE id_carrera = ?',[id]);
    res.json(result [0]);
    }
    
    async createCarreras(req:Request, res:Response) {
    const result = await pool.query('INSERT INTO tb_carreras SET ?',[req.body]);
    res.json({message:'Registro guardado'});
    }
    
    async deleteCarreras(req:Request, res:Response) {
    const {id} = req.params;
    const result = await pool.query('DELETE FROM tb_carreras WHERE id_carrera= ?',[id]);
    res.json({message:'Registro Eliminado'});
    }
    
    async updateCarrera(req:Request, res:Response) {
    const {id} = req.params;
    const result = await pool.query('UPDATE tb_carreras SET ? WHERE id_carrera= ?',[req.body, id]);
    res.json({message:'Registro Actualizado'});
    }
    }
    export const carrerasController = new CarrerasController();
    
    