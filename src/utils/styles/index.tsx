import styled from 'styled-components';
import { fadeInUpwards } from './keyframes';
import {
  InputContainerProps,
  PageProps
} from './styleTypes';

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

export const RecipientChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  border-radius: 10px;
  gap: 4px 10px;
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

export const Button = styled.button`
  width: 100%;
  outline: none;
  border: none;
  font-family: 'Inter';
  font-size: 16px;
  background-color: #2b09ff;
  color: #fff;
  border-radius: 10px;
  padding: 25px 0;
  font-weight: 500;
  transition: 250ms background-color ease;
  &:hover {
    cursor: pointer;
    background-color: #3415ff;
  }
  &:active {
    background-color: #3a1cff;
  }
  &:disabled {
    background-color: #4937bc7c;
    color: #878787a2;
    cursor: not-allowed;
  }
`;

export const Page = styled.div<PageProps>`
  background-color: #1a1a1a;
  height: 100%;
  width: 100%;
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  overflow: hidden;
`;

export const OverlayStyle = styled.div`
  height: 100%;
  width: 100%;
  background-color: #000000e3;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

type ModalProps = Partial<{
  showModal: boolean;
}>;

export const ModalContainerStyle = styled.div<ModalProps>`
  position: relative;
  background-color: #121212;
  width: 650px;
  box-sizing: border-box;
  border-radius: 10px;
  animation: ${fadeInUpwards} 500ms ease;
`;

export const ModalHeaderStyle = styled.header`
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 28px;
  & h2 {
    font-weight: 500;
    margin: 0;
  }
`;

export const ModalContentBodyStyle = styled.div`
  padding: 24px;
  position: relative;
`;

export const TextField = styled.textarea`
  font-family: 'Inter';
  outline: none;
  border: none;
  background-color: inherit;
  color: #fff;
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 4px 0;
  resize: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const LayoutPage = styled.div`
  height: 100%;
  display: flex;
`;