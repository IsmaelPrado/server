"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const psicologos_controller_1 = require("../controllers/psicologos-controller");
class PsicologosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', psicologos_controller_1.psicologosController.getPsicologos);
        this.router.get('/:id', psicologos_controller_1.psicologosController.getByPsicologos);
        this.router.post('/', psicologos_controller_1.psicologosController.createPsicologos);
        this.router.delete('/:id', psicologos_controller_1.psicologosController.deletePsicologos);
        this.router.put('/:id', psicologos_controller_1.psicologosController.updatePsicologo);
    }
}
const psicologosRoutes = new PsicologosRoutes();
exports.default = psicologosRoutes.router;
