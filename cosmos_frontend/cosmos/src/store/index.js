import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/account/Account.js';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})