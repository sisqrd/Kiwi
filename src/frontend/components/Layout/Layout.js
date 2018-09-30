import React, {Component} from 'react';
import Auxilary from '../../highorder/Auxilary';
import Toolbar from '../Navigation/Toolbar/Toolbar'

class Layout extends Component {
  render(){
    return(
      <Auxilary>
        <Toolbar />
        <main className = "Content">
          {this.props.children}
        </main>
      </Auxilary>
    )
  }
}

export default Layout;
