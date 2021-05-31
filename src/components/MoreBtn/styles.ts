import {css} from '@emotion/react'

export const styles = {
  btnWrap: css`
    position:relative;
    display: inline-block;
  `,
  btn: css`
    cursor: pointer;
  `,
  dropdown: css`
    position: absolute;
    top:100%;
    right:0;
    z-index: 11;
    background: white;
    padding: 8px 0;
    width: 150px;
  `,
  item: css`
    display: flex;
    height: 30px;
    align-items: center;
    padding: 0 8px;
    font-size: 14px;
    cursor: pointer;
    &:hover{
      background: #FBFBFB;
    }
  `,
}
