import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Tienda} from '../modelo/tienda';

@Injectable()
export class TiendaService {
	//public url = 'http://localhost/calidadsw_api/web/app_dev.php/';
  public url = 'http://192.34.57.112/';
  constructor(private _http: Http) { }

  //Servicio para listar tiendas
  listaTienda(){
   		return this._http.get(this.url+"tienda/lista").map(res => res.json()); 
  	}
  //Guardar nueva tienda
  nuevaTienda(tienda: Tienda){
  	let json = JSON.stringify(tienda);
  	let params = 'json='+json;
  	let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  	return this._http.post(this.url+'tienda/nuevo', params,{headers: headers})
            .map(res => res.json());
  }
  //Editar tienda
    editarTienda(id, tienda: Tienda){
      let json = JSON.stringify(tienda);
      let params = 'json='+json;
      let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
      return this._http.post(this.url+'tienda/editar/'+id, params,{headers: headers})
            .map(res => res.json());
    }
    //Borrar tienda
    eliminarTienda(id, tienda: Tienda){
      let json = JSON.stringify(tienda);
      let params = 'json='+json;
      let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
      return this._http.post(this.url+'tienda/eliminar/'+id, params, {headers: headers})
              .map(res => res.json());
    }
    //Detalle de tienda
    detalleTienda(id){
       return this._http.get(this.url+"tienda/detalle/"+id).map(res => res.json()); 
    }
}
