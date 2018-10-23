import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AreaClientesPage } from './area-clientes';

@NgModule({
  declarations: [
    AreaClientesPage,
  ],
  imports: [
    IonicPageModule.forChild(AreaClientesPage),
  ],
})
export class AreaClientesPageModule {}
