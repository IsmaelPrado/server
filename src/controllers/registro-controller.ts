import {Request, Response} from 'express';
import {pool} from '../database';

class RegistrosController{

  async getRegistros(req: Request, res: Response) {
    const result = await pool.query('SELECT * FROM tb_alumnos');
    res.json(result[0]);
}

async getByIdRegistro(req: Request, res: Response) {
    const {id} = req.params;
    const result = await pool.query('SELECT * FROM tb_alumnos WHERE id_alumno = ?', [id]);
    res.json(result[0]);
}

  async createRegistros  (req: Request, res: Response){
    await pool.query('INSERT INTO tb_alumnos SET ?', [req.body]);
    res.json({message: 'Registro guardado'});
}

    async deleteRegistros (req: Request, res: Response)  {
        const {id} = req.params;
        await pool.query('DELETE FROM tb_alumnos WHERE id= ?', [id]);
        res.json({message: 'Registro eliminado'})
}
  async updateRegistros (req: Request, res: Response)  {
  const {id} = req.params;
  await pool.query('UPDATE tb_alumnos SET ? WHERE id_alumno = ?', [req.body,id]);
  res.json({message: 'Registro actualizado'})
}
}
export const registrosController = new RegistrosController();