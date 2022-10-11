import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { ButtonModule } from 'primeng/button';
// import { CardModule } from 'primeng/card';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimeNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
