import React, { Component } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "../css/layout.css"

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="main">{this.props.children}</main>
        <Footer />
      </React.Fragment>
    )
  }
}
