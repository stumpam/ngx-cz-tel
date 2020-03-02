import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'ngx-cz-tel-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'demo';

  ctrl = new FormControl('');

  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'tel',
      type: 'tel',
      templateOptions: {
        label: 'Phone number',
        placeholder: '+420 000 000 000',
        required: true,
        attributes: {
          inputmode: 'tel',
        },
      },
    },
  ];

  ngOnInit() {
    this.ctrl.valueChanges.subscribe(val => console.log('appCmp: ', val));
    this.form.valueChanges.subscribe(val => console.log('formly: ', val));
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
