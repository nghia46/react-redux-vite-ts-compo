import React from 'react';
import './style.scss';

interface AppButtonProps {
  name: string;
}

const AppButton: React.FC<AppButtonProps> = ({ name }) => {
  return (
    <button className='container' name={name}>
      {name}
    </button>
  );
};

export default AppButton;
