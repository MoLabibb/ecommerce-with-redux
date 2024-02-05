import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk("productsSlice/fetchProducts", async ()=>{
    const res = await fetch("https://molabibb.github.io/ecommerce-with-redux/products.json")
    const data = await res.json() ;
    const all = data.products ; 
    const products = all.map((product, index) => product = { ...product, id: index + 1}); 
    
    return products ; 
})
const productsSlice = createSlice({
    initialState:[], 
    name:"productsSlice", 
    reducer:{}, 
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            return action.payload; 
        })
    }
})

export const {} = productsSlice.actions ; 
export default productsSlice.reducer ; 