import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationsTypeChart } from './operations-type-chart';

describe('OperationsTypeChart', () => {
  let component: OperationsTypeChart;
  let fixture: ComponentFixture<OperationsTypeChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsTypeChart],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationsTypeChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
