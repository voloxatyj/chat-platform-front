import { Outlet, useParams } from 'react-router-dom';
import { ConversationPanel } from '../../components/conversations/ConversationPanel';
import { ConversationSidebar } from '../../components/sidebars/ConversationSidebar';
import { useEffect, useState } from 'react';
import { Conversation } from '../../utils/types';
import { getConversations } from '../../utils/api';

export const ConversationPage = () => {
  const { id } = useParams();
  const [showSidebar, setShowSidebar] = useState(window.innerWidth > 800);
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    getConversations()
    .then(({data}) => {
      setConversations(data);
    })
    .catch((err) => console.log(err));
  }, [])

  return (
    <>
      {showSidebar && <ConversationSidebar conversations={conversations} />}
      {!id && !showSidebar && <ConversationSidebar conversations={conversations} />}
      {!id && showSidebar && <ConversationPanel />}
      <Outlet />
    </>
  );
};
