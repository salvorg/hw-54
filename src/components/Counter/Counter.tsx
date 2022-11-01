import React from 'react';

interface Props {
  cellCount: number;
}

const Counter: React.FC<Props> = ({cellCount}) => {

  return (
    <p>
      Tries: {cellCount}
    </p>
  );
};

export default Counter;