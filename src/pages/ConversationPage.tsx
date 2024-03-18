import { Outlet, useParams } from 'react-router-dom';
import { ConversationPanel } from '../components/conversations/ConversationPanel';
import { ConversationSidebar } from '../components/sidebars/ConversationSidebar';
import { Page } from '../styles';
import { useEffect, useState } from 'react';
import { Conversation } from '../utils/types';
import { getConversations } from '../utils/api';

export const ConversationPage = () => {
  const { id } = useParams();
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    getConversations()
    .then(({data}) => {
      setConversations(data);
      console.log(data);
    })
    .catch((err) => console.log(err));
  }, [])

  return (
    <Page>
      <ConversationSidebar conversations={conversations} />
      {!id && <ConversationPanel />}
      <Outlet />
    </Page>
  );
};
