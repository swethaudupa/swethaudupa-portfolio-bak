import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styles from "./projects.module.css"
import PortfolioItem from "../components/portfolioItem"
import Layout from "../layouts/index"
import FadeIn from "../utils/fadeIn"
import Loader from "../components/loadingIndicator"

const Projects = () => {
  const { allFile: items, site: data } = useStaticQuery(graphql`
    query {
      allFile(
        filter: { extension: { eq: "md" } }
        sort: { fields: [dir], order: ASC }
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              rawMarkdownBody
              frontmatter {
                title
                link
                stack
                image {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 80) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  let siteData = { site: data }
  return (
    <Loader
      children={
        <Layout data={siteData}>
          <div>
            <div className={styles.portfolioHeader}>
              <FadeIn
                x={{
                  start: 70,
                  end: 0,
                  stiffness: 50,
                  damping: 20,
                }}
              >
                <h1 className={styles.mainPortfolioHeaderTitle}>Portfolio</h1>
              </FadeIn>
            </div>
            <div className={styles.portfolioMainWrapper}>
              {items.edges.map(item => (
                <PortfolioItem
                  key={item.node.id}
                  portfolio={item.node.childMarkdownRemark}
                />
              ))}
            </div>
          </div>
        </Layout>
      }
    />
  )
}

export default Projects
