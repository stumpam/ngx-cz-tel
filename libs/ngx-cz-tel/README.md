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

Works with [formly](https://formly.dev)
