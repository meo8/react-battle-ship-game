import React, {Component} from 'react';
import Square from './Square.js'

class Board extends Component {
  constructor (){
  super ()
  this.state = {
    board: [0,0,0,0,0,0,0,0,0,0],
    counter: 5
    }
  }

  indexLocation = (count) => {
    this.setState({counter: count});

  }

  render() {
    let square = this.state.board.map((value, index) => {
      return(
        <Square
          key={index}
          index = {index}
          counter={this.state.counter}
          indexLocation = {this.indexLocation}
          />
      )
    })
    return (
      <div id="board">
        <h1>Battle Ship</h1>
        <h2 id="counter">Torpedoes left: {this.state.counter}</h2>

        <div id="squares">
          {square}
        </div>
      </div>
    );
  }
}

export default Board;
