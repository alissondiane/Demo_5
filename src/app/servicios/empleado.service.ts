import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import { Empleado } from '../modelo/empleado';

@Injectable()
export class EmpleadoService {
	//public url = 'http://localhost/calidadsw_api/web/app_dev.php/';
	public url = 'http://192.34.57.112/';

  constructor(private _http: Http) { }
  //Servicio para listar empleados
  listaEmpleado(){
   		return this._http.get(this.url+"usuario/lista").map(res => res.json()); 
  	}
  //Guardar nuevo empleado
  nuevoEmpleado(empleado: Empleado){
  	let json = JSON.stringify(empleado);
  	let params = 'json='+json;
  	let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  	return this._http.post(this.url+'usuario/nuevo', params,{headers: headers})
            .map(res => res.json());
  }
  //Editar empleado
    editarEmpleado(id, empleado: Empleado){
      let json = JSON.stringify(empleado);
      let params = 'json='+json;
      let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
      return this._http.post(this.url+'usuario/editar/'+id, params,{headers: headers})
            .map(res => res.json());
    }
    //Borrar empleado
    eliminarEmpleado(id, empleado: Empleado){
      let json = JSON.stringify(empleado);
      let params = 'json='+json;
      let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
      return this._http.post(this.url+'usuario/eliminar/'+id, params, {headers: headers})
              .map(res => res.json());
    }
    //Detalle del empleado
    detalleEmpleado(id){
       return this._http.get(this.url+"usuario/detalle/"+id).map(res => res.json()); 
    }

}
