import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchOrders } from '../apis/orders/orderAPI';
import { Order } from '../../../types';

interface OrderState {
  orders: Order[];
  status: 'idle' | 'loading' | 'error';
}

const initialState: OrderState = {
  orders: [],
  status: 'idle',
};

export const getOrders = createAsyncThunk('orders/fetchOrders', async () => {
  const response = await fetchOrders();
  // at very first check if orders are acceptable or not 
  // to avoid  un nessery iterations
  // only those orders are passed which have correct information 
  const filteredOrders = response.filter(order => 
    order.products.length > 0 && order.eta !== null &&
    order.products.some(product => product.cartitem_id && product.name)
  );
  console.log(filteredOrders);
  return filteredOrders;
});

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orders = action.payload;
      })
      .addCase(getOrders.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export default orderSlice.reducer;
