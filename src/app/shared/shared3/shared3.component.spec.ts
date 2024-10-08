import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shared3Component } from './shared3.component';

describe('Shared3Component', () => {
  let component: Shared3Component;
  let fixture: ComponentFixture<Shared3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shared3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shared3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
