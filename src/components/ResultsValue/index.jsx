import PropTypes from 'prop-types';

import { Container } from './styles';

export function ResultsValue({ value }) {
  return (
    <Container>
      <h1>{value}</h1>
    </Container>
  )
}

ResultsValue.propTypes = {
  value: PropTypes.number,
  placeholder: PropTypes.string,
};

