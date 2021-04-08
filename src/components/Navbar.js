import { Link } from "gatsby"
import React, { Component } from "react"
import * as styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import socialIcons from "../constants/social-icons"
import links from "../constants/links"

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: true,
      socialIcons,
      links,
    }
  }
  render() {
    return (
      <nav className={`navbar ${styles.navbar} ${styles.navbarShown}`}>
        <Link to="/#home" className={styles.logo}>
          <span>A</span>
          <span>O</span>
        </Link>
        <div className={styles.links}>
          {links.map((link, index) => (
            <Link key={index} to={link.path}>
              {link.text}
            </Link>
          ))}
        </div>
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
