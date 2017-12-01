import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {say} from 'cowsay';
import faker from 'faker';


class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        content: 'mooooo',
      }
    
    this.handleCow = this.handleCow.bind(this);
  };

  handleCow () {
    this.setState({content: faker.lorem.words(3)});
  };

  render() {
    return (
      <div>
        <Header />
        <button onClick={this.handleCow}> click me </button>
        <div className='cow'> {say({text: this.state.content})} </div>
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