import React, { Component } from 'react';
import './../App.css';

class Home extends Component {
  render() {

    console.log("props: ",this.props);

    return (
      <div className="App-intro">

        our codes goes here....

        <p>Name: {this.props.name}</p>
        <p>Company: {this.props.company}</p>

        <ul>
        Heroes :{this.props.data_object.name.map((name)=> <li key={name}>{name}</li>)}
        </ul>

        {this.props.children}

      </div>
    );
  }
}

export default Home;
