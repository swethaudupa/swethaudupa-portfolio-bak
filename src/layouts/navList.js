import React from 'react';
import Link, { withPrefix } from 'gatsby-link';
import styles from './layout.module.css';
import FadeIn from '../utils/fadeIn';

const ListLink = props => (
  <li style={{ display: 'inline-block', marginLeft: '0.5rem' }}>
    <Link
      to={props.to}
      className={`${styles.navLink} ${
				withPrefix(props.to) === props.path ? styles.active : styles.inactive
			}`}
    >
      {props.children}
    </Link>
  </li>
);

const ListLinkOut = props => (
  <li style={{ display: 'inline-block', marginLeft: '0.5rem' }}>
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={props.to}
      className={`${styles.navLink} ${
				withPrefix(props.to) === props.path ? styles.active : styles.inactive
			}`}
    >
      {props.children}
    </a>
  </li>
);

const ListDivider = props => (
  <li
    className={`${styles.navListItem} ${styles.inactive}`}
    style={{ display: 'inline-block', marginLeft: '0.5rem' }}
  >
    {props.children}
  </li>
);

export default props => (
  <ul className={styles.expandMenu} style={{ listStyle: 'none', float: 'right' }}>
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
				stiffness: 50,
				damping: 20,
			}}
    >
      <ListLink to="/" path={props.path}>
        <h4 className={styles.navItem}>Home</h4>
      </ListLink>
      <ListDivider>
        <h4 className={styles.navDivider}>|</h4>
      </ListDivider>
      <ListLink to="/about/" path={props.path}>
        <h4 className={styles.navItem}>About me</h4>
      </ListLink>
      <ListDivider>
        <h4 className={styles.navDivider}>|</h4>
      </ListDivider>
      <ListLink to="/projects/" path={props.path}>
        <h4 className={styles.navItem}>Projects</h4>
      </ListLink>
      <ListDivider>
        <h4 className={styles.navDivider}>|</h4>
      </ListDivider>
      <ListLinkOut to="https://drive.google.com/file/d/1QIJaEDRiV5e5D4Ws7VJ1DEYNRwbKqjFA/view?usp=sharing" path={props.path}>
        <h4 className={styles.navItem}>C.V.</h4>
      </ListLinkOut>
    </FadeIn>
  </ul>
);
