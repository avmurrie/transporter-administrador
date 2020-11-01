import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuproveedorComponent} from './pages/menuproveedor/menuproveedor.component';
import {MenuusuarioComponent} from './pages/menuusuario/menuusuario.component';
import {EmpresaComponent} from './pages/empresa/empresa.component';

const routes: Routes = [
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
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
