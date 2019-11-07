import React, { Component } from "react"
import Link from "gatsby-link"
import FadeIn from "../utils/fadeIn"

import "./layout.css"
import styles from "./layout.module.css"
import Collapse from "./collapse"
import NavList from "./navList"
import logo from "../assets/images/icon3.jpg"

import { Location } from "@reach/router"

const NavBar = props => (
  <header
    className={`${props.sticky > 0 ? styles.fixedHeader : ""}`}
    style={{ marginBottom: "1.5rem" }}
  >
    <div
      className={`${props.sticky > 0 ? styles.fixedNavBar : ""} ${
        styles.navContainer
      }`}
    >
      <Link
        className={styles.logoLink}
        to="/"
        style={{ textShadow: "none", backgroundImage: "none" }}
      >
        <FadeIn
          opacity={{
            start: 0,
            end: 1,
            stiffness: 120,
            damping: 5,
          }}
          x={{
            start: 30,
            end: 0,
            stiffness: 100,
            damping: 20,
          }}
        >
          <div style={{ display: "inline" }}>
            <img className={styles.flashLogo} src={logo} alt="logo" />
            <div className={styles.navLogo}>
              <h3>
                {props.site ? props.site.siteMetadata.title : "Swetha Udupa"}
              </h3>
            </div>
          </div>
        </FadeIn>
      </Link>
      <NavList path={props.path} />
      <Collapse path={props.path} />
    </div>
  </header>
)

class Layout extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      scrolledDown: false,
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", () => this.scrollHandle())
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", () => this.scrollHandle())
  }

  scrollHandle() {
    let scrolledDown
    const y = window.scrollY
    if (y > 60) {
      scrolledDown = true
    } else {
      scrolledDown = false
    }

    this.setState({
      scrolledDown,
    })
  }
  render() {
    return (
      <Location>
        {({ location }) => {
          return (
            <div
              className={`
          ${styles.layout}
          ${this.state.loading ? styles.hidden : ""}
          ${this.state.scrolledDown ? "" : styles.scrolled}`}
            >
              <NavBar
                site={this.props.data && this.props.data.site}
                path={location.pathname}
                sticky={false}
              />
              {this.state.scrolledDown && (
                <NavBar
                  site={this.props.data && this.props.data.site}
                  path={location.pathname}
                  sticky
                />
              )}
              <div
                className={`${styles.stickyBackground} ${this.state
                  .scrolledDown && styles.appear}`}
              />
              <div className={styles.body}>{this.props.children}</div>
              <footer>
                <div className={styles.footerContainer}>
                  <h6 className={styles.footerContent}>
                    2019{" "}
                    {this.props.data
                      ? this.props.data.site.siteMetadata.author
                      : "@ Swetha Udupa"}
                  </h6>
                </div>
              </footer>
            </div>
          )
        }}
      </Location>
    )
  }
}

export default Layout
