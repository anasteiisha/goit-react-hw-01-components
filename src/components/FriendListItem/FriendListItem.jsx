import PropTypes from 'prop-types';
import { ListItems, Avatar, Name, Status } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListItems>
      <Status></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </ListItems>
  );
};
FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
