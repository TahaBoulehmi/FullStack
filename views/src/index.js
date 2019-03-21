import React from 'react';
import ReactDOM from 'react-dom';
import app from '@helpers/app.js';
const App = () => {
  return (
    <div>
    {app('FullStack JS')}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
