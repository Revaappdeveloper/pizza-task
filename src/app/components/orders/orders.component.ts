import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationServiceService } from 'src/app/services/communication-service.service';
import { ItemDetails } from '../../data-model/data-model'; //imported interface


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  /**
   * @property itemDetails
   * @description This is used to keep all the items ordered
   */


  itemDetails: ItemDetails[] = [
    { itemName: 'Cheese n Corn', customerName: ' Spider Man', numOrder: 2, price: 305, totalAmount: 610, deliveryAddress: { doorNumber: 3, street: 'X Street, Y Road', city: 'Z City', state: 'State', country: 'India', landmark: 'nearby school' }, status: 1 },
    { itemName: 'Veggie Supreme', customerName: ' X Man', numOrder: 1, price: 450, totalAmount: 450, deliveryAddress: { doorNumber: 4, street: 'X Street, Y Road', city: 'Z City', state: 'State', country: 'India', landmark: 'nearby college' }, status: 1 },
    { itemName: 'Double Paneer Supreme', customerName: 'The Boss Baby', numOrder: 3, price: 395, totalAmount: 1185, deliveryAddress: { doorNumber: 5, street: 'X Street, Y Road', city: 'Z City', state: 'State', country: 'India', landmark: 'nearby University' }, status: 1 },
    { itemName: 'Chicken Supreme', customerName: 'Cindrella', numOrder: 1, price: 450, totalAmount: 450, deliveryAddress: { doorNumber: 6, street: 'X Street, Y Road', city: 'Z City', state: 'State', country: 'India', landmark: 'nearby X Apartment' }, status: 1 },
    { itemName: 'Chicken Tikka Supreme', customerName: 'Bolt', numOrder: 4, price: 305, totalAmount: 1220, deliveryAddress: { doorNumber: 7, street: 'X Street, Y Road', city: 'Z City', state: 'State', country: 'India', landmark: 'nearby Lake' }, status: 1 },
    { itemName: 'Triple Chicken Feast', customerName: 'Barbie', numOrder: 1, price: 305, totalAmount: 305, deliveryAddress: { doorNumber: 8, street: 'X Street, Y Road', city: 'Z City', state: 'State', country: 'India', landmark: 'nearby school' }, status: 1 }
  ];

  //injected service and Router (DI)
  constructor(private router: Router, private communicationService: CommunicationServiceService) { }

  ngOnInit(): void {

  }

  /**
   * @method orderDetails
   * @description This method is to send data and navigate to OrderDetailsComponent
   * @param {ItemDetails} item
   */
  orderDetails(item: ItemDetails) {
    this.communicationService.emit('order-details', item); //sending data
    this.router.navigateByUrl('details'); //Navigating to view the order details
  }

  /**
   * @method changeStatus
   * @description This method is to change the status of the order
   * @param {ItemDetails} item
   */
  changeStatus(item: ItemDetails) {
    if (item?.status < 3) {
      item.status++;
    }
  }

}
