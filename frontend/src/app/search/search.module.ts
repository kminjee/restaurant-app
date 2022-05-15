import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';
import { SearchPage } from './search.page';
import { NoResultsFoundComponent } from '../no-results-found/no-results-found.component';
import { ResultsComponent } from '../results/results.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule
  ],
  declarations: [
    SearchPage,
    NoResultsFoundComponent,
    ResultsComponent
  ]
})
export class SearchPageModule {}
