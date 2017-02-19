import React, {Component, PropTypes} from 'react';

class MyReactElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apellido: 'Martines'
    };
  }
  render() {
    return (
      <div>
        This comes from the MyReactElement component.
      </div>
    );
  }
}

MyReactElement.propTypes = {
  nombre: PropTypes.string
};

MyReactElement.defaultProps = {
  nombre: 'Guandolfo'
};

export default MyReactElement;
