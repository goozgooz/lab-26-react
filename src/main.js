import React from 'react';
import ReactDom from 'react-dom';
import {say} from 'cowsay';


class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        content: 'mooooo',
      }
  }


  render() {
    return (
      <div>
        <h1>Hello Peeps</h1>
        <button> click me </button>
      </div>
    )
  }
}

let poo = say({text:'hi'});


ReactDom.render(<App />, document.getElementById('root'));