export interface OrderItem {
    id: string;
    name: string;
    quantity: number;
  }
  
  export interface Order {
    id: string;
    items: OrderItem[];
    remainingTime: number;
  }
  