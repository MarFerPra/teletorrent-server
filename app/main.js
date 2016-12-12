import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../views/main.jsx';

const client = require('./clientInitializer');
const clientHandler = require('./clientHandler');

window.onload = function(){
  ReactDOM.render(<Main client={client} clientHandler={clientHandler} />, document.getElementById('content'));
}
