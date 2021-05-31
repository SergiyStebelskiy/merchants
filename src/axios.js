import axios from "axios"
const agent = axios.create({
  baseURL: "https://api.staging.quickcheckoutpage.com/v1",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjQwMjEwNzcsImlhdCI6MTYyMTQyOTA3NywiaXNzIjoicWMtYXBpIiwibmJmIjoxNjIxNDI5MDc3LCJ1c2VySWQiOiIyMDg2MjZlZS03ZTY5LTQ4NmMtYTAwNC00YWRjNGY0YWUwNWEiLCJ1c2VyUm9sZSI6IiJ9.6d4IEASfBS17Z-rZdIf25PlUxsJ01N5-rHnPtrx2CBU"
  }
})

export default agent
