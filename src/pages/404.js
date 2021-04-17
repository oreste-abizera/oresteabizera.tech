import { Link } from "gatsby"
import React, { Component } from "react"
import Banner from "../components/Banner"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import * as styles from "../css/error.module.css"

export default class ErrorPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Error"></SEO>
        <header className={styles.errorHero}>
          <Banner title="Oops! You lost the way!">
            <Link
              to="/"
              className="btn-white"
              style={{ textDecoration: "none" }}
            >
              Return To Home
            </Link>
          </Banner>
        </header>
      </Layout>
    )
  }
}
