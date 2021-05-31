/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react"
import { styles } from "./styles"
import { NavLink } from "react-router-dom"
const NavButton = ({ icon, path, ...props }) => {
  return (
    <NavLink
      to={path}
      css={styles.link}
      activeStyle={{ background: "rgba(255, 255, 255, 0.05)" }}
      exact={true}
      {...props}
    >
      {icon}
    </NavLink>
  )
}
export default NavButton
