// src/components/OrderBox/index.tsx

import React from 'react';
import { View, Text } from 'react-native';
import { Order } from '../../../types';
import OrderItem from '../OrderItems';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles'; 
interface OrderBoxProps {
  order: Order;
}

const OrderBox: React.FC<OrderBoxProps> = ({ order }) => {
  const boxHeight = order.products.length * 80 + 120;

  const calculateRemainingTime = (eta: number): string => {
    const currentDate = new Date();
    const etaDate = new Date(eta * 1000);
    const diff = etaDate.getTime() - currentDate.getTime();
    const minutesRemaining = Math.floor(diff / 60000);
    return minutesRemaining > 0 ? `${minutesRemaining} min` : 'Expired';
  };

  const minutesRemaining = order.eta ? calculateRemainingTime(order.eta) : null;

  const getRemainingTimeText = (): string => {
    if (minutesRemaining && minutesRemaining.includes('min') && parseInt(minutesRemaining) > 0) {
      return `Remaining Time: ${minutesRemaining}`;
    } else {
      return 'Expired';
    }
  };

  const getRemainingTimeStyle = () => {
    if (minutesRemaining && minutesRemaining.includes('min')) {
      const minutes = parseInt(minutesRemaining);
      if (minutes > 5) {
        return styles.remainingTimeGreen;
      } else if (minutes <= 2) {
        return styles.remainingTimeBlue;
      } else {
        return styles.remainingTimeRed;
      }
    }
    return styles.remainingTimeRed;
  };

  const people: number = order.people_count ? order.people_count : 0;

  return (
    <View style={[styles.container, { height: boxHeight }]}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Icon name="users" size={20} color="#000" />
          <Text style={styles.peopleCount}>{people}</Text>
        </View>
        <Text style={styles.tableName}>Table: {order.table_name}</Text>
      </View>
      <View style={styles.productsContainer}>
        {order.products.map((product) => (
          <OrderItem key={product.cartitem_id.toString()} product={product} />
        ))}
      </View>
      <View style={[styles.remainingTime, getRemainingTimeStyle()]}>
        <Text style={styles.peopleCount}>
          {getRemainingTimeText()}
        </Text>
      </View>
    </View>
  );
};

export default OrderBox;
