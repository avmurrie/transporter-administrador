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

@NgModule({
  declarations: [
    AppComponent,
    FormproveedorComponent,
    MenuComponent,
    MenuproveedorComponent,
    MenuusuarioComponent,
    EmpresaComponent
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    HttpClientModule,
    MatSlideToggleModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  providers: [ProveedorService],
  entryComponents:[MatDialogModule,MatSelectModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
