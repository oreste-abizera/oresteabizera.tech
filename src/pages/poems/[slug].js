import { Link } from "gatsby"
import React, { Component } from "react"
import Banner from "../../components/Banner"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"

export default class SinglePoem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: [],
    }
  }

  render() {
    const { slug } = this.props.params
    alert(slug)
    return (
      <>
        <Layout>
          <SEO title="Poem" description={null}></SEO>
        </Layout>
      </>
    )
  }
}
