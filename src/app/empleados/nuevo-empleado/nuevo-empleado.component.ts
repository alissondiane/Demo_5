import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Empleado } from '../../modelo/empleado';
import { EmpleadoService } from '../../servicios/empleado.service';

@Component({
    selector: 'nuevo/empleado',
    templateUrl: './nuevo-empleado.component.html',
    styleUrls: [],
    providers: [EmpleadoService]
})

export class NuevoEmpleadoComponent implements OnInit{
    public empleado: Empleado;
    constructor(
    	private empleadoServicio: EmpleadoService,
  		private route: ActivatedRoute,
  		private router: Router
    ) {
    	this.empleado = new Empleado ("","","","","","","","","","","","","");
    }

    ngOnInit() {
    }

    registrarEmpleado(){
  	console.log(this.empleado);
  	this.empleadoServicio.nuevoEmpleado(this.empleado).subscribe(
  		response => {
  			if(response.code == 402) this.router.navigate(['/empleados']);
  			else console.log(response);
  		},
  		error => {}
  	);
  }
}