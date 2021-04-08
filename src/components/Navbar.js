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
      isOpen: false,
      socialIcons,
      links,
    }
  }
  render() {
    const toggleNavbar = () => {
      this.setState({ isOpen: !this.state.isOpen })
    }
    return (
      <nav
        className={
          this.state.isOpen
            ? `navbar ${styles.navbar} ${styles.navbarShown}`
            : `navbar ${styles.navbar} ${styles.navbarHidden}`
        }
      >
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
          <FaAlignRight
            className={styles.navToggler}
            onClick={toggleNavbar}
          ></FaAlignRight>
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
