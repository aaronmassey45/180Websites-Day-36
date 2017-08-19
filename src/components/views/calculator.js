/* eslint no-eval: 0 */
import React, { Component } from 'react';
import Display from './display';
import Buttons from './buttons';

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      decCount: 0
    }
    this.handleGetVal = this.handleGetVal.bind(this);
  }
  update(val) {
    let joined = this.state.value.concat(val);
    this.setState({ value: joined });
  }
  handleGetVal(value){
    let operators = ['+','-','/','*'];
    let decCount = this.state.decCount;
    if (value === '=') {
      try {
        let total = eval(this.state.value).toString();
        this.setState({ value: total })
      } catch (e) {
          if (e instanceof SyntaxError) {
            alert('You entered in some janky shit! Fix it!');
          }
      }
    } else if (value === 'del') {
      let removed = this.state.value.slice(0, -1);
      if (removed.includes('.')===false) {
        decCount=0;
      }
      this.setState({ value: removed })
    } else if (value === 'ce') {
      decCount=0;
      this.setState({ value: '' })
    } else if (operators.includes(value)) {
      decCount=0;
      if (this.state.value === '') {
        alert(`Can't start with an operator`)
      }
      else if (operators.includes(this.state.value.substr(-1))) {
        alert('Duplicate operator')
      }
      else {
        this.update(value)
      }
    } else if (value === '.') {
      decCount++;
      if (this.state.value === '') {
        this.update(value)
      } else {
        if (decCount > 1) {
          alert('Too many decimals')
        } else {
          this.update(value);
        }
      }
    }
    else {
      this.update(value)
    }
    console.log(decCount);
    this.setState({ decCount });
  }
  render() {
    return (
      <div className='Calculator'>
        <Display value={this.state.value}/>
        <Buttons getVal={this.handleGetVal}/>
      </div>
    );
  }
}
