import React from 'react';
import { FlatList } from 'react-native';
import OrderBox from '../OrderBox';
import { Order } from '../../types';

interface OrderListProps {
  orders: Order[];
}

const OrderList: React.FC<OrderListProps> = ({ orders }) => {
  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <OrderBox order={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default OrderList;
