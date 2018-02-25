import React, { Component } from 'react';
import './../App.css';

class Home extends Component {

  constructor(props){
   super(props);

this.state = {
  stateAge:props.age
}

  }

  onButtonClick(){
console.log("innnnnnn: ",this.props.age);

this.setState({
  stateAge:this.state.stateAge+1  
});

  }

  render() {

    return (
      <div className="App-intro">

        our codes goes here....

        <p>Name: {this.props.name}</p>
        <p>Company: {this.props.company}</p>
        <p>Age: {this.state.stateAge}</p>

<button onClick={this.onButtonClick.bind(this)}>Click</button>

      </div>
    );
  }
}

export default Home;
