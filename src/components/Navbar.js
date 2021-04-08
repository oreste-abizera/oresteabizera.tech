import { Link } from "gatsby"
import React, { Component } from "react"
import * as styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import socialIcons from "../constants/social-icons"

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: true,
      socialIcons,
    }
  }
  render() {
    return (
      <nav className={`navbar ${styles.navbar}`}>
        <Link to="/#home" className={styles.logo}>
          <span>A</span>
          <span>O</span>
        </Link>
        <div>
          <FaAlignRight className={styles.navToggler}></FaAlignRight>
          <div className={styles.socialIcons}>
            {this.state.socialIcons.map((icon, index) => (
              <Link key={index} to={icon.url} target="_blank">
                {icon.icon}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    )
  }
}
