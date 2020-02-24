import React, {Component} from 'react';

class Square extends Component {
  constructor (props){
  super(props)
    this.state = {
      isclicked: "off",
      color: "green"
    }
  }

  handleClick = () => {
    if (this.state.isclicked === "off") {
      this.setState({isclicked: "on"})
      this.setState({backgroundColor: "red"})
    }
  }

  render() {
    return (
      <div className="square" onClick={this.handleClick} isclicked={this.state.isclicked} style={{ backgroundColor: this.state.color }}>
      </div>
    );
  }
}

export default Square;
