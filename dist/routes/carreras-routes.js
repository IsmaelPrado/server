"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carreras_controller_1 = require("../controllers/carreras-controller");
class CarrerasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', carreras_controller_1.carrerasController.getCarreras);
        this.router.get('/:id', carreras_controller_1.carrerasController.getByCarreras);
        this.router.post('/', carreras_controller_1.carrerasController.createCarreras);
        this.router.delete('/:id', carreras_controller_1.carrerasController.deleteCarreras);
        this.router.put('/:id', carreras_controller_1.carrerasController.updateCarrera);
    }
}
const carrerasRoutes = new CarrerasRoutes();
exports.default = carrerasRoutes.router;
