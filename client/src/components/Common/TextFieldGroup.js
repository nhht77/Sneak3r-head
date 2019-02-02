import React from 'react';

const TextFieldGroup = ({
  label, 
  name, 
  value, 
  onChange, 
  type, 
  error
  }) =>  {
  return (
    <div className="group">
    <div className="form-group">
    <div className="label-inputs">{label}</div>
    <input
        name={name}
        value={value}
        onChange={onChange}
        type={type} />
    {error && <div className="error-label">{error}</div>}
    </div>
    </div>
  )
}

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
