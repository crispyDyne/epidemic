// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MaterialModule } from './material.module';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlotComponent } from './tools/plot/plot.component';

// Chart imports
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { PlotsComponent } from './plots/plots.component';
import { NumberKMBTPipe } from './number-kmbt.pipe';
import { NavigationComponent } from './navigation/navigation.component';
import { ConPresetComponent } from './controls/con-preset/con-preset.component';
import { ConDragChartComponent } from './controls/con-drag-chart/con-drag-chart.component';
import { ConDiseaseComponent } from './controls/con-disease/con-disease.component';
import { ConPlotComponent } from './controls/con-plot/con-plot.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlotComponent,
    PlotsComponent,
    NumberKMBTPipe,
    NavigationComponent,
    ConPresetComponent,
    ConDragChartComponent,
    ConDiseaseComponent,
    ConPlotComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    ChartsModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
