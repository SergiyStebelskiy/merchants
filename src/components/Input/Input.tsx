/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react"
import { styles } from "./styles"
const Input = (props: any) => {
  return <input css={styles.field} {...props} />
}

export default Input
