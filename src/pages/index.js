import React, { Component } from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
export default class Home extends Component {
  render() {
    return (
      <Layout>
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
            <div style={{ fontSize: "18px", letterSpacing: "1.5px" }}>
              I'm Abizera Oreste
            </div>
          </section>
        </Hero>
      </Layout>
    )
  }
}
