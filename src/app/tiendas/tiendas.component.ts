import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TiendaService } from '../servicios/tienda.service';

@Component({
  selector: 'tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.css'],
  providers: [TiendaService]
})
export class TiendasComponent implements OnInit {
	@ViewChild('barraTienda') barraTienda : NavbarComponent;

	public tiendas;
  constructor(
  	private tiendaServicio: TiendaService,
  	) { }

  ngOnInit() {
	  this.listaTienda();
	  this.barraTienda.estadoTienda("activo");
  }

  listaTienda(){
    	this.tiendaServicio.listaTienda().subscribe(
    		response => {this.tiendas = response.data},
    		error => {}
    	);
    }

    onEliminarTienda(id){
    	this.tiendaServicio.eliminarTienda(id, this.tiendas).subscribe(
    		response => {
    			if(response.code == 400) this.listaTienda();
    			else alert("Error al borrar!");
    		},
    		error => {}
    	);
    }

}
