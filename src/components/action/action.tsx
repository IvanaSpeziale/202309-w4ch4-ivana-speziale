import React, { useState } from 'react';
import Actions from '../actions/actions';
import Display from '../display/display';
import Info from '../info/info';
import Keyboard from '../keyboard/keyboard';

const Action = ({ onCallClick, onHangClick }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCallClick = () => {
    if (phoneNumber.length === 9) {
      onCallClick();
    }
  };

  const handleHangClick = () => {
    setPhoneNumber('');
    onHangClick();
  };

  const handleDigitClick = (digit) => {
    if (phoneNumber.length < 9) {
      setPhoneNumber(phoneNumber + digit);
    }
  };

  const handleDeleteClick = () => {
    setPhoneNumber(phoneNumber.slice(0, -1));
  };

  return (
    <main className="phone">
      <Info />
      <Display phoneNumber={phoneNumber} />
      <Keyboard
        onDigitClick={handleDigitClick}
        onDeleteClick={handleDeleteClick}
      />
      <Actions
        phoneNumber={phoneNumber}
        onCallClick={handleCallClick}
        onHangClick={handleHangClick}
      />
    </main>
  );
};

export default Action;
