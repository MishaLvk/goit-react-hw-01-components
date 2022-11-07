import PropTypes from 'prop-types';

import {
  Wrapper,
  Title,
  TitleElement,
  Line,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Wrapper className="transaction-history">
      <thead>
        <Title>
          <TitleElement>Type</TitleElement>
          <TitleElement>Amount</TitleElement>
          <TitleElement>Currency</TitleElement>
        </Title>
      </thead>

      <tbody>
        {items.map(el => (
          <Line key={el.id}>
            <td>{el.type}</td>
            <td>{el.amount}</td>
            <td>{el.currency}</td>
          </Line>
        ))}
      </tbody>
    </Wrapper>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
