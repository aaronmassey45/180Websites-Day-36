import React, { Component } from 'react';

export default class Buttons extends Component {
  constructor(props){
    super(props);

    this.buttonClick = this.buttonClick.bind(this);
  }
  buttonClick(e) {
    let data = e.target.getAttribute('value');
    this.props.getVal(data);
  }
  render() {
    return (
      <div className='Buttons'>
        <div className='col-xs-12'>
          <div className="fl tt">
            <button className='btn btn-danger' onClick={this.buttonClick} value='del'>DEL</button>
          </div>
          <div className="fl tt">
            <button className='btn btn-danger' onClick={this.buttonClick} value='ce'>CE</button>
          </div>
          <div className="fl tt">
            <button className='btn btn-default' onClick={this.buttonClick} value='/'>&divide;</button>
          </div>
          <div className="fl tt">
            <button className='btn btn-default' onClick={this.buttonClick} value='*'>&times;</button>
          </div>
        </div>
        <div className='col-xs-12'>
          <div className="fl tt">
            <button className='btn btn-default' onClick={this.buttonClick} value='9'>9</button>
          </div>
          <div className="fl tt">
            <button className='btn btn-default' onClick={this.buttonClick} value='8'>8</button>
          </div>
          <div className="fl tt">
            <button className='btn btn-default' onClick={this.buttonClick} value='7'>7</button>
          </div>
          <div className="fl tt">
            <button className='btn btn-default' onClick={this.buttonClick} value='-'>-</button>
          </div>
        </div>
        <div className='col-xs-12'>
          <div className="fl tt">
            <button className='btn btn-default' onClick={this.buttonClick} value='6'>6</button>
          </div>
          <div className="fl tt">
            <button className='btn btn-default' onClick={this.buttonClick} value='5'>5</button>
          </div>
          <div className="fl tt">
            <button className='btn btn-default' onClick={this.buttonClick} value='4'>4</button>
          </div>
          <div className="fl tt">
            <button className='btn btn-default' onClick={this.buttonClick} value='+'>+</button>
          </div>
        </div>
        <div className='col-xs-12'>
          <div className="fl tt">
            <button className='btn btn-default' onClick={this.buttonClick} value='3'>3</button>
          </div>
          <div className="fl tt">
            <button className='btn btn-default' onClick={this.buttonClick} value='2'>2</button>
          </div>
          <div className="fl tt">
            <button className='btn btn-default' onClick={this.buttonClick} value='1'>1</button>
          </div>
        </div>
        <div className='col-xs-12'>
          <div className="fl ff">
            <button className='btn btn-default' onClick={this.buttonClick} value='0'>0</button>
          </div>
          <div className="fl tt">
            <button className='btn btn-default' onClick={this.buttonClick} value='.'>.</button>
          </div>
          <div className="fl tt">
            <button className='btn btn-success equal' onClick={this.buttonClick} value='='>=</button>
          </div>
        </div>
      </div>
    );
  }
}
