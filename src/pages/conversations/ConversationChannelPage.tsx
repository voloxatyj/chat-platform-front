import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ConversationChannelPageStyle } from '../../styles/conversation';
import { getConversationMessages } from '../../utils/api';
import { AuthContext } from '../../utils/context/AuthContext';
import { Message } from '../../utils/types';
import { MessageContainer } from '../../components/messages/MessageContainer';

export const ConversationChannelPage = () => {
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState<Message[]>([]);
  const { id } = useParams();

  useEffect(() => {
    const conversationId = parseInt(id!);
    getConversationMessages(conversationId)
    .then(({ data: { messages } }) => {
      setMessages(messages);
    })
    .catch((err) => console.log(err))
  }, [id]);

  return (
    <ConversationChannelPageStyle>
      <MessageContainer messages={messages} />
    </ConversationChannelPageStyle>
  );
};
