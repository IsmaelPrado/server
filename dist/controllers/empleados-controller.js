"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.empeleadosController = void 0;
const database_1 = require("../database");
class EmpleadosController {
    getEmpleados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.pool.query('SELECT * FROM empleados');
            res.json(result[0]);
        });
    }
    getByIdEmpleados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.pool.query('SELECT * FROM empleados WHERE id = ?', [id]);
            res.json(result[0]);
        });
    }
    createEmpleados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.pool.query('INSERT INTO empleados SET ?', [req.body]);
            res.json({ message: 'Registro guardado' });
        });
    }
    deleteEmpleados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.pool.query('DELETE FROM empleados WHERE id= ?', [id]);
            res.json({ message: 'Registro eliminado' });
        });
    }
    updateEmpleados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.pool.query('UPDATE empleados SET ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Registro actualizado' });
        });
    }
}
exports.empeleadosController = new EmpleadosController();
