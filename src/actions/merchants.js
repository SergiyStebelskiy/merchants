import api from "api"
import { merchantsSlice } from "reducers/merchants"
export const getMerchants = params => async dispatch => {
  api.getMerchants(params).then(res => {
    dispatch(merchantsSlice.actions.merchantsLoaded(res.data))
  })
}
