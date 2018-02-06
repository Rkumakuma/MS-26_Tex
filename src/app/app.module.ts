import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CharPage } from '../pages/char/char';
import { FigPage } from '../pages/fig/fig';
import { MathPage } from '../pages/math/math';
import { OtherPage } from '../pages/other/other';
import { PackPage } from '../pages/pack/pack';
import { QaPage } from '../pages/qa/qa';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CharPage,
    FigPage,
    MathPage,
    OtherPage,
    PackPage,
    QaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CharPage,
    FigPage,
    MathPage,
    OtherPage,
    PackPage,
    QaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
