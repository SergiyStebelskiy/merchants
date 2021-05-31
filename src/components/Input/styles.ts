import {css} from '@emotion/react'

export const styles = {
  field: css`
    height: 34px;
    font: inherit;
    padding: 0 16px;
    background: rgba(21, 31, 38, 0.01);
    border: 1px solid rgba(21, 31, 38, 0.1);
    border-radius: 5px;
    font-size: 14px;
    line-height: 1;
    &::placeholder{
      color: rgba(21, 31, 38, 0.3);
    }
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance:none;
    }
  `
}
