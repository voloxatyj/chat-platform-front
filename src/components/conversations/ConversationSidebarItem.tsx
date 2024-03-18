import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../utils/context/AuthContext';
import { getRecipientFromConversation } from '../../utils/helpers';
import { Conversation } from '../../utils/types';
import defaultAvatar from '../../__assets__/default_avatar.jpg';

import styles from './index.module.scss';
import { ConversationSidebarItemDetails, ConversationSidebarItemStyle } from '../../utils/styles/conversation';

type Props = {
  conversation: Conversation;
};

export const ConversationSidebarItem: React.FC<Props> = ({ conversation }) => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const recipient = getRecipientFromConversation(conversation, user);

  return (
    <>
      <ConversationSidebarItemStyle
        onClick={() => navigate(`/conversations/${conversation.id}`)}
        selected={parseInt(id!) === conversation.id}
      >
        <img
          src={defaultAvatar}
          alt="avatar"
          className={styles.conversationAvatar}
        />
        <ConversationSidebarItemDetails>
          <span className="conversationName">
            {`${recipient?.first_name} ${recipient?.last_name}`}
          </span>
          {/* <span className="conversationLastMessage">
          </span> */}
        </ConversationSidebarItemDetails>
      </ConversationSidebarItemStyle>
    </>
  );
};