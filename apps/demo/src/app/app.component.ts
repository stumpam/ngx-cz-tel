import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-cz-tel-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'demo';

  ctrl = new FormControl('');

  ngOnInit() {
    this.ctrl.valueChanges.subscribe(val => console.log('appCmp: ', val));
  }

  slovak() {
    this.ctrl.setValue('+421800123456');
  }

  czech() {
    this.ctrl.setValue('+420800123456');
  }

  czechShort() {
    this.ctrl.setValue('800123456');
  }

  setNull() {
    this.ctrl.setValue(null);
  }
}
