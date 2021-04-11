import React, { Component } from "react"
import projects from "../constants/projects"
import * as styles from "../css/projects.module.css"
import Title from "./Title"

export default class Projects extends Component {
  render() {
    console.log(projects)
    return (
      <>
        <Title first="Featured" last="Works"></Title>
        <div className={styles.projects}>
          {projects.map((project, index) => (
            <div key={index}>{project.title}</div>
          ))}
        </div>
      </>
    )
  }
}
