import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TransferPage } from './transfer.page';
import { SharedModule } from '../shared/shared.module';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';
const routes: Routes = [
  {
    path: '',
    component: TransferPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,    
    SharedModule,   
    RouterModule.forChild(routes)
  ],
  declarations: [TransferPage]
})
export class TransferPageModule {}
