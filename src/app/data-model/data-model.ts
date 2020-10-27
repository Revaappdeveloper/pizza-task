/**
 * @interface ItemDetails This is a custom datatype of a single item
 */
export interface ItemDetails {
  itemName: string,
  customerName: string,
  numOrder: number,
  price: number,
  totalAmount: number,
  deliveryAddress: {
    doorNumber: number,
    street: string,
    city: string,
    state: string,
    country: string,
    landmark: string
  },
  status: number
}
