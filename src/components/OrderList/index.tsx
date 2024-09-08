import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import OrderBox from '../OrderBox';
import { Order } from '../../../types';
import styles from './styles'; // Import styles

interface OrderListProps {
  orders: { [key: string]: Order[] };
}

const OrderList: React.FC<OrderListProps> = ({ orders }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.keys(orders).map((tableName) => (
        <View key={tableName} style={styles.tableContainer}>
          <View style={styles.orderContainer}>
            {orders[tableName].map((order) => (
              <OrderBox key={order.id} order={order} />
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default OrderList;
