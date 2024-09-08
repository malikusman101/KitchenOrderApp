import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchOrders } from '../apis/orders/orderAPI';
import { Order } from '../../types';

interface OrderState {
  orders: Order[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: OrderState = {
  orders: [],
  status: 'idle',
};

export const getOrders = createAsyncThunk('orders/fetchOrders', async () => {
  const response = await fetchOrders();
  return response;
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
        state.status = 'failed';
      });
  },
});

export default orderSlice.reducer;
