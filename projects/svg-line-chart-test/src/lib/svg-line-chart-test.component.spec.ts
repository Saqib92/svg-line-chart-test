import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgLineChartTestComponent } from './svg-line-chart-test.component';

describe('SvgLineChartTestComponent', () => {
  let component: SvgLineChartTestComponent;
  let fixture: ComponentFixture<SvgLineChartTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgLineChartTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgLineChartTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
