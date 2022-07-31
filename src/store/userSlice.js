import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')),
        filterProduct: [],
        carts: JSON.parse(localStorage.getItem('carts')) || [],
        vouchers: JSON.parse(localStorage.getItem('vouchers')) || [],
        order: JSON.parse(localStorage.getItem('order')) || [],
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
        setFilterProduct: (state, action) => {
            state.filterProduct = action.payload;
        },
        setCarts: (state, action) => {
            state.carts = action.payload;
        },
        setVouchers: (state, action) => {
            state.vouchers = action.payload;
        },
        setOrder: (state, action) => {
            state.order = action.payload;
        },
    },
});
export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const { setFilterProduct } = userSlice.actions;
export const selectFilterProduct = (state) => state.user.filterProduct;
export const { setVouchers } = userSlice.actions;
export const selectVouchers = (state) => state.user.vouchers;
export const { setCarts } = userSlice.actions;
export const selectCarts = (state) => state.user.carts;
export const { setOrder } = userSlice.actions;
export const selectOrder = (state) => state.user.order;
export default userSlice.reducer;
