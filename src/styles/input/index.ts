import styled from "styled-components";
import { InputContainerProps } from "../styleTypes";

export const InputField = styled.input`
  font-family: 'Inter';
  outline: none;
  border: none;
  background-color: inherit;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 4px 0;
  &:disabled {
    color: #3b3b3b;
  }
`;

export const InputContainer = styled.div<InputContainerProps>`
  background-color: ${(prop) => prop.backgroundColor || '#131313'};
  padding: 12px 16px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const InputContainerHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const InputLabel = styled.label`
  display: block;
  color: #8f8f8f;
  font-size: 14px;
  margin: 4px 0;
`;

export const InputError = styled.span`
  color: #ff0000;
  text-transform: uppercase;
  font-size: 11px;
`;