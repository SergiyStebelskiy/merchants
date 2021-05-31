import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  data: [],
  dataCount: 0
}
export const merchantsSlice = createSlice({
  name: "merchants",
  initialState,
  reducers: {
    merchantsLoaded(state, action) {
      state.data = action.payload.merchants
      state.dataCount = action.payload.totalMerchants
    }
  }
})

export default merchantsSlice.reducer
