"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const citas_controller_1 = require("../controllers/citas-controller");
class CitasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', citas_controller_1.citasController.getCitas);
        this.router.get('/:id', citas_controller_1.citasController.getByCita);
        this.router.post('/', citas_controller_1.citasController.createCitas);
        this.router.delete('/:id', citas_controller_1.citasController.deleteCita);
        this.router.put('/:id', citas_controller_1.citasController.updateCita);
    }
}
const citasRoutes = new CitasRoutes();
exports.default = citasRoutes.router;
