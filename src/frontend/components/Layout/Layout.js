import React, {Component} from 'react';

class Layout extends Component {
  render(){
    return(
      <>
        <main className = "Content">
          {this.props.children}
        </main>
      </>
    )
  }
}

export default Layout;
