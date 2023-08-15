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
exports.citasController = void 0;
const database_1 = require("../database");
class CitasController {
    getCitas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.pool.query('SELECT * FROM tb_citas');
            res.json(result[0]);
        });
    }
    getByCita(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.pool.query('SELECT * FROM tb_citas WHERE id_cita = ?', [id]);
            res.json(result[0]);
        });
    }
    createCitas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.pool.query('INSERT INTO tb_citas SET ?', [req.body]);
            res.json({ message: 'Registro guardado' });
        });
    }
    deleteCita(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.pool.query('DELETE FROM tb_citas WHERE id_cita= ?', [id]);
            res.json({ message: 'Registro Eliminado' });
        });
    }
    updateCita(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.pool.query('UPDATE tb_citas SET ? WHERE id_cita= ?', [req.body, id]);
            res.json({ message: 'Registro Actualizado' });
        });
    }
}
exports.citasController = new CitasController();
