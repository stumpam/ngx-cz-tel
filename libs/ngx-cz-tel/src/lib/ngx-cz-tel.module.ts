import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CzTelComponent } from './components/cz-tel.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CzTelComponent],
  exports: [CzTelComponent]
})
export class NgxCzTelModule {}
