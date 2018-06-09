import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Rol} from '../modelo/rol';

@Injectable()
export class RolService {
	//public url = 'http://localhost/calidadsw_api/web/app_dev.php/';
  public url = 'http://api.erickcordova.com/';

  constructor(private _http: Http) { }

  //Servicio para listar roles
  listaRol(){
   		return this._http.get(this.url+"rol/lista").map(res => res.json()); 
  	}
  //Guardar nuevo rol
  nuevoRol(rol: Rol){
  	let json = JSON.stringify(rol);
  	let params = 'json='+json;
  	let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  	return this._http.post(this.url+'rol/nuevo', params,{headers: headers})
            .map(res => res.json());
  }
  //Editar rol
    editarRol(id, rol: Rol){
      let json = JSON.stringify(rol);
      let params = 'json='+json;
      let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
      return this._http.post(this.url+'rol/editar/'+id, params,{headers: headers})
            .map(res => res.json());
    }
    //Borrar rol
    eliminarRol(id, rol: Rol){
      let json = JSON.stringify(rol);
      let params = 'json='+json;
      let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
      return this._http.post(this.url+'rol/eliminar/'+id, params, {headers: headers})
              .map(res => res.json());
    }
    //Detalle de rol
    detalleRol(id){
       return this._http.get(this.url+"rol/detalle/"+id).map(res => res.json()); 
    }

}
