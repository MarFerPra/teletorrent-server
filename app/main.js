import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../views/main.jsx';

const client = require('./clientInitializer');
const clientHandler = require('./clientHandler');

console.log(clientHandler.getTorrents(client));

window.onload = function(){
  ReactDOM.render(<Main />, document.getElementById('content'));
}
