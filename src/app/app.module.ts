import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormproveedorComponent } from './pages/formproveedor/formproveedor.component';
import {FormservicioComponent} from './pages/formservicio/formservicio.component';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MenuComponent } from './pages/menu/menu.component';
import { MenuproveedorComponent } from './pages/menuproveedor/menuproveedor.component';
import {MatTabsModule} from '@angular/material/tabs';
import {HttpClientModule} from '@angular/common/http';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import{ProveedorService} from './services/proveedor.service';
import { MenuusuarioComponent } from './pages/menuusuario/menuusuario.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { ChatComponent } from './pages/chat/chat.component';
import { LoginComponent } from './pages/login/login.component';
import { FiltroPipe } from './services/filtro.pipe';
import { AuthService } from '../app/services/auth.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {ShowHidePasswordModule} from 'ngx-show-hide-password';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';

import {ChatService} from './services/chat.service';
import { FormtarifasComponent } from './pages/formtarifas/formtarifas.component';
import { FormeditservicioComponent } from './pages/formeditservicio/formeditservicio.component';
import { FormedittarifaComponent } from './pages/formedittarifa/formedittarifa.component';
@NgModule({
  declarations: [
    AppComponent,
    FormproveedorComponent,
    FormservicioComponent,
    MenuComponent,
    MenuproveedorComponent,
    MenuusuarioComponent,
    EmpresaComponent,
    ChatComponent,
    LoginComponent,
    FiltroPipe,
    DashboardComponent,
    FormtarifasComponent,
    FormeditservicioComponent,
    FormedittarifaComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    CdkStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    HttpClientModule,
    MatSlideToggleModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    ShowHidePasswordModule ,
    MatListModule,
    MatGridListModule,
    MatSidenavModule
  ],
  providers: [ProveedorService,AuthService, ChatService ],
  entryComponents:[MatDialogModule,MatSelectModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
