import PropTypes from 'prop-types';

import {
  Wrapper,
  Title,
  StatList,
  Item,
  ItemLabel,
  ItemPercentage,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Wrapper className="statistics">
      {title && <Title className="title">{title}</Title>}

      <StatList className="stat-list">
        {stats.map(el => (
          <Item className="item" key={el.id}>
            <ItemLabel className="label">{el.label}</ItemLabel>
            <ItemPercentage className="percentage">
              {el.percentage}%
            </ItemPercentage>
          </Item>
        ))}
      </StatList>
    </Wrapper>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
