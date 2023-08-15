import { Request, Response } from "express";
import { pool } from "../database";
import { RowDataPacket } from "mysql2"; // Importar RowDataPacket

interface Usuario {
  id_alumno: number;
  usuario: string;
  password: string;
  // Otros campos que necesites
}

/*interface User {
  id: number;
  usuario: string;
  // Otros campos que necesites
}
*/
class LoginController {
  async login(req: Request, res: Response) {
    try {
      const { usuario, password } = req.body;
      console.log('Contraseña recibida:', password);

      // Consulta en la base de datos para obtener el número de control por el nombre de usuario
      const [alumnoRows] = await pool.query<RowDataPacket[]>(
        'SELECT * FROM tb_alumnos WHERE id_alumno = ?',
        [usuario]
      );

      // Verificar si se encontró un número de control con ese nombre de usuario
      const user = rows[0] as Usuario; // Conversión explícita del tipo a Usuario
      if (!user) {
        return res.status(401).json({ message: "Nombre de usuario incorrecto" });
      }

      // Verificar la contraseña (asumiendo que se ha almacenado de forma segura con bcrypt)
      if (user.password !== password) {
        return res.status(401).json({ message: "Contraseña incorrecta" });
      }

      // Autenticación exitosa, enviar un mensaje de inicio de sesión exitoso
      res.json({ message: "Inicio de sesión exitoso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }

  /* 
  async getUserData(req: Request, res: Response) {
    try {
      // Aquí asumimos que previamente has implementado una autenticación para identificar al usuario actual
      const userId = req.user.id;

      // Consulta en la base de datos para obtener los datos del usuario por su id
      const [rows] = await pool.query<RowDataPacket[]>(
        'SELECT id, usuario FROM tb_alumnos WHERE id = ?',
        [userId]
      );

      // Verificar si se encontró el usuario
      const user = rows[0] as User; // Conversión explícita del tipo a User
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      // Devolver los datos del usuario en la respuesta
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }
  */
}

export const loginController = new LoginControlle