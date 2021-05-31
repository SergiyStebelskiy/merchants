import {css} from '@emotion/react'

export const styles = {
  header: css`
    background: #FFFFFF;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  col: css`
    display: flex;
    align-items: center;
  `,
  icon: css`
    margin-right: 10px;
  `,
  label: css`
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    color: rgba(21, 31, 38, 0.85);
  `,
  field: css`
    width: 350px;
    margin-right: 24px;
  `,
  paginationLimitPicker: css`
    margin-right: 24px;
  `,
  arrows: css`
    display: flex;
  `,
  arrow: css`
    cursor: pointer;
    &:first-of-type{
      margin-right: 16px
    }
  `
}
