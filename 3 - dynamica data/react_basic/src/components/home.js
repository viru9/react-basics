import React, { Component } from 'react';
import './../App.css';

class Home extends Component {
  render() {

let data = "";

if(true){
data = <p>Hello....</p>;
}

    return (
      <div className="App-intro">

        our codes goes here....

        {data}

        {5>2?"true":"false"}

      </div>
    );
  }
}

export default Home;
