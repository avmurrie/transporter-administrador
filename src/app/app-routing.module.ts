import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuproveedorComponent} from './pages/menuproveedor/menuproveedor.component';
import {MenuusuarioComponent} from './pages/menuusuario/menuusuario.component';
import {EmpresaComponent} from './pages/empresa/empresa.component';
import { ChatComponent } from './pages/chat/chat.component';

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
  },
  {
    path:'chat',
    component:ChatComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
