import { Component, OnDestroy, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { OrderService } from '../../../core/services/order.service';
import { SignalrService } from '../../../core/services/signalr.service';
import { DatePipe, CurrencyPipe, NgIf } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AddressPipe } from '../../../shared/pipes/address.pipe';
import { PaymentCardPipe } from '../../../shared/pipes/payment-card.pipe';

@Component({
  selector: 'app-checkout-success',
  imports: [
    MatButton,
    RouterLink,
    MatProgressSpinnerModule,
     DatePipe,
     AddressPipe,
     CurrencyPipe,
     PaymentCardPipe,
     NgIf
  ],
  templateUrl: './checkout-success.component.html',
  styleUrl: './checkout-success.component.scss'
})
export class CheckoutSuccessComponent implements OnDestroy {
  signalrService = inject(SignalrService);
   private orderService = inject(OrderService);
 
   ngOnDestroy(): void {
     this.orderService.orderComplete = false;
     this.signalrService.orderSignal.set(null);
   }
}
