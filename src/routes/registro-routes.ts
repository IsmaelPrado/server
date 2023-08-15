import {Router} from 'express';
import { registrosController } from '../controllers/registro-controller';

class RegistrosRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', registrosController.getRegistros);
        this.router.get('/:id', registrosController.getByIdRegistro);
        this.router.post('/', registrosController.createRegistros);
        this.router.put('/:id', registrosController.updateRegistros);
        this.router.delete('/:id', registrosController.deleteRegistros);
    }
}
const registrosRoutes = new RegistrosRoutes();
export default registrosRoutes.router;