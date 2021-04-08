import { Link } from "gatsby"
import React, { Component } from "react"
import * as styles from "../css/navbar.module.css"

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: true,
    }
  }
  render() {
    return (
      <nav className={`navbar ${styles.navbar}`}>
        <Link to="/#home" className={styles.logo}>
          <span>A</span>
          <span>O</span>
        </Link>
      </nav>
    )
  }
}
