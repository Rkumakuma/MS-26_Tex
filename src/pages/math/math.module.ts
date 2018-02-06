import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MathPage } from './math';

@NgModule({
  declarations: [
    MathPage,
  ],
  imports: [
    IonicPageModule.forChild(MathPage),
  ],
})
export class MathPageModule {}
