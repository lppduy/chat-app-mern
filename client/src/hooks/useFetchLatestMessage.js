import { useContext, useEffect, useState } from 'react';
import { ChatContext } from '../context/ChatContext';
import { BASE_URL, getRequest } from '../utils/services';

export const useFetchLatestMessage = chat => {
  const { newMessage, notifications, error } = useContext(ChatContext);
  const [latestMessage, setLatestMessage] = useState(null);

  useEffect(() => {
    const getMessages = async () => {
      const response = await getRequest(`${BASE_URL}/messages/${chat?._id}`);

      if (response.error)
        return console.log('Error getting messages...', response.error);

      const lastMessage = response[response?.length - 1];

      setLatestMessage(lastMessage);
    };
    getMessages();
  }, [newMessage, notifications]);

  return { latestMessage };
};
