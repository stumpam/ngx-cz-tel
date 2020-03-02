# NgxCzTel

Angular masked input for czech/slovak phone numbers.

Automatically adds +42(0|1) as prefix.

Emits on validity change only null or full phone number.

## Quick Start

1. Import NgxCzTel to your project

```typescript
import { NgxCzTelModule } from '@stumpam/ngx-cz-tel';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxCzTelModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

2. Use in HTML template

```HTML
<ngx-cz-tel [formControl]="ctrl"></ngx-cz-tel>
```

### Works with [formly](https://formly.dev)

If you want to add attributes directly to input element make custom Formly field and initialize it on `ngOnInit`

```typescript
ngOnInit() {
    this.attributes = {
      id: this.id,
      ...this.to.attributes,
    };
  }
```

and use it in the template

```HTML
<ngx-cz-tel [formControl]="formControl" [attributes]="attributes"></ngx-cz-tel>
```

> ⚠ Caution
>
> Attributes are bound just once on ngOnIput hook. Changes are matter of future improvements.
