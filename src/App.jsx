// App.jsx or any parent component
import React from 'react';
import LineExample from './Components/Skills/Skills';


const App = () => {
  return (
    <div style={{ minHeight: '10vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f0f0f0' }}>
      <LineExample />
    </div>
  );
};

export default App;
