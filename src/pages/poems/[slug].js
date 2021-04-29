import { Link } from "gatsby"
import React, { Component } from "react"
import Banner from "../../components/Banner"
import Layout from "../../components/Layout"
import PDFReader from "../../components/PDFViewer/PDFReader"
import SEO from "../../components/SEO"
import poems from "../../constants/poems"
import * as styles from "../../css/singlePoem.module.css"
export default class SinglePoem extends Component {
  render() {
    const {
      params: { slug },
    } = this.props
    const currentPoem = poems.find(poem => poem.slug === slug)
    if (!currentPoem) {
      return (
        <>
          <Layout>
            <SEO title="Error"></SEO>
            <header className={styles.errorHero}>
              <Banner title="info not found">
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
        </>
      )
    }
    return (
      <>
        <Layout>
          <SEO title={`${currentPoem.title} by ${currentPoem.author}`}></SEO>
          {currentPoem && (
            <>
              <header className={styles.poemHero}>
                <Banner title={currentPoem.title} subtitle="by">
                  <h2>{currentPoem.author}</h2>
                </Banner>
              </header>
              <div className={styles.pdfContainer}>
                <PDFReader file={currentPoem.file}></PDFReader>
              </div>
            </>
          )}
        </Layout>
      </>
    )
  }
}
