import React from 'react';
import isEmpty from "../../utils/is-empty";

export const SelectListGroup = ({label, name, value, options, error, onChange}) => {
  const option = !isEmpty(options) ? options.map( item => <option key={item._id} value={item.name}>{item.name}</option>) : null
    
  return (
    <div className="form-group">
    {label && <div className="label-inputs">{label}</div>}
        <select
            name={name}
            value={value}
            onChange={onChange}>
            <option value="">Select one</option>
            {option}
        </select>
    {error && <div className="error-label">{error}</div>}
    </div>
  )
}


export default SelectListGroup;
