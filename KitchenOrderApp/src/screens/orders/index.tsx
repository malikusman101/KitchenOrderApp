import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getOrders } from '../../redux/orders/orderSlice';
import OrderList from '../../components/OrderList';

const OrdersScreen: React.FC = () => {
  //for testing
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state.orders.orders);
  const status = useAppSelector((state) => state.orders.status);

  useEffect(() => {
    if (status === 'idle') {
      // dispatch(getOrders());
    }
  }, [status, dispatch]);

  return (
    <View style={styles.container}>
      <OrderList orders={orders} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default OrdersScreen;
