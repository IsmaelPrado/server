import {Request, Response} from 'express';
import {pool} from '../database';

class EmpleadosController{

  async getEmpleados(req: Request, res: Response) {
    const result = await pool.query('SELECT * FROM empleados');
    res.json(result[0]);
}

async getByIdEmpleados(req: Request, res: Response) {
    const {id} = req.params;
    const result = await pool.query('SELECT * FROM empleados WHERE id = ?', [id]);
    res.json(result[0]);
}

  async createEmpleados  (req: Request, res: Response){
    await pool.query('INSERT INTO empleados SET ?', [req.body]);
    res.json({message: 'Registro guardado'});
}

    async deleteEmpleados (req: Request, res: Response)  {
        const {id} = req.params;
        await pool.query('DELETE FROM empleados WHERE id= ?', [id]);
        res.json({message: 'Registro eliminado'})
}
  async updateEmpleados (req: Request, res: Response)  {
  const {id} = req.params;
  await pool.query('UPDATE empleados SET ? WHERE id = ?', [req.body,id]);
  res.json({message: 'Registro actualizado'})
}
}
export const empeleadosController = new EmpleadosController();