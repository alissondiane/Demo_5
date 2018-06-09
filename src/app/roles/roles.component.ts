import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import {RolService} from '../servicios/rol.service';

@Component({
    selector: 'roles',
    templateUrl: './roles.component.html',
    styleUrls: ['./roles.css'],
    providers: [RolService]
})
export class RolesComponent implements OnInit{
    @ViewChild('barraRoles') barraRoles: NavbarComponent;
    public roles;

    constructor(
    	private rolServicio: RolService,
    ){}
    ngOnInit() {
        this.listarRol();
        this.barraRoles.estadoRoles("activo");   
    }

    listarRol(){
    	this.rolServicio.listaRol().subscribe(
    		response => {this.roles = response.data},
    		error => {}
    	);
    }

    onEliminarRol(id){
    	this.rolServicio.eliminarRol(id, this.roles).subscribe(
    		response => {
    			if(response.code == 400) this.listarRol();
    			else alert("Error al borrar!");
    		},
    		error => {}
    	);
    }
}