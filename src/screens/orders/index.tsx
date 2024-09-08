import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getOrders } from '../../redux/orders/orderSlice';
import { View, ActivityIndicator, Text } from 'react-native';
import OrderList from '../../components/OrderList';
import Header from '../../components/Header';
import { Order } from '../../../types';
import styles from './styles'; 
const OrdersScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state.orders.orders);
  const status = useAppSelector((state) => state.orders.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getOrders());
    }
  }, []); 

  const groupedOrders = orders.reduce((acc: { [key: string]: Order[] }, order:Order) => {
    if (order.table_name) {
      if (!acc[order.table_name]) {
        acc[order.table_name] = [];
      }
      acc[order.table_name].push(order);
    }
    return acc;
  }, {});

  const deviceName = 'Device 1';
  const pendingOrdersCount = groupedOrders ? Object.values(groupedOrders).flat().length : 0;
  const avgPendingOrder = pendingOrdersCount / 10;
  const maxPendingOrder = pendingOrdersCount;
  const ordersInLast10Mins = 5;

  const handleActionPress = () => {
    console.log('Action button pressed');
  };

  return (
    <View style={styles.container}>
       {status === 'loading' && <ActivityIndicator size="large" color="#0000ff" />}
      {status === 'error' && <Text style={styles.errorText}>Error: {status.error}</Text>}
      {status !== 'loading' &&
      <View style={{justifyContent:'center', alignItems:'center'}}>
      <Header
        deviceName={deviceName}
        pendingOrdersCount={pendingOrdersCount}
        avgPendingOrder={avgPendingOrder}
        maxPendingOrder={maxPendingOrder}
        ordersInLast10Mins={ordersInLast10Mins}
        onActionPress={handleActionPress}
        />
        </View>}
     
      <OrderList orders={groupedOrders} />
    </View>
  );
};

export default OrdersScreen;