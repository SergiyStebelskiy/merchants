import axios from "../axios"
const api = {
  getMerchants: async (query: object) => {
    try {
      return await axios.get("/merchants", {params: query})
    } catch (error) {
      throw error
    }
  }
}
export default api
