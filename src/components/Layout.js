import React, { Component } from "react"
import Navbar from "./Navbar"

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main>{this.props.children}</main>
      </React.Fragment>
    )
  }
}
