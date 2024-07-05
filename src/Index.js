import React from 'react';
import Greeting from './Greeting.tsx';
import Compteur from './Compteur.tsx';

const App = () => {
  return (
    <div>
      <Greeting name="Alice" />
      <Compteur />
    </div>
  );
};

export default App;