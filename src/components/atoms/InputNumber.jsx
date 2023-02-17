import React from 'react';

const InputNumber = ({ inputValue, inputName, inputChangeCb }) =>
  <input
    type='number'
    placeholder={inputValue}
    name={inputName}
    onChange={inputChangeCb}
  />

  export default InputNumber;
