export interface Restaurant {
  id: number;
  name: string;
  address: string;
  phoneNumber: string;
  menusRestaurant: Menu[];
  commandNumber: number;
}

export interface Menu {
  id: number;
  name: string;
  description: string;
  price: number;
  type: string;
  restaurantName: string;
}
