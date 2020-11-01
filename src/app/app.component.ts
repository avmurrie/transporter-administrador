import { Component } from '@angular/core';
import {MatDialog,MatDialogConfig } from '@angular/material/dialog';
import {FormproveedorComponent} from '../app/pages/formproveedor/formproveedor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  constructor(private dialog: MatDialog){}
  
  openDialog() {
    console.log('que mas mi perro x2');
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=false;
    dialogConfig.autoFocus=true;
    dialogConfig.height='80%';
    dialogConfig.width='70%'
    const dialogRef =  this.dialog.open(FormproveedorComponent, dialogConfig);
  }

}
