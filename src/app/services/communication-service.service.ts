import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

/**
 * @class
 * @name EventData
 * @description This class is used to send the event with ID and the Data which we need to pass
 * @param {string} id
 * @param {any} data
 *
 */
class EventData {
  id: string;
  data: any;
  constructor(id: string, data?: any) {
    this.id = id;
    this.data = data || null;
  }
}

@Injectable({
  providedIn: 'root'
})

export class CommunicationServiceService {

  constructor() {
    this.emit('order-details', null);
  }

  private subject$ = new BehaviorSubject(null);

  /**
   * @method emit
   * @description This method is used to send the data from a component
   * @param {string} id
   * @param {any} data
   */
  emit(id: string, data?: any) {
    let event: EventData = new EventData(id, data);
    this.subject$.next(event);
  }

  /**
   * @method on
   * @description This method is used to receive the data through event
   * @param {string} eventName
   * @param {any} action
   */
  on(eventName: string, action: any): Subscription {
    return this.subject$.pipe(
      filter((event: EventData) => event.id === eventName),
      map((event: EventData) => event['data'])
    ).subscribe(action);
  }
}
