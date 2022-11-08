import PropTypes from 'prop-types';

import {
  Wrapper,
  Description,
  Avatar,
  Name,
  DescriptionInfo,
  Stats,
  StatsList,
  StatsLabel,
} from './Profile.styled';

export default function Profile(props) {
  const { avatar, username, tag, location, stats } = props;
  return (
    <Wrapper className="profile">
      <Description className="description">
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <Name className="name">{username}</Name>
        <DescriptionInfo className="tag">@{tag}</DescriptionInfo>
        <DescriptionInfo className="location">{location}</DescriptionInfo>
      </Description>

      <Stats className="stats">
        <StatsList>
          <StatsLabel className="label">Followers</StatsLabel>
          <span className="quantity">{stats.followers}</span>
        </StatsList>
        <StatsList>
          <StatsLabel className="label">Views</StatsLabel>
          <span className="quantity">{stats.views}</span>
        </StatsList>
        <StatsList>
          <StatsLabel className="label">Likes</StatsLabel>
          <span className="quantity">{stats.likes}</span>
        </StatsList>
      </Stats>
    </Wrapper>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
