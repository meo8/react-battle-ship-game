import React, {Component} from 'react';

class Square extends Component {
  constructor (props){
  super(props)
    this.state = {
      isclicked: "off",
      color: "green",
      isDisabled: ""
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
      this.setState({color:"green"});
      this.setState({isDisabled: "disabled"})
      return count = 0
    }

    this.props.indexLocation(this.props.index, count)
  }


  render() {
    return (
      <div className="square" disabled={this.state.isDisabled} onClick={this.handleClick} isclicked={this.state.isclicked} style={{ backgroundColor: this.state.color }}>
      {this.props.value}
      </div>
    );
  }
}

export default Square;
