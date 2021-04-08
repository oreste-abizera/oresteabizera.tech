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
            <img src={img} className={styles.aboutImage} alt="Profile"></img>
          </div>
          <div className={styles.discover}>
            <h2>DISCOVER MY INFO</h2>
            <p>
              I am a Software Engineer based in Rwanda. I focus on writing some
              codes everyday to solve many problems. I use <b>React js</b> ,{" "}
              <b>Next js</b> and <b>Gatsby</b> for frontend on the web.{" "}
              <b>Node js</b> helps me on backend and <b>React Native</b> for
              mobile development.
            </p>
            <i>"Talk is cheap, write some code."</i>
          </div>
        </div>
      </div>
    )
  }
}
