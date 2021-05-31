/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useRef } from "react"
import { jsx } from "@emotion/react"
import { styles } from "./styles"
import useOutsideClicker from "hooks/useOutsideClicker"
interface IProps {
  limit: number
  totalCount: number
  onChangeLimit: Function
}
const PaginationLimitPicker = ({
  limit,
  totalCount,
  onChangeLimit,
  ...props
}: IProps) => {
  const [visiblePicker, setVisiblePicker] = useState(false)
  const parentRef = useRef(null)
  const limitData = [20, 50, 100]
  useOutsideClicker(parentRef, () => setVisiblePicker(false))
  return (
    <div css={styles.wrap} ref={parentRef} {...props}>
      <span
        css={styles.selector}
        onClick={() => setVisiblePicker(true)}
      >{`1-${limit} of ${totalCount}`}</span>
      {visiblePicker && (
        <ul css={styles.picker}>
          {limitData.map((e, index) => (
            <li
              css={styles.pickerItem}
              style={{ border: limit === e ? "1px solid blue" : "" }}
              key={index}
              onClick={() => onChangeLimit(e)}
            >
              {e}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default PaginationLimitPicker
