// components/Header.js
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <h1>My Portfolio</h1>
    <nav>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
