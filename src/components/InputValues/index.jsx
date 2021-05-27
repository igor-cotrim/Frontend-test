import PropTypes from 'prop-types';

import { Container } from './styles';

export function InputValues({currency, parcel, label, value, onChange }) {
  return (
    <Container>
        <label htmlFor="valueSale">
          {label}
        </label>
        <div>
          <h3>{currency}</h3>
          <input type="number" value={value} onChange={onChange} />
          <h3>{parcel}</h3>
        </div>
    </Container>
  )
}

InputValues.propTypes = {
  label: PropTypes.string.isRequired,
  currency: PropTypes.string,
  parcel: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

