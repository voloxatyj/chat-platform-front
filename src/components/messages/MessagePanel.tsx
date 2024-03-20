import { FC } from "react";
import { MessagePanelBody, MessagePanelStyle } from "../../styles/messages";
import { Message } from "../../utils/types";
import { MessageContainer } from "./MessageContainer";
import { MessagePanelHeader } from "./MessagePanelHeader";
import { MessageInputField } from "./MessageInputField";

type Props = {
  messages: Message[];
}

export const MessagePanel: FC<Props> = ({ messages }) => {
    console.log(messages, 'MessagePanel');
    return (
    <>
      <MessagePanelStyle>
        <MessagePanelHeader />
        <MessagePanelBody>
          <MessageContainer messages={messages} />
          <MessageInputField />
        </MessagePanelBody>
      </MessagePanelStyle>
    </>
  );
}