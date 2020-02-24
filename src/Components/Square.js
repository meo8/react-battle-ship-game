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
    let count = this.props.counter; // 5

    if (this.state.isclicked === "off") {
      count = this.props.counter - 1;
      this.setState({isclicked: "on"})
      this.setState({color: "red"})
    }

    if (count < 0) {
      this.setState({color:"green"})
      return count = 0
    }

    this.props.indexLocation(count)
  }


  render() {
    return (
      <div className="square" onClick={this.handleClick} isclicked={this.state.isclicked} style={{ backgroundColor: this.state.color }}>
      </div>
    );
  }
}

export default Square;
