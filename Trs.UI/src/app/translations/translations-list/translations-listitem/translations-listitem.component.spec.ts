import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationsListitemComponent } from './translations-listitem.component';

describe('TranslationsListitemComponent', () => {
  let component: TranslationsListitemComponent;
  let fixture: ComponentFixture<TranslationsListitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslationsListitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslationsListitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
