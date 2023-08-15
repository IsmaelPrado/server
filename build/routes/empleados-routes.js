"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleados_controller_1 = require("../controllers/empleados-controller");
class EmpleadosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', empleados_controller_1.empeleadosController.getEmpleados);
        this.router.get('/:id', empleados_controller_1.empeleadosController.getByIdEmpleados);
        this.router.post('/', empleados_controller_1.empeleadosController.createEmpleados);
        this.router.put('/:id', empleados_controller_1.empeleadosController.updateEmpleados);
        this.router.delete('/:id', empleados_controller_1.empeleadosController.deleteEmpleados);
    }
}
const empleadosRoutes = new EmpleadosRoutes();
exports.default = empleadosRoutes.router;
