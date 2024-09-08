import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Order } from '../../types';

interface OrderBoxProps {
  order: Order;
}

const OrderBox: React.FC<OrderBoxProps> = ({ order }) => {
  return (
    <View style={[styles.container, { height: order.items.length * 20 + order.remainingTime, width: 70 }]}>
      {order.items.map((item) => (
        <Text key={item.id}>{item.name} x {item.quantity}</Text>
      ))}
      <Text>Remaining Time: {order.remainingTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default OrderBox;