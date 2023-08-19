"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const consultorio_controller_1 = require("../controllers/consultorio-controller");
class CitasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', consultorio_controller_1.consultorioController.getConsultorio);
        this.router.get('/:id_consultorio', consultorio_controller_1.consultorioController.getByConsultorio);
        this.router.post('/', consultorio_controller_1.consultorioController.createConsultorio);
        this.router.delete('/:id_consultorio', consultorio_controller_1.consultorioController.deleteConsultorio);
        this.router.put('/:id_consultorio', consultorio_controller_1.consultorioController.updateConsultorio);
    }
}
const citasRoutes = new CitasRoutes();
exports.default = citasRoutes.router;
