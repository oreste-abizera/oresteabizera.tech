import React, { Component } from "react"
import * as styles from "../css/about.module.css"
import Title from "./Title"
import img from "../images/bg1.jpg"

export default class AboutMe extends Component {
  render() {
    return (
      <div id="about" className={styles.about}>
        <Title first="About" last="Me"></Title>
        <div className={styles.info}>
          <div>
            <img src={img} className={styles.aboutImage}></img>
          </div>
          <div></div>
        </div>
      </div>
    )
  }
}
