import React from 'react';
import { View, Text } from 'react-native';
import { Product } from '../../../types';
import styles from './styles'; 

interface OrderItemProps {
  product: Product;
}

const OrderItem: React.FC<OrderItemProps> = ({ product }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.quantity}>{product.quantity}</Text>
      <Text style={styles.productName}>{product.name}</Text>
    </View>
  );
};

export default OrderItem;
