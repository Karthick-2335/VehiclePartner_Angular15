import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsMultipleFormsComponent } from './forms-multiple-forms.component';

describe('FormsMultipleFormsComponent', () => {
  let component: FormsMultipleFormsComponent;
  let fixture: ComponentFixture<FormsMultipleFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsMultipleFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsMultipleFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
