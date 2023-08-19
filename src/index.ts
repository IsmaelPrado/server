import express, {Application} from 'express';
import indexRoutes from './routes/index-routes';
import empleadosRoutes from './routes/empleados-routes';
import morgan from 'morgan';
import cors from 'cors';
import citasRoutes from './routes/citas-routes';
import loginRoutes from './routes/login-routes';
import registroRoutes from './routes/registro-routes';
import psicologosRoutes from './routes/psicologos-routes';
import consultorioRoutes from './routes/consultorio-routes';
import carrerasRoutes from './routes/carreras-routes';

class Server{
    public app: Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json()); //acepta objetos tipo json
        this.app.use(express.urlencoded({extended: false})); //acepta formularios html
    }
    routes(): void{
        this.app.use('/', indexRoutes);
        this.app.use('/empleados', empleadosRoutes);
        this.app.use('/citas', citasRoutes);
        this.app.use('/login', loginRoutes);
        this.app.use('/registro', registroRoutes);
        this.app.use('/psicologos', psicologosRoutes);
        this.app.use('/consultorio',consultorioRoutes);
        this.app.use('/carreras',carrerasRoutes);
    }
    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'))
        })
    }
}
const server = new Server();
server.start();