import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoginService } from '../servicios/login.service';
import { Empleado } from '../modelo/empleado';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: [],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
	public usuario;
	public errorMensaje;
  public identidad;
  public token;

  constructor(
  	private _loginService: LoginService,
    private _route: ActivatedRoute,
    private _router: Router
  	) { }

  ngOnInit() {

    this._route.params.subscribe(params => {
      let logout = +params['id'];
      if(logout == 1){
        localStorage.removeItem('identidad');
        localStorage.removeItem('token');
        this.identidad = null;
        this.token = null;
        window.location.href = "/login";
      }
    });
  	
  	this.usuario = {
  		"email":"",
  		"password": "",
      "gethash": "false"
  	};
    /*
    let ide = this._loginService.getIdentidad();
    let tok = this._loginService.getToken();
    console.log(ide);
    console.log(tok);*/
    let identidad = this._loginService.getIdentidad();
    if(identidad != null && identidad.sub){
      this._router.navigate(["/"])
    }
  }

  onSubmit(){
    console.log(this.usuario);
    this._loginService.ingresar(this.usuario).subscribe(
        /*response => {
          console.log(response);
        },*/
        response => {
           let identidad = response;
           this.identidad = identidad;
           if(this.identidad.lenght <= 1){
             alert("Error en el servidor!");
           }else{
             if(!this.identidad.status){
               localStorage.setItem('identidad', JSON.stringify(identidad));
               //console.log(localStorage.getItem('identidad'));
               //OBTENER EL TOKEN :O 
               this.usuario.gethash = "true";
               this._loginService.ingresar(this.usuario).subscribe(
                 response => {
                   let token = response;
                   this.token = token;
                   if(this.token.lenght <= 0){
                     alert("Error en el servidor!");
                   }else{
                     if(!this.token.status){
                       localStorage.setItem('token', token);
                       //REDIRECCION
                       window.location.href = "/principal";
                     }
                   }
                 },
                 error => {
                    this.errorMensaje = <any>error;
                    if(this.errorMensaje != null){
                      console.log(this.errorMensaje);
                      alert("Error en la petición");
                    }
                  }
                );
             }
           }
        },
        error => {
          this.errorMensaje = <any>error;
          if(this.errorMensaje != null){
            console.log(this.errorMensaje);
            alert("Error en la petición");
          }
        }
      );
  }
}
