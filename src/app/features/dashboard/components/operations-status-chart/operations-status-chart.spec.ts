import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationsStatusChart } from './operations-status-chart';

describe('OperationsStatusChart', () => {
  let component: OperationsStatusChart;
  let fixture: ComponentFixture<OperationsStatusChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsStatusChart],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationsStatusChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
