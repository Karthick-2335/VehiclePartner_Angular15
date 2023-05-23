import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsFromsCollapseComponent } from './forms-froms-collapse.component';

describe('FormsFromsCollapseComponent', () => {
  let component: FormsFromsCollapseComponent;
  let fixture: ComponentFixture<FormsFromsCollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsFromsCollapseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsFromsCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
