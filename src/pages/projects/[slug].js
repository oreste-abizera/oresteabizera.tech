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
          <p>hello from single project page</p>
        )}
      </Layout>
    )
  }
}
