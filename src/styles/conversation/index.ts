import styled from "styled-components";
import { ConversationSidebarItemProps } from "../styleTypes";

export const SIDEBAR_WIDTH = 400;

export const ConversationChannelPageStyle = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const ConversationSidebarContainer = styled.div`
  margin-top: 100px;
`;

export const ConversationSidebarStyles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  margin-left: 90px;
  width: ${SIDEBAR_WIDTH}px;
  background-color: #111111;
  border-right: 1px solid #5454543d;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
    /* width: 10px;
    height: 5px; */
  }
`;

export const ConversationSidebarHeaderStyle = styled.header`
  padding: 24px 32px;
  box-sizing: border-box;
  position: fixed;
  width: ${SIDEBAR_WIDTH}px;
  top: 0;
  left: 90px;
  z-index: 9;
  background-color: inherit;
`;

export const ConversationSidebarItemStyle = styled.div<ConversationSidebarItemProps>`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 32px;
  box-sizing: border-box;
  width: 100%;
  background-color: ${({ selected, theme }) =>
    selected && theme.conversationSidebar.conversationItem.selected};
  cursor: pointer;
  transition: 100ms background-color ease;
  &:hover {
    background-color: ${({ theme }) =>
      theme.conversationSidebar.conversationItem.hover.backgroundColor};
  }

  & .title {
    display: block;
    font-weight: 600;
    font-size: 16px;
    color: ${({ theme }) => theme.text.primary};
  }
`;

export const ConversationSidebarItemDetails = styled.div`
  word-break: break-all;
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  & .conversationName {
    display: block;
    font-weight: 600;
    font-size: 16px;
    color: ${({ theme }) =>
      theme.conversationSidebar.conversationItem.title.color};
  }
  & .conversationLastMessage {
    font-size: 15px;
    font-weight: 500;
    color: #868686;
    color: ${({ theme }) =>
      theme.conversationSidebar.conversationItem.title.lastMessageColor};
  }
`;
