import {Router} from 'express';
import { empeleadosController } from '../controllers/empleados-controller';

class EmpleadosRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', empeleadosController.getEmpleados);
        this.router.get('/:id', empeleadosController.getByIdEmpleados);
        this.router.post('/', empeleadosController.createEmpleados);
        this.router.put('/:id', empeleadosController.updateEmpleados);
        this.router.delete('/:id', empeleadosController.deleteEmpleados);
    }
}
const empleadosRoutes = new EmpleadosRoutes();
export default empleadosRoutes.router;