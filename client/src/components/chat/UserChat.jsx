import { Stack } from 'react-bootstrap';
import { useFetchRecipient } from '../../hooks/useFetchRecipient';
// import avatar from '../../assets/avatar.svg';
import ava from '../../assets/ava.jpg';
const UserChat = ({ chat, user }) => {
  const { recipientUser } = useFetchRecipient(chat, user);

  console.log('recipientUser', recipientUser);
  return (
    <Stack
      direction="horizontal"
      gap={3}
      className="user-card align-items-center p-2 justify-content-between"
      role="button"
    >
      <div className="d-flex">
        <div className="me-2">
          <img src={ava} height="35px" />
        </div>
        <div className="text-content">
          <div className="name">{recipientUser?.name}</div>
          <div className="text">Miss you Linh </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-end">
        <div className="date">27/11/2023</div>
        <div className="this-user-notifications">2</div>
        <div className="user-online"></div>
      </div>
    </Stack>
  );
};

export default UserChat;
