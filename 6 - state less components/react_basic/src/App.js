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
        <Header header_value="Wellcome to ReactJs..."/>
        <Home name={"Batman"} company={"DC"} data_object={heroes} age={27}>
          <p>This is a paragraph....</p>
        </Home>
      </div>
    );
  }
}

export default App;
