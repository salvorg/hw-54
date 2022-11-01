import React from 'react';

interface Props {
  onButtonClick: React.MouseEventHandler;
}

const ResetButton: React.FC<Props> = ({onButtonClick}) => {
  return (
    <div>
      <button onClick={onButtonClick}>Reset</button>
    </div>
  );
};

export default ResetButton;