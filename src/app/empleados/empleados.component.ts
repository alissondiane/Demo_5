import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpleadoService } from '../servicios/empleado.service';

@Component({
    selector: 'empleado/lista',
    templateUrl: './empleados.component.html',
    styleUrls: ['./empleados.css'],
    providers: [EmpleadoService]
})
export class EmpleadosComponent implements OnInit {
    @ViewChild('barraEmpleados') barraEmpleados:NavbarComponent;
	public empleados;

    constructor(
    	private empleadoServicio: EmpleadoService,
    ) { }

    ngOnInit() {
        this.listaEmpleado();
        this.barraEmpleados.estadoEmpleados("activo");
    }

    listaEmpleado(){
    	this.empleadoServicio.listaEmpleado().subscribe(
    		response => {
    			this.empleados = response.data;
    		},
    		error => {

    		}
    	)
    }

    onEliminarEmpleado(id){
        this.empleadoServicio.eliminarEmpleado(id, this.empleados).subscribe(
            response => {
                if(response.code == 400) this.listaEmpleado();
                else alert("Error al borrar!");
            },
            error => {}
        );
    }
}
