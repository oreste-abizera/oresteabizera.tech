import React, { Component } from "react"
import * as styles from "../css/contact.module.css"
import Title from "./Title"
import img from "../images/img1.png"

export default class ContactMe extends Component {
  render() {
    return (
      <div id="contact" className={styles.contact}>
        <Title first="Talk" last="to me"></Title>
        <div className={styles.info}>
          <div>
            <img src={img} className={styles.contactImage} alt="Profile"></img>
          </div>
          <div className={styles.discover}>
            <h2>SOCIAL NETWORKS</h2>
            <p>
              I am looking to collaborate on anything! Don't hesitate to talk to
              me if you have any project. Ask me about anything, I am happy to
              help.
            </p>
            <p>
              You can reach me via{" "}
              <a
                href="https://twitter.com/abizeraoreste"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>{" "}
              or{" "}
              <a
                href="https://www.instagram.com/coder__tauras/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              . You can send me an email at{" "}
              <a href="mailto:oresteabizera11@gmail.com">
                oresteabizera11@gmail.com
              </a>
            </p>
            <i style={{ marginTop: "1rem" }}>
              "I respond in less than no time."
            </i>
          </div>
        </div>
      </div>
    )
  }
}
