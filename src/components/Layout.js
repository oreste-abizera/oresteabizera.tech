import React, { Component } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "../css/layout.css"
import ScrollToTop from "./ScrollToTop"
import TopBanner from "./TopBanner"

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <TopBanner> </TopBanner>
        <ScrollToTop></ScrollToTop>
        <Navbar />
        <main className="main">{this.props.children}</main>
        <Footer />
      </React.Fragment>
    )
  }
}
