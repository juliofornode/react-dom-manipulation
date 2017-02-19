import React, {Component} from 'react';
import {Link} from 'react-router';

class NativeElements extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.entrada.focus();
  }

  handleClick() {
    console.log('this.entrada.value: ', this.entrada.value);
    this.entrada.value = '';
  }

  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <h3>Accessing native DOM elements</h3>
        <p>1. Identify the element using ref with an arrow functio.</p>
        <p>2. Call the DOM element using this refName.</p>
        <br/>
        <br/>

        <h4>Example:</h4>
        <input ref={(myInput) => this.entrada = myInput}></input>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default NativeElements;
