import styled from "styled-components";

type ButtonProps = {
  $type?: "primary" | "secondary";
};

export const Button = styled.button<ButtonProps>`
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  padding: 10px 18px;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  ${(props) =>
    props.$type === "primary" &&
    `
    background: var(--primary-600);
    border: 1px solid var(--primary-600);
    color: white;
    &:focus {
      outline: 4px solid var(--primary-100);
    }
    &:hover {
      background: var(--primary-700);
    }
    &:disabled {
      background: var(--primary-200);
      border: 1px solid var(--primary-200);
      color: white;
      cursor: not-allowed;
    }
  `}
  ${(props) =>
    props.$type === "secondary" &&
    `
    background: white;
    border: 1px solid var(--gray-300);
    color: var(--gray-700);
    box-shadow: none;
    &:focus {
      outline: 4px solid var(--gray-100);
    }
    &:hover {
      background: var(--gray-50);
    }
    &:disabled {
      background: white;
      border: 1px solid var(--gray-200);
      color: var(--gray-300);
      cursor: not-allowed;
    }
  `}
`;

Button.defaultProps = {
  $type: "primary",
};
