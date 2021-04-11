import { Link } from "gatsby"
import React, { Component } from "react"
import Banner from "../../components/Banner"
import Layout from "../../components/Layout"
import projects from "../../constants/projects"
import * as styles from "../../css/singleProject.module.css"

export default class SingleProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects,
    }
  }
  render() {
    const { slug } = this.props.params
    const currentProject = this.state.projects.find(
      project => project.slug === slug
    )
    return (
      <Layout>
        {!currentProject ? (
          <>
            <header className={styles.errorHero}>
              <Banner title="Project info not found">
                <Link
                  to="/"
                  className="btn-white"
                  style={{ textDecoration: "none" }}
                >
                  Return To Home
                </Link>
              </Banner>
            </header>
          </>
        ) : (
          <div className={styles.projectInfo}>
            <h2>{currentProject.title}</h2>
            <div>
              <h2>Images</h2>
              {[1, 2, 3].map((value, index) => (
                <div className={styles.imageContainer}>
                  <img
                    key={index}
                    src={currentProject.social_image}
                    alt={currentProject.title}
                    className={styles.projectImage}
                  ></img>
                </div>
              ))}
            </div>
            <div>
              <h4>description</h4>
            </div>
          </div>
        )}
      </Layout>
    )
  }
}
