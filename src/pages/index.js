import React from "react"

import Layout from "../layouts/index"
import Loader from "../components/loadingIndicator"
import Link from "gatsby-link"

import "./index.css"

export default ({ data }) => (
  <Loader
    children={
      <Layout data={data}>
        <section className="hero">
          <div className="hero-inner">
            <h1 className="coverTitle">Hello, I'm Swetha</h1>
            <h2 className="coverSubtitle">A Front-end Developer</h2>
            <Link className="coverButtonStyle" to="/about/">
              About me
            </Link>
          </div>
        </section>
      </Layout>
    }
  />
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
