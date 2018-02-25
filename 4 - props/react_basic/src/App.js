import React, {Component} from 'react';
import './App.css';

import Header from './components/header';
import Home from './components/home';

class App extends Component {
  render() {

let heroes = {
  name:["Iron Man","Black Panther"],
  company:"Marvel"
}

    return (
      <div className="App">
        <Header/>
        <Home name={"Batman"} company={"DC"} data_object={heroes}>
          <p>This is a paragraph....</p>
        </Home>
      </div>
    );
  }
}

export default App;
