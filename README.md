# svg-line-chart-test

Simple SVG Line Graph for Angular Applications.

# Warning

Library is under active development.

# Getting started
Step 1: Install: svg-line-chart-test
NPM
`npm i svg-line-chart-test`


Step 2: Import the SvgLineChartTestModule module:

`import { SvgLineChartTestModule } from 'svg-line-chart-test';

@NgModule({
  declarations: [AppComponent],
  imports: [SvgLineChartTestModule],
  bootstrap: [AppComponent]
})
export class AppModule {}`

# Inside your HTML component:

`<lib-svg-line-chart-test [amt]="w"></lib-svg-line-chart-test>`