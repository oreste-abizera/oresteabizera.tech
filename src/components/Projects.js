import { Link } from "gatsby"
import React, { Component } from "react"
import { FaEye } from "react-icons/fa"
import projects from "../constants/projects"
import * as styles from "../css/projects.module.css"
import Title from "./Title"

export default class Projects extends Component {
  render() {
    return (
      <div className={styles.projectsContainer} id="projects">
        <Title first="Featured" last="Works"></Title>
        <div className={styles.projects}>
          {projects.map((project, index) => (
            <div key={index} className={styles.project}>
              <img src={project.social_image} alt={project.title}></img>
              <div className={styles.info}>
                <div>
                  <h4>{project.title}</h4>
                  <p>Type: {project.type}</p>
                </div>
                <Link to={`/projects/${project.slug}`}>
                  <FaEye></FaEye>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
