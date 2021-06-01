/** @jsxRuntime classic */
/** @jsx jsx */
import { useRef } from "react"
import { jsx } from "@emotion/react"
import { styles } from "./styles"
import MoreBtn from "components/MoreBtn/MoreBtn"
import { IMerchant } from "interfaces"
import { ReactComponent as Info } from "icons/info.svg"

interface IProps {
  data: Array<IMerchant>
}
const MerchantsTable = ({ data }: IProps) => {
  const parentRef = useRef<any>(null)
  return (
    <div css={styles.tableWrap}>
      <table
        css={styles.table}
        style={{
          width: parentRef.current?.offsetWidth
            ? `${parentRef.current?.offsetWidth}px`
            : "100%"
        }}
      >
        <thead css={styles.thead}>
          <tr>
            <th css={styles.label}>Name</th>
            <th css={styles.label}>Email</th>
            <th css={styles.label}>Website</th>
            <th css={styles.label}>Note</th>
            <th css={styles.label}></th>
          </tr>
        </thead>
        <tbody
          style={{
            display: !data.length ? "flex" : "",
            alignItems: !data.length ? "center" : "",
            justifyContent: !data.length ? "center" : ""
          }}
          css={styles.tbody}
        >
          {data.map((item, index) => (
            <tr css={styles.item} key={index}>
              <td css={styles.col}>{item.name || "-"}</td>
              <td css={styles.col}>{item.email || "-"}</td>
              <td css={styles.col}>{item.website || "-"}</td>
              <td css={styles.col}>{item.memoText || "-"}</td>
              <td css={styles.col}>
                <div css={styles.moreBtnWrap}>
                  <MoreBtn
                    data={[
                      { name: "Open", onClick: () => {} },
                      { name: "View stories", onClick: () => {} },
                      { name: "Delete", onClick: () => {} }
                    ]}
                  />
                </div>
              </td>
            </tr>
          ))}
          {!data.length && (
            <div css={styles.emptyMessage}>
              <Info />
              Create a merchant to get started
            </div>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default MerchantsTable
