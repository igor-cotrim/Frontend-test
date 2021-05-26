import PropTypes from 'prop-types';

import { Container } from './styles';

export function InputValues({ label, value, onChange }) {
  return (
    <Container>
        <label htmlFor="valueSale">
          {label}
        </label>
        <input type="number" value={value} onChange={onChange} />
    </Container>
  )
}

InputValues.propTypes = {
  label: PropTypes.string.isRequired,
  hint: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

