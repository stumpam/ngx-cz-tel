import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const TEL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CzTelComponent),
  multi: true,
};

@Component({
  selector: 'ngx-cz-tel',
  template: '<input #field type="string" [disabled]="disabled">',
  providers: [TEL_VALUE_ACCESSOR],
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '(input)': 'onInput($event.target.value)',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CzTelComponent implements ControlValueAccessor, OnInit {
  @ViewChild('field', { static: true }) field: ElementRef<HTMLInputElement>;
  @Input() attributes = {};

  touchedFn: any = null;
  changeFn: any = null;
  disabled = false;
  prevState = false;

  prefix = '';

  constructor(
    private readonly renderer: Renderer2,
    private readonly cd: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    Object.entries(this.attributes).forEach(([attr, value]) => {
      this.renderer.setAttribute(
        this.field.nativeElement,
        attr,
        value.toString(),
      );
    });
  }

  writeValue(obj: string | null): void {
    if (obj === null || obj === '') {
      this.updateValue('');
      this.prefix = '';
      return;
    }

    const prefix = /^(\+42[01])/.exec(obj);

    this.prefix = prefix?.[1] || '';

    this.onInput(obj);
  }

  registerOnChange(fn: any): void {
    this.changeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.touchedFn = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cd.markForCheck();
  }

  onInput(value: string) {
    const lastChar = value.slice(-1);
    if (Number.isNaN(+lastChar) && !(value.length === 1 && lastChar === '+')) {
      this.updateValue(value.slice(0, -1));
      return;
    }

    const prefix = /^(\+42[01])/.exec(value);

    if (prefix?.[1]) {
      this.prefix = prefix[1];
    } else {
      this.prefix = '+420';
    }

    if (value.length < 6) {
      const failed = [...value].find(
        (char, length) =>
          (length === 0 && char !== '+') ||
          (length === 1 && char !== '4') ||
          (length === 2 && char !== '2') ||
          (length === 3 && char !== '0' && char !== '1') ||
          (length === 4 && char !== ' '),
      );

      if (failed) {
        this.updateValue(`${this.prefix || '+420'} ${lastChar}`);
      }

      return;
    }

    value = value
      .replace(this.prefix, '')
      .replace(/\s/g, '')
      .replace(/\+/g, '');

    const send = value.length === 9;

    if (value.length > 9) {
      value = value.slice(0, 9);
    }

    const formattedValue = [...value]
      .map((d, i) => (i % 3 === 0 ? ' ' + d : d))
      .join('')
      .trim();

    const prefixedValue = `${this.prefix} ${formattedValue}`;

    this.updateValue(prefixedValue);

    if (this.prevState !== send) {
      this.changeFn?.(send ? prefixedValue.replace(/\s/g, '') : null);
    }
    this.prevState = send;
  }

  updateValue(value: string) {
    this.renderer.setProperty(this.field.nativeElement, 'value', value);
  }
}
