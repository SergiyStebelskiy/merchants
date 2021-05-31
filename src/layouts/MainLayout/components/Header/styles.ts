import {css} from '@emotion/react'

export const styles = {
  header: css`
    background: #151F26;
    height: 100vh;
    padding: 16px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `,
  col: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  `,
  logo: css`
    padding-bottom: 20px;
    margin-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    width: 44px;
    display: flex;
    justify-content: center;
  `,
  navButton: css`
    margin-top: 8px;
  `,
  settingsBtn: css`
    margin-bottom: 16px;
  `,
  avatar: css`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.85);
    cursor: pointer;
  `
}
