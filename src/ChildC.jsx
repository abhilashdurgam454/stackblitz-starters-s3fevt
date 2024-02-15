import React, { useContext } from 'react';
import { DataContext } from './App';

const ChildC = () => {
  const datas = useContext(DataContext);

  return (
    <div>
      <h1>this is a name: {datas}</h1>
    </div>
  );
};

export default ChildC;
