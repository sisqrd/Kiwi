import React, {Component} from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar'

class Layout extends Component {
  render(){
    return(
      <div style={{height:'100%', marginTop:"20px"}}>
        <Toolbar style={{margin:'20px'}}/>
        <main className = "Content">
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout;
