/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useRef } from "react"
import { jsx } from "@emotion/react"
import { styles } from "./styles"
import { ReactComponent as More } from "icons/more.svg"
import useOutsideClicker from "hooks/useOutsideClicker"
interface IDataItem {
  name: string
  onClick: Function
}
interface IProps {
  data: Array<IDataItem>
}
const MoreBtn = ({ data, ...props }: IProps) => {
  const [visible, setVisible] = useState(false)
  const parentRef = useRef(null)
  useOutsideClicker(parentRef, () => setVisible(false))
  return (
    <div css={styles.btnWrap} ref={parentRef} {...props}>
      <More css={styles.btn} onClick={() => setVisible(true)} />
      {visible && (
        <ul css={styles.dropdown}>
          {data.map((item, index) => (
            <li css={styles.item} onClick={() => item.onClick()} key={index}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default MoreBtn
