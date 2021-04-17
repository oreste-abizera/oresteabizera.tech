import React, { Component } from "react"
import AboutMe from "../components/AboutMe"
import ContactMe from "../components/ContactMe"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
export default class Home extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home"></SEO>
        <Hero>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "75px",
                color: "var(--primaryColor)",
                marginBottom: "5px",
                letterSpacing: "var(--mainSpacing)",
              }}
            >
              Hi there,
            </div>
            <div
              style={{
                fontSize: "18px",
                letterSpacing: "1.5px",
                color: "#ffffff",
              }}
            >
              I'm Abizera Oreste
            </div>
          </section>
        </Hero>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <ContactMe></ContactMe>
      </Layout>
    )
  }
}
