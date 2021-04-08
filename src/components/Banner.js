import React, { Component } from "react"
import * as styles from "../css/banner.module.css"

export default class Banner extends Component {
  render() {
    return (
      <div className={styles.banner}>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
        {this.props.children}
      </div>
    )
  }
}
