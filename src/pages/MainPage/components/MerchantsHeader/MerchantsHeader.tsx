/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useState } from "react"
import { jsx } from "@emotion/react"
import { styles } from "./styles"
import { ReactComponent as Users } from "icons/users-dark.svg"
import { ReactComponent as ArrowLeft } from "icons/arrow-left.svg"
import { ReactComponent as ArrowRight } from "icons/arrow-right.svg"
import Input from "components/Input/Input"
import PaginationLimitPicker from "components/PaginationLimitPicker/PaginationLimitPicker"
import querystring from "query-string"
import { useHistory, useLocation } from "react-router-dom"
interface IProps {
  totalCount: number
}
const MerchantsHeader = ({ totalCount }: IProps) => {
  const [disableLeftArr, setDisableLeftArr] = useState(false)
  const [disableRightArr, setDisableRightArr] = useState(false)
  const history = useHistory()
  const location = useLocation()
  const query = querystring.parse(location.search)
  useEffect(() => {
    setDisableLeftArr(!query?.offset || Number(query.offset || 1) === 1)
    setDisableRightArr(
      Number(query?.limit || 100) * Number(query.offset || 1) >= totalCount ||
        totalCount < Number(query?.limit || 100)
    )
  }, [query?.offset, query?.limit, totalCount])
  return (
    <header css={styles.header}>
      <div css={styles.col}>
        <Users css={styles.icon} />
        <span css={styles.label}>Merchants</span>
      </div>
      <div css={styles.col}>
        <Input
          css={styles.field}
          value={query.search || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            history.push({
              search: querystring.stringify({
                ...query,
                search: e.target.value
              })
            })
          }
          type='search'
          placeholder='Search...'
        />
        <PaginationLimitPicker
          limit={Number(query.limit) || 100}
          totalCount={totalCount || 0}
          onChangeLimit={(limit: number) =>
            history.push({
              search: querystring.stringify({ ...query, limit })
            })
          }
          css={styles.paginationLimitPicker}
        />
        <div css={styles.arrows}>
          <ArrowLeft
            css={styles.arrow}
            style={{
              opacity: disableLeftArr ? "0.8" : "1",
              cursor: disableLeftArr ? "default" : "pointer"
            }}
            onClick={() =>
              !disableLeftArr &&
              history.push({
                search: querystring.stringify({
                  ...query,
                  offset: Number(query?.offset || 1) - 1
                })
              })
            }
          />
          <ArrowRight
            css={styles.arrow}
            style={{
              opacity: disableRightArr ? "0.8" : "1",
              cursor: disableRightArr ? "default" : "pointer"
            }}
            onClick={() =>
              !disableRightArr &&
              history.push({
                search: querystring.stringify({
                  ...query,
                  offset: Number(query?.offset || 1) + 1
                })
              })
            }
          />
        </div>
      </div>
    </header>
  )
}
export default MerchantsHeader
