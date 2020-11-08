import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'lib-svg-line-chart-test',
  templateUrl: './svg-line-chart-test.html',
  styleUrls: ['./svg-line-chart-test.scss']
})
export class SvgLineChartTestComponent implements OnInit {

  constructor() {
  console.log('worked from library') }

  ngOnInit(): void {
  }

  @Input('amt') amount: number = 0;

  stats_box = { x: 0, y: 0 };
  public move_box(e) {
    console.log(e.layerX, e.layerY);
    this.stats_box.x = e.layerX - 120;
    this.stats_box.y = e.layerY - 120;
  }

}
