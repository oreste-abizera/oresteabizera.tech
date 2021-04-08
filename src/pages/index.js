import React, { Component } from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
export default class Home extends Component {
  render() {
    return (
      <Layout>
        <Hero>
          <p>Hi there, I am Abizera Oreste</p>
        </Hero>
      </Layout>
    )
  }
}
