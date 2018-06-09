import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
//import { Empleado } from '../modelo/empleado'


@Injectable()
export class LoginService {

	//public url = 'http://localhost/calidadsw_api/web/app_dev.php/';
	public url = 'http://192.34.57.112/';
	public identidad;
	public token;
	
	constructor(private _http: Http) { }
	
	ingresar(empleado){
		let json = JSON.stringify(empleado);
		let params = "json=" + json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
		return this._http.post(this.url + "usuario/login", params, {headers: headers}).map(res => res.json());
	}

	getIdentidad(){
		let identidad = JSON.parse(localStorage.getItem('identidad'));
		if(identidad != "indefinido"){
			this.identidad = identidad;
		}else{
			this.identidad = null;
		}
		return this.identidad;
	}

	getToken(){
		let token = localStorage.getItem('token');
		if(token != "indefinido"){
			this.token = token;
		}else{
			this.token = null;
		}
		return this.token;
	}
}

