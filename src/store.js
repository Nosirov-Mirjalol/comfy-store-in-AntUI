import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../src/Features/cart/cartSlice'
import userReducer from './Features/user/userSlice'

export const store = configureStore({
	reducer: {
		cartState:cartReducer,
		userState:userReducer
	}
})