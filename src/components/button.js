import React from 'react'
import './css/continue_button.css'

const ContinueButton = ({ onClick, disabled }) => {
  return (
    <button className="continue-button" disabled={disabled} onClick={onClick}>
      Continue
    </button>
  );
};

export default ContinueButton;
