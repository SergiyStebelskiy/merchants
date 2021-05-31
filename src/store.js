import { configureStore } from "@reduxjs/toolkit"
import merchantsReducer from "reducers/merchants"

const store = configureStore({
  reducer: {
    merchants: merchantsReducer
  }
})

export default store
