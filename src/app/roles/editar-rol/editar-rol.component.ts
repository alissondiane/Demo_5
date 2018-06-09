import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { RolService } from '../../servicios/rol.service';
import { Rol } from '../../modelo/rol';

@Component({
  selector: 'rol/editar',
  templateUrl: './editar-rol.component.html',
  styleUrls: [],
  providers: [RolService]
})
export class EditarRolComponent implements OnInit {
	public rol: Rol;
  constructor(
  	private rolServicio: RolService,
  	private route: ActivatedRoute,
  	private routes: Router
  	) {
  		this.rol = new Rol ('','');
  	}

  ngOnInit() {
    this.detalleRol();
  }

  editarRol(){
  	console.log(this.rol);
  	this.route.params.forEach((params: Params) =>{
      let id = params['id'];
      this.rolServicio.editarRol(id, this.rol).subscribe(
        response => {
        if(response.code == 400) this.routes.navigate(['/roles']);
        else console.log(response);
      }, error => {
        
      }
      );  
    })
  }

  detalleRol(){
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.rolServicio.detalleRol(id).subscribe(
        response => {
          if(response.code == 200 ) this.rol = response.data;
          else this.routes.navigate(['roles'])
        }, error => {}
        )
    }

      );
  }

}
