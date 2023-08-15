import { Router } from "express";
import { citasController } from "../controllers/citas-controller";

class CitasRoutes {
public router:Router=Router();

constructor(){
this.config();
}

config():void{
this.router.get('/',citasController.getCitas);
this.router.get('/:id',citasController.getByCita);
this.router.post('/',citasController.createCitas);
this.router.delete('/:id',citasController.deleteCita);
this.router.put('/:id',citasController.updateCita);
}
}
const citasRoutes = new CitasRoutes();
export default citasRoutes.router;
