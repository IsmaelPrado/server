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
exports.consultorioController = void 0;
const database_1 = require("../database");
class ConsultorioController {
    getConsultorio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.pool.query('SELECT * FROM tb_consultorio');
            res.json(result[0]);
        });
    }
    getByConsultorio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_consultorio } = req.params;
            const result = yield database_1.pool.query('SELECT * FROM tb_consultorio WHERE id_consultorio = ?', [id_consultorio]);
            res.json(result[0]);
        });
    }
    createConsultorio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.pool.query('INSERT INTO tb_consultorio SET ?', [req.body]);
                res.json({ message: 'Agenda Guardada' });
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error('Error al crear Agenda:', error);
                    res.status(500).json({ error: 'Error al crear Agenda', details: error.message });
                }
                else {
                    console.error('Error al crear tipos:', error);
                    res.status(500).json({ error: 'Error al crear Agenda' });
                }
            }
        });
    }
    updateConsultorio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_consultorio } = req.params;
            yield database_1.pool.query('UPDATE tb_consultorio SET ? WHERE id_consultorio = ?', [req.body, id_consultorio]);
            res.json({ message: 'Agenda Actualizada' });
        });
    }
    deleteConsultorio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_consultorio } = req.params;
            yield database_1.pool.query('DELETE FROM tb_consultorio WHERE id_consultorio = ?', [id_consultorio]);
            res.json({ message: 'Agenda Eliminada' });
        });
    }
}
exports.consultorioController = new ConsultorioController();
