import { Link } from "gatsby"
import React, { Component } from "react"
import { FaEye, FaTimes } from "react-icons/fa"
import Banner from "../../components/Banner"
import Layout from "../../components/Layout"
import projects from "../../constants/projects"
import * as styles from "../../css/singleProject.module.css"

export default class SingleProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects,
      selectedImage: null,
    }
  }
  render() {
    const { slug } = this.props.params
    const currentProject = this.state.projects.find(
      project => project.slug === slug
    )

    const changeSelectedImage = (newImage = null) => {
      this.setState({
        ...this.state,
        selectedImage: newImage,
      })
    }
    return (
      <>
        {this.state.selectedImage && (
          <div className={styles.modal}>
            <div className={styles.modalImageContainer}>
              <FaTimes onClick={() => changeSelectedImage()}></FaTimes>
              <img
                src={this.state.selectedImage}
                alt={currentProject.title}
              ></img>
            </div>
          </div>
        )}
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
                      <div className={styles.imageContainer} key={index}>
                        <div className={styles.imageHover}>
                          <FaEye
                            onClick={() => changeSelectedImage(value)}
                          ></FaEye>
                        </div>
                        <img
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
      </>
    )
  }
}
