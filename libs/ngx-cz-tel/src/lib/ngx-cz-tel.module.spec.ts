import { async, TestBed } from '@angular/core/testing';
import { NgxCzTelModule } from './ngx-cz-tel.module';

describe('NgxCzTelModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxCzTelModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgxCzTelModule).toBeDefined();
  });
});
