/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect } from "react"
import { jsx } from "@emotion/react"
import { styles } from "./styles"
import MainLayout from "layouts/MainLayout/MainLayout"
import MerchantsHeader from "./components/MerchantsHeader/MerchantsHeader"
import MerchantsTable from "./components/MerchantsTable/MerchantsTable"
import querystring from "query-string"
import { useLocation } from "react-router-dom"
import { getMerchants } from "actions/merchants"
import store from "store"
import { useSelector } from "react-redux"
import { IStore } from "interfaces"

const MainPage = () => {
  const location = useLocation()
  const query = querystring.parse(location.search)
  const { limit, offset, search } = query
  const merchants = useSelector((state: IStore) => state.merchants)

  useEffect(() => {
    store.dispatch(getMerchants({ limit, offset, search }))
  }, [limit, search, offset])
  return (
    <MainLayout>
      <div css={styles.mainWrap}>
        <MerchantsHeader totalCount={merchants.dataCount} />
        <MerchantsTable data={merchants.data} />
      </div>
    </MainLayout>
  )
}
export default MainPage
