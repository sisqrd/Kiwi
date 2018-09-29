import React, {Component} from 'react';
import Auxilary from '../../highorder/Auxilary';

class Layout extends Component {
  render(){
    return(
      <Auxilary>
        <main className = "Content">
          {this.props.children}
        </main>
      </Auxilary>
    )
  }
}

export default Layout;
