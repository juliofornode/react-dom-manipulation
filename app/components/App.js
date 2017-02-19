import React from 'react';
import {Link} from 'react-router';

const App = () => {
  return (
    <div>
      <Link to='/native-elements'>Native Elements</Link><br/>
      <Link to='/react-elements'>React Elements</Link><br/>
    </div>
  );
};

export default App;
