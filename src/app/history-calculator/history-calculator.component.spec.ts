import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCalculatorComponent } from './history-calculator.component';

describe('HistoryCalculatorComponent', () => {
  let component: HistoryCalculatorComponent;
  let fixture: ComponentFixture<HistoryCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
