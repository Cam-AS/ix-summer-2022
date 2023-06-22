import React, { useEffect, useState } from 'react';

// import the services
import ProfileService from '../../services/profile.service';
import ChatService from '../../services/chat.service';

// import components from the components folder
import AvailableChats from './AvailableChats';
import ChatSidebar from './ChatsSidebar';
import ChatMessages from './ChatMessages';

export default function ChatsPage({ user }) {
  // component state
  const [profiles, setProfiles] = useState([]);
  const [chats, setChats] = useState([]);

  // on component did mount
  useEffect(() => {
    fetchProfiles();

    // subscribe to chats
    const unsubscribe = ChatService.subscribeToUserChats(user, (chats) => {
      // deal with the chats
      setChats(chats);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function fetchProfiles() {
    const profiles = await ProfileService.fetchProfiles();
    setProfiles(profiles);
  }

  return <div>ChatsPage</div>;
}
