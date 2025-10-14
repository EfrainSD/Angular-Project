import { Component, output, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { InvertmentService } from '../investment.service';

@Component({
  selector: 'user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent
{
  initialInvestment = '1000';
  annualInvestment = '200';
  expectedReturn = '5';
  duration = '10';

  // SIGNALS
  // initialInvestment = signal('0');
  // annualInvestment = signal('0');
  // expectedReturn = signal('5');
  // duration = signal('10');
  // calculate = output<Investment>();

  constructor(private investmentService: InvertmentService) {}

  onSubmit()
  {
    // Adding the + -> convert string to number
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration
    });

    // Reset the form
    this.initialInvestment = '1000';
    this.annualInvestment = '200';
    this.expectedReturn = '5';
    this.duration = '10';

    // SIGNALS
    // this.calculate.emit({
    //   initialInvestment: +this.initialInvestment(),
    //   annualInvestment: +this.annualInvestment(),
    //   expectedReturn: +this.expectedReturn(),
    //   duration: +this.duration()
    // });
    // this.initialInvestment.set('0');
    // this.annualInvestment.set('0');
    // this.expectedReturn.set('5');
    // this.duration.set('10');
  }
}