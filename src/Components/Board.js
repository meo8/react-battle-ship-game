import React, {Component} from 'react';
import Square from './Square.js'

class Board extends Component {
  constructor (){
  super ()
  this.state = {
    board: ["","","","","","","","","",""],
    counter: 5,
    ship: "🚢",
    shipLoc: this.generateShips()
    }
  }

  generateShips = () => {
    // makes unique number
    let array = [0,1,2,3,4,5,6,7,8,9];
    let newArr = [];

    for (let n = 0; n < 5; ++n) {
      let i = Math.floor((Math.random() * (9 - n)) + 1);
      newArr.push(array[i]);
      // array[5] = array[9]
      array[i] = array[9 - n];
    }
    console.log(newArr);
    return newArr;
  }

  indexLocation = (index, count) => {
    let { shipLoc, board, ship } = this.state;
    this.setState({counter: count});
    let newBoard = board;

    for (let i = 0; i < shipLoc.length; i++) {
      if (shipLoc[i] === index) {
        newBoard[index] = ship;
        this.setState({board: newBoard});
      }
    }

}
  render() {
    let square = this.state.board.map((value, index) => {
      return(
        <Square
          key={index}
          value = {value}
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
