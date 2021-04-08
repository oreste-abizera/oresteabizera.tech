import React, { Component } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main>{this.props.children}</main>
        <Footer />
      </React.Fragment>
    )
  }
}
