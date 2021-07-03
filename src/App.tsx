import React from 'react';

import { Products, Navbar } from './components';

function App(): JSX.Element {
  return (
    <div className="container">
      <Navbar />
      <Products />
    </div>
  );
}

export default App;
