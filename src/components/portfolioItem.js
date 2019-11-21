import React from 'react';
import styles from './portfolioItem.module.css'
import Img from 'gatsby-image';


const PortfolioItem = ({ portfolio }) => {
  const { title, link, stack, image } = portfolio && portfolio.frontmatter;
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.portfolioTitle}>{title}</h2>
      <div className={styles.contentWrapper}>
        <div className = {styles.portfolioContent}>
          <div className={styles.portfolioText}>{portfolio.rawMarkdownBody}</div>
          <p className= {styles.stack}>{stack}</p>
          <div className= {styles.buttonWrapper}>
            <a style = {{ marginRight: "16px"}} className = {styles.buttonStyle} target="_blank" solid href={link ? link : "#"} rel="noreferrer">
              Source
            </a>
          </div>
        </div>
        <Img className= {styles.portFolioImage} fluid={image && image.childImageSharp.fluid} />
      </div>
    </div>
  );
};

export default PortfolioItem;
