import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { TiendaService } from '../../servicios/tienda.service';
import { Tienda } from '../../modelo/tienda';

@Component({
  selector: 'tienda/editar',
  templateUrl: './editar-tienda.component.html',
  styleUrls: ['./editar-tienda.component.css'],
  providers: [TiendaService]
})
export class EditarTiendaComponent implements OnInit {
	public tienda: Tienda;
  constructor(
  	private tiendaServicio: TiendaService,
  	private route: ActivatedRoute,
  	private routes: Router
  	) {
  	this.tienda = new Tienda ("", "","");
  }

  ngOnInit() {
  	this.detalleTienda();
  }

  editarTienda(){
  	console.log(this.tienda);
  	this.route.params.forEach((params: Params) =>{
      let id = params['id'];
      this.tiendaServicio.editarTienda(id, this.tienda).subscribe(
        response => {
        if(response.code == 400) this.routes.navigate(['/tiendas']);
        else console.log(response);
      }, error => {
        
      }
      );  
    })
  }

  detalleTienda(){
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.tiendaServicio.detalleTienda(id).subscribe(
        response => {
          if(response.code == 200 ) this.tienda = response.data;
          else this.routes.navigate(['tiendas'])
        }, error => {}
        )
    }

      );
  }
}
