import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Feautures/Counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
},
})