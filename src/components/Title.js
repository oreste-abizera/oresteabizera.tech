import React, { Component } from "react"
import * as styles from "../css/title.module.css"

export default class Title extends Component {
  render() {
    return (
      <div className={styles.title}>
        <h4 className={styles.first}>{this.props.first}</h4>
        <h4 className={styles.last}>{this.props.last}</h4>
      </div>
    )
  }
}
