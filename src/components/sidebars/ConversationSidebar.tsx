import { FC, useState } from 'react';
import { TbEdit } from 'react-icons/tb';
import {
  ConversationSidebarContainer,
  ConversationSidebarStyles,
  ConversationSidebarHeaderStyle,
} from '../../utils/styles/conversation';
import { Conversation } from '../../utils/types';
import { ConversationSidebarItem } from '../conversations/ConversationSidebarItem';
import { CreateConversationModal } from '../modals/CreateConversationModal';

type Props = {
  conversations: Conversation[];
};

export const ConversationSidebar: FC<Props> = ({ conversations }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <CreateConversationModal setShowModal={setShowModal} />}
      <ConversationSidebarStyles>
        <ConversationSidebarHeaderStyle>
          <h1>Conversations</h1>
          <div onClick={() => setShowModal(!showModal)}>
            <TbEdit size={40} />
          </div>
        </ConversationSidebarHeaderStyle>
        <ConversationSidebarContainer>
          {conversations.map((conversation) => (
            <ConversationSidebarItem
              key={conversation.id}
              conversation={conversation}
            />
          ))}
        </ConversationSidebarContainer>
      </ConversationSidebarStyles>
    </>
  );
};
