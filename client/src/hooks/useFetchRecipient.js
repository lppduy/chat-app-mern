import { useEffect, useState } from 'react';
import { BASE_URL, getRequest } from '../utils/services';
export const useFetchRecipient = (chat, user) => {
  //
  const [recipientUser, setRecipientUser] = useState(null);
  const [error, setError] = useState(null);

  const recipientId = chat?.members.find(id => id !== user?._id);

  useEffect(() => {
    const getUser = async () => {
      //
      if (!recipientId) return null;

      const response = await getRequest(`${BASE_URL}/users/find/${recipientId}`);

      if (response.error) return setError(errpr);

      setRecipientUser(response);
    };
    getUser();
  }, []);

  return { recipientUser };
};
