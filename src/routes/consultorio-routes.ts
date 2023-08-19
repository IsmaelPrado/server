import { Router } from "express";
import { consultorioController } from "../controllers/consultorio-controller";

class CitasRoutes{
    public router:Router=Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', consultorioController.getConsultorio);
        this.router.get('/:id_consultorio', consultorioController.getByConsultorio);
        this.router.post('/', consultorioController.createConsultorio);
        this.router.delete('/:id_consultorio', consultorioController.deleteConsultorio);
        this.router.put('/:id_consultorio', consultorioController.updateConsultorio);
    }
}

const citasRoutes = new CitasRoutes();
export default citasRoutes.router;