import styled from "styled-components";
import { MessageItemContentProps } from "../styleTypes";

export const MessagePanelStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.messagePanel.backgroundColor};
`;

export const MessagePanelBody = styled.div`
  padding: 32px 32px 0 32px;
  padding-top: 0;
  box-sizing: border-box;
  flex: 1 1 auto;
  overflow-y: auto;
  min-height: 0;
  height: calc(100% - 600px);
`;

export const MessageContainerStyle = styled.div`
  height: 100%;
  box-sizing: border-box;
  padding: 10px 0;
  display: flex;
  flex-direction: column-reverse;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.background.primary};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.background.secondary};
    width: 5px;
    border-radius: 20px;
  }
`;

export const MessagePanelHeaderStyle = styled.header`
  height: 90px;
  padding: 10px 32px;
  box-sizing: border-box;
  width: 100%;
  flex-shrink: 0;
  border-bottom: 1px solid #49494925;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.messagePanel.header.title};
`;

export const MessageItemHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  .time {
    color: #6d6d6d;
    font-size: 14px;
    font-weight: bold;
  }
  .authorName {
    font-weight: 600;
    font-size: 16px;
  }
`;

export const MessageItemContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 5px 0;
  word-break: break-word;
`;

export const MessageItemDetails = styled.div`
  flex: 1;
`;

export const MessageItemAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;

export const MessageItemContent = styled.div<MessageItemContentProps>`
  padding: ${({ padding }) => padding};
  width: 100%;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.messagePanel.body.content.color};
`;