import React, {Component} from 'react';
import {Link} from 'react-router';
import MyReactElement from './MyReactElement';

class ReactElements extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('this.myElement: ', this.myElement);
    console.log('this.myElement.props.id: ', this.myElement.props.id);
    console.log('this.myElement.props.nombre: ', this.myElement.props.nombre);
    console.log('this.myElement.state: ', this.myElement.state);
    console.log('this.myElement.state.apellido: ', this.myElement.state.apellido);
  }

  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <h3>Accessing React Elements using Refs</h3>
        <p>1. identify the element with ref using an arrow functio</p>
        <p>2. we can then refer to refName.propName</p>

        <h4>Example</h4>
        <MyReactElement id="pachamama" ref={(myElement) => this.myElement = myElement}/>
        <button onClick={this.handleClick}>Log Id</button>
      </div>
    );
  }
}

export default ReactElements;
