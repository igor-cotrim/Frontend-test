import PropTypes from 'prop-types';

import { Container, Input } from './styles';

export function InputValues({label, currency, parcel, value, onChange, size, margin, min, max, placeholder}) {
  return (
    <Container>
        <label htmlFor="valueSale">
          {label}
        </label>
        <div>
          <h3>{currency}</h3>
          <Input value={value} onChange={onChange} size={size} margin={margin} min={min} max={max} placeholder={placeholder}/>
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
  size: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

