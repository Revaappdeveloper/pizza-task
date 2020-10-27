import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemDetails } from 'src/app/data-model/data-model';
import { CommunicationServiceService } from 'src/app/services/communication-service.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  /**
   * @property itemDetails
   * @description This holds the order details of the single item
   */
  itemDetails: ItemDetails;

  constructor(private router: Router, private communicationService: CommunicationServiceService) { }

  ngOnInit(): void {
    //This service receives the data from OrdersComponent
    this.communicationService.on('order-details', (item: ItemDetails) => {
      // If item is null navigate back to OrdersComponent
      if (!item) {
        this.backToOrderList();
        return;
      }
      this.itemDetails = item;
    });

  }

  /**
   * @method backToOrderList
   * @description This method is to navigate back to OrdersComponent
   */
  backToOrderList() {
    this.router.navigateByUrl("orders");
  }

}
