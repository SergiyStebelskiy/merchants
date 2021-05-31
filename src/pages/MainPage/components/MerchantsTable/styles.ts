import {css} from '@emotion/react'
export const styles = {
  tableWrap: css`
    width: calc(100vw - 76px - 64px);
    overflow-x: auto;
  `,
  table: css`
    width: 100%;
    border-collapse: collapse;
  `,
  thead: css`
    background: #FFFFFF;
    height: 43px;
    display: table;
    width: 100%;
    table-layout: fixed;
  `,
  label: css`
    text-align: left;
    height: 43px;
    font-size: 14px;
    font-weight: 600;
    color: rgba(21, 31, 38, 0.85);
    border-collapse: collapse;
    &:first-of-type{
      padding-left: 24px;
    }
    &:last-of-type{
      width: 18px;
    }
  `,
  tbody: css`
    overflow-y: auto;
    height: calc(100vh - (32px * 2) - 50px - 43px);
    display: block;
  `,
  item: css`
    height: 55px;
    border-collapse: collapse;
    display: table;
    width: 100%;
    table-layout: fixed;
    position: relative;
    td:first-of-type{
      padding-left: 24px;
    }
    &:hover td:last-of-type div{
      display: flex;
    }
  `,
  col: css`
    border-top: 1px solid rgba(21, 31, 38, 0.02);
    background: #FBFBFB;
    border-collapse: collapse;
    &:last-of-type{
      width: 18px;
      div{
        margin-left: auto;
        margin-right: 0;
      }
    }
  `,
  moreBtnWrap: css`
    display: none;
    justify-content: flex-end;
    padding-right: 18px;
  `,
  emptyMessage: css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: rgba(21, 31, 38, 0.35);
    svg{
      margin-right: 9px;
    }
  `
}
