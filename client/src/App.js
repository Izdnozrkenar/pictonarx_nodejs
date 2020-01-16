import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  componentDidMount() {
    var testSocket = new WebSocket('ws://localhost:5000')

    testSocket.onopen = function (event) {
      testSocket.send("Client response"); 
    };

    testSocket.onmessage = function (event) {
      console.log(event.data);
    }
  }
  
render() {
  return <div></div>
}
    
}

export default App;