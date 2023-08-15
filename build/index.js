"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index-routes"));
const empleados_routes_1 = __importDefault(require("./routes/empleados-routes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const citas_routes_1 = __importDefault(require("./routes/citas-routes"));
const login_routes_1 = __importDefault(require("./routes/login-routes"));
const registro_routes_1 = __importDefault(require("./routes/registro-routes"));
const psicologos_routes_1 = __importDefault(require("./routes/psicologos-routes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json()); //acepta objetos tipo json
        this.app.use(express_1.default.urlencoded({ extended: false })); //acepta formularios html
    }
    routes() {
        this.app.use('/', index_routes_1.default);
        this.app.use('/empleados', empleados_routes_1.default);
        this.app.use('/citas', citas_routes_1.default);
        this.app.use('/login', login_routes_1.default);
        this.app.use('/registro', registro_routes_1.default);
        this.app.use('/psicologos', psicologos_routes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
