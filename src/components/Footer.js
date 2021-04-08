import React, { Component } from "react"
import * as styles from "../css/footer.module.css"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import { Link } from "gatsby"
export default class Footer extends Component {
  render() {
    return (
      <footer className={`footer ${styles.footer}`}>
        <div className={styles.footerLinks}>
          {links.map((link, index) => (
            <Link key={index} to={link.path}>
              {link.text}
            </Link>
          ))}
        </div>
        <div className={styles.socialIcons}>
          {socialIcons.map((icon, index) => (
            <a key={index} href={icon.url} target="_blank" rel="noreferrer">
              {icon.icon}
            </a>
          ))}
        </div>
        <div className={styles.copyright}>
          Copyright &copy; Abizera Oreste {new Date().getFullYear()} All rights
          reserved
        </div>
      </footer>
    )
  }
}
