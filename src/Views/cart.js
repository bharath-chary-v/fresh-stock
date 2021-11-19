import React from 'react'
import Cart from './cart2';
import {Button} from 'react-bootstrap'

class Mycomponent extends React.Component {
    constructor() {
      super();
  
      this.state = {
        clicked: false
      };
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState({
        clicked: true
      });
    }
  
    render() {
      return (
        <div >
          <Button className="button-com" onClick={this.handleClick}  >Cart</Button>
          {this.state.clicked ? <Cart /> : null}
        </div>
      );
    }
  };


  export default Mycomponent