"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registro_controller_1 = require("../controllers/registro-controller");
class RegistrosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', registro_controller_1.registrosController.getRegistros);
        this.router.get('/:id', registro_controller_1.registrosController.getByIdRegistro);
        this.router.post('/', registro_controller_1.registrosController.createRegistros);
        this.router.put('/:id', registro_controller_1.registrosController.updateRegistros);
        this.router.delete('/:id', registro_controller_1.registrosController.deleteRegistros);
    }
}
const registrosRoutes = new RegistrosRoutes();
exports.default = registrosRoutes.router;
