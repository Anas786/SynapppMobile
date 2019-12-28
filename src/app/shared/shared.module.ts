import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConsultComponent } from './consult/consult.component';
import { DordersComponent } from './dorders/dorders.component';
import { HistoryComponent } from './history/history.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { MordersComponent } from './morders/morders.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';

let components = [
    ConsultComponent,
    DordersComponent,
    HistoryComponent,
    InsuranceComponent,
    MordersComponent,
    GeneralInfoComponent,
    

]
@NgModule({
   
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NgxMaskIonicModule,
    
  ],
  declarations:components,
  exports:components,
  providers: [      
  ],
  
})
export class SharedModule {}
