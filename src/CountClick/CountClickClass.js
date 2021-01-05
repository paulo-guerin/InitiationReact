import React, { Component } from 'react';

export default class CountClickClass extends Component {
    state = {
      count: 0
    };
  
    handleClick = () => {
      this.setState({ count: this.state.count + 1 });
    };
  
    render() {
      return (
        <button className="block" onClick={this.handleClick}>
          <div className="counter">{this.state.count}</div>
        </button>
      );
    }
  }