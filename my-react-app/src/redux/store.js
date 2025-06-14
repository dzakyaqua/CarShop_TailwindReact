import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';

const store = configureStore({
    reducer:{cart:cartReducer},
});
console.log("oncreate store : ",store.getState()); // ini akan muncul di console

store.subscribe(()=>{
    console.log("Store Change :",store.getState()); // ini akan muncul di console
});

export default store;