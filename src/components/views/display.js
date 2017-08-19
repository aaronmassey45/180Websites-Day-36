import React, { Component } from 'react';

export default class Display extends Component {
  render() {
    let value;
    if(this.props.value !== '') {
      value = this.props.value;
    } else {
      value = 0;
    }
    return (
      <div className="Display">
        {value}
      </div>
    );
  }
}
