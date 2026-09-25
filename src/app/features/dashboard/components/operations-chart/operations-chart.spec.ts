import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationsChart } from './operations-chart';

describe('OperationsChart', () => {
  let component: OperationsChart;
  let fixture: ComponentFixture<OperationsChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsChart],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationsChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
