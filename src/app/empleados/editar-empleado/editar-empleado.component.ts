import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Empleado } from '../../modelo/empleado';
import { EmpleadoService } from '../../servicios/empleado.service';

@Component({
  selector: 'empleado/editar',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css'],
  providers: [EmpleadoService]
})
export class EditarEmpleadoComponent implements OnInit {
	public empleado: Empleado;
  constructor(
  	private empleadoServicio: EmpleadoService,
  	private route: ActivatedRoute,
  	private router: Router
  ) {
  	this.empleado = new Empleado ("","","","","","","","","","","", "","");
  }

  ngOnInit() {
    this.detalleEmpleado();
  }

  editarEmpleado(){
  	console.log(this.empleado);
  	this.route.params.forEach((params: Params) =>{
      let id = params['id'];
      this.empleadoServicio.editarEmpleado(id, this.empleado).subscribe(
        response => {
        if(response.code == 400) this.router.navigate(['/empleados']);
        else console.log(response);
      }, error => {
        
      }
      );  
    })
  }

  detalleEmpleado(){
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.empleadoServicio.detalleEmpleado(id).subscribe(
        response => {
          if(response.code == 200 ) this.empleado = response.data;
          else this.router.navigate(['empleado'])
        }, error => {}
        )
    }

      );
  }


}
