import {Component, input} from '@angular/core';

@Component({
  selector: 'app-exit-vehicle-info-payment-amount',
  imports: [],
  templateUrl: './exit-vehicle-info-payment-amount.component.html',
  styles: ``
})
export class ExitVehicleInfoPaymentAmountComponent {
  paymentAmount = input.required<number | null>();
}
