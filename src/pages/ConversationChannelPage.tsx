import { useContext } from 'react';
import { AuthContext } from '../utils/context/AuthContext';
import { ConversationChannelPageStyle } from '../styles/conversation';

export const ConversationChannelPage = () => {
  const { user } = useContext(AuthContext);
  return (
    <ConversationChannelPageStyle>
      {user && user.email}
    </ConversationChannelPageStyle>
  );
};
