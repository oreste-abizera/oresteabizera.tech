import { Link } from "gatsby"
import React, { Component } from "react"
import { FaEye } from "react-icons/fa"
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
          <>
            <header className={styles.projectHero}>
              {/* <h2>{currentProject.title}</h2> */}
              <Banner title={currentProject.title}></Banner>
            </header>
            <div className={styles.projectInfo}>
              <div>
                <h2>Images</h2>
                {[currentProject.social_image, ...currentProject.images].map(
                  (value, index) => (
                    <div className={styles.imageContainer}>
                      <div className={styles.imageHover}>
                        <FaEye></FaEye>
                      </div>
                      <img
                        key={index}
                        src={value}
                        alt={currentProject.title}
                        className={styles.projectImage}
                      ></img>
                    </div>
                  )
                )}
              </div>
              <div>
                <h2>Project info</h2>
              </div>
            </div>
          </>
        )}
      </Layout>
    )
  }
}
