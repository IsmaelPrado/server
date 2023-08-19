import { Router } from "express";
import { carrerasController } from "../controllers/carreras-controller";

class CarrerasRoutes {
public router:Router=Router();

constructor(){
this.config();
}

config():void{
this.router.get('/',carrerasController.getCarreras);
this.router.get('/:id',carrerasController.getByCarreras);
this.router.post('/',carrerasController.createCarreras);
this.router.delete('/:id',carrerasController.deleteCarreras);
this.router.put('/:id',carrerasController.updateCarrera);
}
}
const carrerasRoutes = new CarrerasRoutes();
export default carrerasRoutes.router;