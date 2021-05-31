/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react"
import { styles } from "./styles"
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "icons/logo.svg"
import { ReactComponent as Users } from "icons/users.svg"
import { ReactComponent as Shop } from "icons/shop.svg"
import { ReactComponent as Settings } from "icons/settings.svg"
import NavButton from "./components/NavButton/NavButton"

const Header = () => {
  return (
    <header css={styles.header}>
      <div css={styles.col}>
        <Link css={styles.logo} to='/'>
          <Logo />
        </Link>
        <NavButton path='/' icon={<Users />} />
        <NavButton css={styles.navButton} path='/shop' icon={<Shop />} />
      </div>
      <div css={styles.col}>
        <NavButton
          css={styles.settingsBtn}
          path='/settings'
          icon={<Settings />}
        />
        <div css={styles.avatar}>A</div>
      </div>
    </header>
  )
}

export default Header
