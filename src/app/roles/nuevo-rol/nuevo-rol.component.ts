import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Rol } from '../../modelo/rol';
import { RolService } from '../../servicios/rol.service';

@Component({
    selector: 'roles/nuevoRol',
    templateUrl: './nuevo-rol.component.html',
    styleUrls: [],
    providers: [RolService]
})
export class NuevoRolComponent implements OnInit{
	public rol: Rol;

	constructor(private rolServicio: RolService,
  	private route: ActivatedRoute,
  	private router: Router
  	) {
  	this.rol = new Rol ("", " ");  	
  	}

    ngOnInit(){

    }

    registrarRol(){
  	console.log(this.rol);
  	this.rolServicio.nuevoRol(this.rol).subscribe(
  		response => {
  			if(response.code == 402) this.router.navigate(['/roles']);
  			else console.log(response);
  		},
  		error => {}
  	);
  }

}