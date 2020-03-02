import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormlyModule } from '@ngx-formly/core';
import { NgxCzTelModule } from '@stumpam/ngx-cz-tel';

import { AppComponent } from './app.component';
import { FormlyComponent } from './formly/formly.component';

@NgModule({
  declarations: [AppComponent, FormlyComponent],
  imports: [
    BrowserModule,
    NgxCzTelModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [{ name: 'tel', component: FormlyComponent }],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
