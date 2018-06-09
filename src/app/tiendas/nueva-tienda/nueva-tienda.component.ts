import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Tienda } from '../../modelo/tienda';
import { TiendaService } from '../../servicios/tienda.service';

@Component({
  selector: 'tiendas/nuevaTienda',
  templateUrl: './nueva-tienda.component.html',
  styleUrls: [],
  providers: [TiendaService]
})
export class NuevaTiendaComponent implements OnInit {
	public tienda: Tienda;
  constructor(private tiendaServicio: TiendaService,
  	private route: ActivatedRoute,
  	private router: Router
  	) {
  	this.tienda = new Tienda ("", " ","");  	
  	}

  ngOnInit() {
  }

  registrarTienda(){
  	console.log(this.tienda);
  	this.tiendaServicio.nuevaTienda(this.tienda).subscribe(
  		response => {
  			if(response.code == 402) this.router.navigate(['/tiendas']);
  			else console.log(response);
  		},
  		error => {}
  	);
  }

}
