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
    this.setState({content: faker.company.bsBuzz()});
  };

  render() {
    return (
      <div>
        <h1>Hello Peeps</h1>
        <button onClick={this.handleCow}> click me </button>
        <div className='cow'> {say({text: this.state.content})} </div>
      </div>
    )
  }
}


ReactDom.render(<App />, document.getElementById('root'));