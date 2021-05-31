/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useRef, FC } from "react"
import { jsx } from "@emotion/react"
import { styles } from "./styles"
import { ReactComponent as More } from "icons/more.svg"
import useOutsideClicker from "hooks/useOutsideClicker"
const MoreBtn: FC = (props: object) => {
  const [visible, setVisible] = useState(false)
  const parentRef = useRef(null)
  useOutsideClicker(parentRef, () => setVisible(false))
  return (
    <div css={styles.btnWrap} ref={parentRef} {...props}>
      <More css={styles.btn} onClick={() => setVisible(true)} />
      {visible && (
        <ul css={styles.dropdown}>
          <li css={styles.item}>Open</li>
          <li css={styles.item}>View stores</li>
          <li css={styles.item}>Delete</li>
        </ul>
      )}
    </div>
  )
}
export default MoreBtn
