import { Historial } from './../../modelo/historial';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Empleado } from '../../modelo/empleado';
import { EmpleadoService } from '../../servicios/empleado.service';

@Component({
    selector: 'empleado/historial',
    templateUrl: './historial-empleado.component.html',
    styleUrls: [],
    providers: [EmpleadoService]
})
export class HistorialEmpleadoComponent implements OnInit{
	public empleado : Empleado;
	public historial : Historial;

	constructor(
		private empleadoServicio: EmpleadoService,
		private _route: ActivatedRoute,
  		private _router: Router,
	){}
    ngOnInit(){
    	console.log('componente historial, cargando....');
    	this.detalleEmpleado();

    }

    detalleEmpleado(){
    	this._route.params.forEach((params: Params)=>{
    		let id = params['id'];
    		this.empleadoServicio.detalleEmpleado(id).subscribe(
    			response => {
    				if(response.code == 200) {
						//this.empleado = response.data;
						let fecha = response.data['idHorario']['fecha'];
						let hExtras = response.data['idHorario']['hExtras'];
						let hSalida = response.data['idHorario']['hSalida']['timestamp'];
						let hEntrada = response.data['idHorario']['hEntrada']['timestamp'];
						this.historial = new Historial(response.data, fecha, hEntrada, hSalida, hExtras);
					}
    				else this._router.navigate(['historial'])
    			}, error => {}
    		)
    	});
    }
}