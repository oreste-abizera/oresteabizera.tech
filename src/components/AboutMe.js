import React, { Component } from "react"
import * as styles from "../css/about.module.css"
import Title from "./Title"

export default class AboutMe extends Component {
  render() {
    return (
      <div id="about" className={styles.about}>
        <Title first="About" last="Me"></Title>
      </div>
    )
  }
}
