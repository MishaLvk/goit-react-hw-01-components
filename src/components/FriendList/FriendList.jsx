import PropTypes from 'prop-types';

import { Wrapper, Item, Status, Avatar, Name } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <Wrapper className="friend-list">
      {friends.map(el => (
        <Item className="item" key={el.id}>
          <Status active={el.isOnline}></Status>
          <Avatar
            className="avatar"
            src={el.avatar}
            alt="User avatar"
            width="48"
          />
          <Name className="name">{el.name}</Name>
        </Item>
      ))}
    </Wrapper>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
