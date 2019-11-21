import React, { Component } from "react"
import Link, { withPrefix } from "gatsby-link"
import FadeIn from "../utils/fadeIn"

import styles from "./collapse.module.css"
import layoutStyles from "./layout.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const ListLink = props => (
  <Link
    className={`${styles.link} ${
      withPrefix(props.to) === props.path ? styles.active : styles.inactive
    }`}
    onClick={() => props.onClick()}
    to={props.to}
  >
    <p>{props.children}</p>
  </Link>
)

const ListLinkOut = props => (
  <a
    className={`${styles.link} ${
      withPrefix(props.to) === props.path ? styles.active : styles.inactive
    }`}
    onClick={() => props.onClick()}
    href={props.to}
    rel="noopener noreferrer"
    target="_blank"
  >
    <p>{props.children}</p>
  </a>
)

class Collapse extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
    }
  }

  onClick() {
    const { open } = this.state
    if (open) {
      this.closeMenu()
    } else {
      this.openMenu()
    }
  }

  openMenu() {
    document.getElementById("menu").style.height = "100%"
    this.setState({
      open: true,
    })
  }

  closeMenu() {
    document.getElementById("menu").style.height = "0%"
    this.setState({
      open: false,
    })
  }

  render() {
    console.log("sty", this.state.open)
    return (
      <div style={{ float: "right" }}>
        <div id="menu" className={styles.overlay}>
          <div className={styles.menuContainer}>
            <div className={styles.overlayContent}>
              <ListLink
                to="/"
                path={this.props.path}
                onClick={() => this.closeMenu()}
              >
                Home
              </ListLink>
              <ListLink
                to="/about/"
                path={this.props.path}
                onClick={() => this.closeMenu()}
              >
                About
              </ListLink>
              <ListLink
                to="/projects/"
                path={this.props.path}
                onClick={() => this.closeMenu()}
              >
                Projects
              </ListLink>
              <ListLinkOut
                to="https://drive.google.com/file/d/1FbNeW-DmRYbjlrYv_2EPSxMNqiuWcvcq/view?usp=sharing"
                path={this.props.path}
                onClick={() => this.closeMenu()}
              >
                C.V.
              </ListLinkOut>
            </div>
          </div>
        </div>
        <button
          className={`${styles.btn} ${layoutStyles.menuBtn}`}
          onClick={() => this.onClick()}
        >
          <FadeIn
            right
            opacity={{
              start: 0,
              end: 1,
              stiffness: 100,
              damping: 5,
            }}
            x={{
              start: 30,
              end: 0,
              stiffness: 100,
              damping: 15,
            }}
          >
            <FontAwesomeIcon className={layoutStyles.menuIcon} icon={faBars} />
          </FadeIn>
        </button>
      </div>
    )
  }
}

export default Collapse
