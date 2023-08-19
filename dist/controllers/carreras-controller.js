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
exports.carrerasController = void 0;
const database_1 = require("../database");
class CarrerasController {
    getCarreras(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.pool.query('SELECT * FROM tb_carreras');
            res.json(result[0]);
        });
    }
    getByCarreras(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.pool.query('SELECT * FROM tb_carreras WHERE id_carrera = ?', [id]);
            res.json(result[0]);
        });
    }
    createCarreras(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.pool.query('INSERT INTO tb_carreras SET ?', [req.body]);
            res.json({ message: 'Registro guardado' });
        });
    }
    deleteCarreras(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.pool.query('DELETE FROM tb_carreras WHERE id_carrera= ?', [id]);
            res.json({ message: 'Registro Eliminado' });
        });
    }
    updateCarrera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.pool.query('UPDATE tb_carreras SET ? WHERE id_carrera= ?', [req.body, id]);
            res.json({ message: 'Registro Actualizado' });
        });
    }
}
exports.carrerasController = new CarrerasController();
