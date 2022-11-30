import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: linear-gradient(90deg, #ff4e16, #ff6739);
  border-radius: 0.5rem;
  border: 1px solid #e03b09;
  outline: none;
  color: #2a0202;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  opacity: 1;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #e0e0e0;
  }
  &:active {
    background-color: #bdbdbd;
  }
  &:disabled {
    opacity: 0.5;
    background-color: #bdbdbd;
    cursor: not-allowed;
  }
`;

export default function Button({
  text,
  onClick,
  disabled,
}: {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <StyledButton
      className="instruction centered"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
}
