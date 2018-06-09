import { Empleado } from './empleado';
export class Historial{
    constructor(
        public datosEmpleado : Empleado,
        public fecha : string,
        public hEntrada : string,
        public hSalida : string,
        public hExtras : string
    ){}
}