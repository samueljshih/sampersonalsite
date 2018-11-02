import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="Navbar">
          <Navbar />
        </div>
      </div>
    );
  }
}

export default App;
