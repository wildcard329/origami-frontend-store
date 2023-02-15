import React from 'react';

const AppButton = ({ btnCb, btnLabel }) => 
  <button className='app-button' onClick={btnCb}>{btnLabel}</button>

export default AppButton;
