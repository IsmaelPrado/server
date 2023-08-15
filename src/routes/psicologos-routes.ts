import { Router } from "express";
import { psicologosController } from "../controllers/psicologos-controller";

class PsicologosRoutes {
public router:Router=Router();

constructor(){
this.config();
}

config():void{
this.router.get('/',psicologosController.getPsicologos);
this.router.get('/:id',psicologosController.getByPsicologos);
this.router.post('/',psicologosController.createPsicologos);
this.router.delete('/:id',psicologosController.deletePsicologos);
this.router.put('/:id',psicologosController.updatePsicologo);
}
}
const psicologosRoutes = new PsicologosRoutes();
export default psicologosRoutes.router;
