import { Link } from "gatsby"
import React, { Component } from "react"
import {
  FaAngleLeft,
  FaAngleRight,
  FaEye,
  FaGithub,
  FaGlobe,
  FaTimes,
} from "react-icons/fa"
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

    const displayImages = [
      currentProject.social_image,
      ...currentProject.images,
    ]

    const changeSelectedImage = (newImage = null) => {
      this.setState({
        ...this.state,
        selectedImage: newImage,
      })
    }

    const previousImage = () => {
      if (this.state.selectedImage > 0) {
        this.setState({
          ...this.state,
          selectedImage: this.state.selectedImage - 1,
        })
      }
    }

    const nextImage = () => {
      if (this.state.selectedImage < displayImages.length - 1) {
        this.setState({
          ...this.state,
          selectedImage: this.state.selectedImage + 1,
        })
      }
    }

    const { selectedImage } = this.state

    return (
      <>
        {selectedImage !== null && (
          <div className={styles.modal}>
            <div className={styles.modalImageContainer}>
              <FaTimes
                className={styles.close}
                onClick={() => changeSelectedImage()}
              ></FaTimes>
              <FaAngleLeft
                onClick={previousImage}
                className={styles.navigationIcon}
              ></FaAngleLeft>
              <img
                src={displayImages[selectedImage]}
                alt={currentProject.title}
              ></img>
              <FaAngleRight
                onClick={nextImage}
                className={styles.navigationIcon}
              ></FaAngleRight>
              <div className={styles.imageNavigation}>
                <p>
                  <span style={{ color: "var(--primaryColor)" }}>
                    {" "}
                    {selectedImage + 1} /
                  </span>{" "}
                  {displayImages.length} images
                </p>
              </div>
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
                  {displayImages.map((value, index) => (
                    <div className={styles.imageContainer} key={index}>
                      <div className={styles.imageHover}>
                        <FaEye
                          onClick={() => changeSelectedImage(index)}
                        ></FaEye>
                      </div>
                      <img
                        src={value}
                        alt={currentProject.title}
                        className={styles.projectImage}
                      ></img>
                    </div>
                  ))}
                </div>
                <div>
                  <h2>Project info</h2>
                  <p className={styles.description}>
                    {currentProject.description}
                  </p>
                  <h3>Technologies</h3>
                  <ul className={styles.technologiesList}>
                    {currentProject.technologies.map((technology, index) => (
                      <li key={index}>{technology}</li>
                    ))}
                  </ul>
                  <div className={styles.iconLinks}>
                    {currentProject.github_url && (
                      <a
                        href={currentProject.github_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub></FaGithub>
                      </a>
                    )}
                    {currentProject.site_url && (
                      <a
                        href={currentProject.site_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGlobe></FaGlobe>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </Layout>
      </>
    )
  }
}
