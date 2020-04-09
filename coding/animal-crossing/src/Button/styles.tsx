import { css } from "styled-components";

export type ButtonThemeType = "primary" | "secondary" | "tertiary";
export type ButtonSizeType = "small" | "medium" | "big";

export const ButtonThemeStyling = (theme: ButtonThemeType) => {
  if (theme === "primary") {
    return css`
      background: #20c997;
      color: white;
      &:hover:enabled {
        background: #38d9a9;
      }
      &:active:enabled {
        background: #12b886;
      }
      &:disabled {
        background: #aed9cc;
      }
    `;
  } else if (theme === "secondary") {
    return css`
      background: #e9ecef;
      color: #343a40;
      &:hover:enabled {
        background: #f1f3f5;
      }
      &:active:enabled {
        background: #dee2e6;
      }
      &:disabled {
        color: #c6d3e1;
      }
    `;
  } else if (theme === "tertiary") {
    return css`
      background: none;
      color: #20c997;
      &:hover:enabled {
        background: #e6fcf5;
      }
      &:active:enabled {
        background: #c3fae8;
      }
      &:disabled {
        color: #bcd9d0;
      }
    `;
  }
};

export const ButtonSizeStyling = (size: ButtonSizeType) => {
  if (size === "small") {
    return css`
      height: 1.75rem;
      font-size: 0.75rem;
      padding: 0 0.875rem;
    `;
  } else if (size === "medium") {
    return css`
      height: 2.5rem;
      font-size: 1rem;
      padding: 0 1rem;
    `;
  } else if (size === "big") {
    return css`
      height: 3rem;
      font-size: 1.125rem;
      padding: 0 1.5rem;
    `;
  }
};
