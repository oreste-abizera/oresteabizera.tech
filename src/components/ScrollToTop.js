import React, { Component } from "react"
import { FaAngleUp } from "react-icons/fa"
import * as styles from "../css/scrollToTop.module.css"

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 0,
    }
  }

  componentDidMount() {
    const scrollListener = window.addEventListener("scroll", e => {
      this.setState({ height: window.pageYOffset })
    })

    return () => {
      window.removeEventListener(scrollListener)
    }
  }
  render() {
    const scrollToTop = () => {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
      })
    }
    if (this.state.height < 100) {
      return <div></div>
    }

    return (
      <div className={styles.scrollToTopContainer}>
        <FaAngleUp onClick={scrollToTop}></FaAngleUp>
      </div>
    )
  }
}
