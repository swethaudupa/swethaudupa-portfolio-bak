import React, { Component } from "react"
import ReactLoading from 'react-loading';

import  styles from  "./loadingIndicator.module.css";

class Loader extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
    }
  }
  componentDidMount() {
    window.setTimeout(() => this.hideLoadingOverlay(), 1000)
  }

  hideLoadingOverlay() {
    this.setState({
      loading: false,
    })
  }
  render() {
    console.log("this.stateinn.loading", this.state.loading)
    return (
      <div>
         {this.state.loading ? (
            <ReactLoading className = {styles.loaderStyle} type={"spinningBubbles"} color={"black"} height={'100%'} width={'100%'} />
         ) : (
            <div>{this.props.children}</div>
         )}
      </div>
    )
  }
}

export default Loader
