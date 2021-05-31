import {css} from '@emotion/react'

export const styles = {
  wrap: css`
    position: relative;
  `,
  selector: css`
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    color: #73797D;
  `,
  picker: css`
    position: absolute;
    top:100%;
    right: 0;
    width: 100px;
    z-index: 10;
    background: white;
    border-radius: 4px;
    padding: 8px 4px;
    filter: drop-shadow(0px 15px 25px rgba(0, 0, 0, 0.03));
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,
  pickerItem: css`
    padding: 2px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 4px;
    display: inline-block;
    &:hover{
      border: 1px solid blue;
    }
    &:not(:first-of-type) {
      margin-top: 2px;
    }
  `
}
