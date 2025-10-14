import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvertmentService } from '../investment.service';

@Component({
  selector: 'investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})

export class InvestmentResultsComponent
{
  private investmentService = inject(InvertmentService);

  get results()
  {
    return this.investmentService.resultData;
    // return this.investmentService.resultsData();
  }

  // SIGNALS
  // results = computed(() => this.investmentService.resultData());
}