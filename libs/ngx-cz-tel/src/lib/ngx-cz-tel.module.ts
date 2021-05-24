import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CzTelDirective } from './directives/cz-tel.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [CzTelDirective],
  exports: [CzTelDirective],
})
export class NgxCzTelModule {}
