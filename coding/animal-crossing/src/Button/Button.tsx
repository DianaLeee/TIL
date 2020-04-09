import React from "react";
import styled from "styled-components";
import { ButtonThemeType, ButtonThemeStyling, ButtonSizeType, ButtonSizeStyling } from "./styles";

export type ButtonProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 클릭 시 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 버튼의 생김새를 설정합니다 */
  theme: ButtonThemeType;
  /** 버튼의 크기를 설정합니다 */
  size: ButtonSizeType;
  /** 버튼을 비활성화 시킵니다 */
  disabled?: boolean;
  /** 버튼의 너비를 설정합니다 */
  width?: string | number;
};

const StyledButton = styled.button<ButtonProps>`
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  background: #20c997;
  color: white;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;

  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    background: #38d9a9;
  }
  &:active {
    background: #12b886;
  }
  &:disabled {
    cursor: not-allowed;
  }

  ${(props) => props.theme && ButtonThemeStyling(props.theme)}
  ${(props) => props.size && ButtonSizeStyling(props.size)}

  width: ${(props) => props.width};
`;

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용됩니다 */
const Button = ({ children, onClick, theme, size, disabled, width }: ButtonProps) => {
  return (
    <StyledButton theme={theme} disabled={disabled} size={size} width={width} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  theme: "primary",
  size: "medium",
};

export default Button;
