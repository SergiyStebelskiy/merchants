/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react"
import { styles } from "./styles"
import { ReactNode } from "react"
import Header from "./components/Header/Header"
interface IProps {
  children: ReactNode
}
const MainLayout = ({ children }: IProps) => {
  return (
    <main css={styles.main}>
      <Header />
      <div css={styles.content}>{children}</div>
    </main>
  )
}

export default MainLayout
