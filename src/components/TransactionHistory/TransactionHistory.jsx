import PropTypes from 'prop-types';
import {
  Container,
  Table,
  Thead,
  Tbody,
  Type,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Container>
      <Table>
        <Thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </Thead>

        <Tbody>
          {items.map(({ type, amount, currency }) => (
            <tr>
              <Type>{type}</Type>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.number.isRequired,
};
