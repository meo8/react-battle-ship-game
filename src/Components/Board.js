import React, {Component} from 'react';
import Square from './Square.js'

class Board extends Component {
  constructor (){
  super ()
  this.state = {
    board: [0,0,0,0,0,0,0,0,0,0],
    }
  }

  indexLocation = (index) => {


  }

  render() {
    let square = this.state.board.map((value, index) => {
      return(
        <Square
          index = {index}
          indexLocation = {this.indexLocation}
          />
      )
    })
    return (
      <div id="board">
        {square}
      </div>
    );
  }
}

export default Board;
