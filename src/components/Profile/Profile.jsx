import PropTypes from 'prop-types';

import {
  Container,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  List,
  ListItems,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  user: { avatar, userName, tag, location, stats },
}) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{userName}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <List>
        <ListItems>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </ListItems>
        <ListItems>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </ListItems>
        <ListItems>
          <Label>likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </ListItems>
      </List>
    </Container>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
};
