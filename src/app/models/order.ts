export interface OrdersData {
  message: string;
  order:   Order[];
  success: boolean;
}

export interface Order {
  id:           number;
  idRestaurant: number;
  idMenu:       number;
  idClient:     number;
  etat:         string;
  price:        number;
}
