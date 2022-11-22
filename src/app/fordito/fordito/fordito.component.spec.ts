import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForditoComponent } from './fordito.component';

describe('ForditoComponent', () => {
  let component: ForditoComponent;
  let fixture: ComponentFixture<ForditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForditoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
