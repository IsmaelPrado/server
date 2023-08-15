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
exports.registrosController = void 0;
const database_1 = require("../database");
class RegistrosController {
    getRegistros(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.pool.query('SELECT * FROM tb_alumnos');
            res.json(result[0]);
        });
    }
    getByIdRegistro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.pool.query('SELECT * FROM tb_alumnos WHERE id_alumno = ?', [id]);
            res.json(result[0]);
        });
    }
    createRegistros(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.pool.query('INSERT INTO tb_alumnos SET ?', [req.body]);
            res.json({ message: 'Registro guardado' });
        });
    }
    deleteRegistros(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.pool.query('DELETE FROM tb_alumnos WHERE id= ?', [id]);
            res.json({ message: 'Registro eliminado' });
        });
    }
    updateRegistros(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.pool.query('UPDATE tb_alumnos SET ? WHERE id_alumno = ?', [req.body, id]);
            res.json({ message: 'Registro actualizado' });
        });
    }
}
exports.registrosController = new RegistrosController();
