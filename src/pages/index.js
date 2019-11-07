import React from "react"
import FadeIn from "../utils/fadeIn"

import styles from "./index.module.css"
import Layout from "../layouts/index"
import ProfileCard from "../components/profileCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import Loader from "../components/loadingIndicator"

import "./index.css"

export default ({ data }) => (
  <Loader
    children={
      <Layout className={styles.layoutStyle} data={data}>
        <div
          className={styles.container}
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <div className={styles.aboutContainer}>
            <FadeIn
              x={{
                start: 70,
                end: 0,
                stiffness: 50,
                damping: 20,
              }}
            >
              <h1 className={styles.title}>About</h1>
            </FadeIn>
            <FadeIn>
              <div>
                <p className={styles.aboutText}>
                  Born and raised in Bangalore, a full-stack web developer with
                  a passion to write clean, elegant and efficient code and
                  thereby crafting clean & user‑friendly experiences. I have
                  maintained, developed and launched multiple projects from
                  scratch, carrying the development of its’ back-end and
                  front-end codebases.
                </p>
                <p className={styles.aboutText}>
                  I had my first taste of programming back when I was studying
                  my engineering. I remember not wanting to learn as there was a
                  common misconception that programming is hard and it kept me
                  from pursing a programming career. It was not until I was
                  introduced to MS Excel, where I had the opportunity to build
                  complex formulas and work with macros, I realised that I
                  really enjoyed problem solving. I believe programming is about
                  solving problems and describing these solutions in a formal
                  way. I've come to realise just how true that nothing is
                  difficult as long as you put everything you have into it over
                  the past five and a years, which is how long I've been
                  learning programming for. Startup is another reason why I got
                  into programming. I Previously worked with a startup called{" "}
                  <a
                    className={styles.aboutText}
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://getwalk.in/"
                  >
                    First WalkIn Technologies Pvt Ltd*
                  </a>{" "}
                  as a Senior Front End engineer. I love tech startups and
                  community. Startups, when growing successfully, provide
                  opportunities to grow very quickly. When I'm not coding, I
                  listen to music, and generally try not to sit in front of my
                  computer. I’m a fan of documentaries, travelling, cooking, playing
                  games, sleeping etc,.
                </p>
              </div>
            </FadeIn>
          </div>
          <div className={styles.profileWrapper}>
            <ProfileCard />
          </div>
        </div>
        <FadeIn
          x={{
            start: -30,
            end: 0,
            stiffness: 50,
            damping: 8,
          }}
        >
          <div>
            <ul className={styles.snList}>
              <li>
                <a
                  className={styles.snTag}
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/swethaudupa"
                >
                  <FontAwesomeIcon
                    className={styles.snIcon}
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li>
                <a
                  className={styles.snTag}
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/swethaudupa"
                >
                  <FontAwesomeIcon className={styles.snIcon} icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  className={styles.snTag}
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://medium.com/@vibertthio"
                >
                  <FontAwesomeIcon
                    className={styles.snIcon}
                    icon={faLinkedinIn}
                  />
                </a>
              </li>
              <li>
                <a
                  className={styles.snTag}
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://eepurl.com/glIO19"
                >
                  <FontAwesomeIcon
                    className={styles.snIcon}
                    icon={faEnvelope}
                  />
                </a>
              </li>
            </ul>
          </div>
        </FadeIn>
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
