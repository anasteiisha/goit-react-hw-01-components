import PropTypes from 'prop-types';

import {
  Section,
  Container,
  List,
  ListItems,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      <Container>
        {title && <h2> {title}</h2>}
        <List>
          {stats.map(dataEl => (
            <ListItems key={dataEl.id}>
              <Label>{dataEl.label}</Label>
              <Percentage>{dataEl.percentage}</Percentage>
            </ListItems>
          ))}
        </List>
      </Container>
    </Section>
  );
};

Statistics.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.number.isRequired,
  stats: PropTypes.string.isRequired,
};
