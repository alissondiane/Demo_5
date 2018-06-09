import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { RouterModule, Routes } from '@angular/router';
import { TiendasComponent } from './tiendas/tiendas.component';
import { NuevaTiendaComponent } from './tiendas/nueva-tienda/nueva-tienda.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { NuevoEmpleadoComponent } from './empleados/nuevo-empleado/nuevo-empleado.component';
import { HistorialEmpleadoComponent } from './empleados/historial-empleado/historial-empleado.component';
import { RolesComponent } from './roles/roles.component';
import { PermisosComponent } from './permisos/permisos.component';
import { NuevoRolComponent } from './roles/nuevo-rol/nuevo-rol.component';
import { EditarTiendaComponent } from './tiendas/editar-tienda/editar-tienda.component';
import { EditarRolComponent } from './roles/editar-rol/editar-rol.component';
import { EditarEmpleadoComponent } from './empleados/editar-empleado/editar-empleado.component';
import { NavbarComponent } from './navbar/navbar.component';

const rutas: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  //{path: '', redirectTo: '/principal', pathMatch: 'full'},
  //login
  {path: 'login', component: LoginComponent},
  {path: 'login/:id', component: LoginComponent},
  //Principal
  {path: 'principal', component: PrincipalComponent},
  //Tiendas
  {path: 'tiendas', component: TiendasComponent},
  {path: 'tiendas/nuevaTienda', component: NuevaTiendaComponent},
  {path: 'tienda/editar/:id', component: EditarTiendaComponent},
  //Roles
  {path: 'roles', component: RolesComponent},
  {path: 'roles/nuevoRol', component: NuevoRolComponent},
  {path: 'rol/editar/:id', component: EditarRolComponent},
  //Empleados
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'empleado/nuevoEmpleado', component: NuevoEmpleadoComponent},
  {path: 'empleado/editar/:id', component: EditarEmpleadoComponent},
  //Permisos
  {path: 'permisos', component: PermisosComponent},
  //Historial
  {path: 'empleado/historial/:id', component: HistorialEmpleadoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    TiendasComponent,
    NuevaTiendaComponent,
    EmpleadosComponent,
    NuevoEmpleadoComponent,
    HistorialEmpleadoComponent,
    RolesComponent,
    NuevoRolComponent,
    PermisosComponent,
    EditarTiendaComponent,
    EditarRolComponent,
    EditarEmpleadoComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
