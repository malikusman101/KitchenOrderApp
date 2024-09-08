import axios from 'axios';
import { Order } from '../../../../types';

export const fetchOrders = async (): Promise<Order[]> => {
  try {
    const response = await axios.get('https://staging.smartendr.be/app/api_get_orders?locations=23,12&timestamp=43399');
    return response.data.orders;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error; 
  }
};