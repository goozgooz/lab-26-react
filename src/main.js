import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {say} from 'cowsay';
import faker from 'faker';


class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        content: 'click the button!',
      }
    
    this.handleCow = this.handleCow.bind(this);
  };

  handleCow () {
    this.setState({content: faker.lorem.words(3)});
  };

  render() {
    return (
      <div id='moo'>
        <Header />
        <button onClick={this.handleCow}> click me </button>
        <pre>{say({text: this.state.content})}</pre>
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <h1> Generate Cowsay Lorem </h1>
    )
  }
}


ReactDom.render(<App />, document.getElementById('root'));