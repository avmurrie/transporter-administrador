import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuproveedorComponent} from './pages/menuproveedor/menuproveedor.component';
import {MenuusuarioComponent} from './pages/menuusuario/menuusuario.component';
import {EmpresaComponent} from './pages/empresa/empresa.component';
import { ChatComponent } from './pages/chat/chat.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import { ProvWebComponent } from './pages/prov-web/prov-web.component';
import { RegistroProvComponent } from './pages/registro-prov/registro-prov.component';
import { LoginComponent } from './pages/login/login.component';
import {FormservicioComponent} from './pages/formservicio/formservicio.component';
import {HistorialComponent} from './pages/historial/historial.component';
import {HistorialproveedorComponent} from './pages/historialproveedor/historialproveedor.component';
import {HistorialclienteComponent} from './pages/historialcliente/historialcliente.component';
import {HistorialservicioComponent} from './pages/historialservicio/historialservicio.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path:'proveedor',
    component:MenuproveedorComponent
  },
  {
    path:'usuarios',
    component:MenuusuarioComponent
  },
  {
    path:'empresa',
    component:EmpresaComponent
  },
  {
    path:'chat',
    component:ChatComponent
  },
  {  
    path:'dashboard',
    component:DashboardComponent
  },
  {  
    path:'registroProv',
    component:RegistroProvComponent
  },
  {  
    path:'inicioProv',
    component:ProvWebComponent
  },
  {  
    path:'login',
    component:LoginComponent},
  {
    path:'servicio',
    component:FormservicioComponent
  },
  {
    path:'historial',
    component:HistorialComponent
  }
  ,
  {
    path:'historialproveedor',
    component:HistorialproveedorComponent
  }
  ,
  {
    path:'historialcliente',
    component:HistorialclienteComponent
  },
  {
    path:'historialservicio',
    component:HistorialservicioComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
