import React, {Component} from 'react';
import Square from './Square.js';

class Board extends Component {
  constructor (){
  super ()
  this.state = {
    board: this.generateBoard(20),
    counter: 10,
    ship: "🚢",
    shipLoc: this.generateShips(7)
    }
  }

  generateShips = (shipsToSink) => {
    // makes unique number
    let array = [0,1,2,3,4,5,6,7,8,9];
    let newArr = [];

    for (let n = 0; n < shipsToSink; ++n) {
      let i = Math.floor((Math.random() * (9 - n)) + 1);
      newArr.push(array[i]);
      array[i] = array[9 - n];
    }
    console.log(newArr);
    return newArr;
  }

  generateBoard = (num) => {
    let array = [];
    if (num % 5 === 0) {
      for (let i = 1; i <= num; i++) {
        array.push("");
      }
    } else {
      // for now it's a console.log, but should appear where the win/lose messages would be; i.e., setState of message to the follow
      console.log("Please enter numbers divisible by 5 only (5, 10, 15, etc.)")
    }
    return array;
  }

  indexLocation = (index, count) => {
    let { shipLoc, board, ship } = this.state;
    let newBoard = board;

    this.setState({counter: count});
    // checks if the location of ship is the same as index, if it is, show the ship icon
    for (let i = 0; i < shipLoc.length; i++) {
      if (shipLoc[i] === index) {
        newBoard[index] = ship;
        this.setState({board: newBoard});
      }
    }

}
  render() {
    // generates 1 Square comp. for every element in the board
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
