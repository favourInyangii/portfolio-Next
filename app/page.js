// app/page.js
import Header from '../components/Header';
import ProfilePicture from '../components/ProfilePicture';
import styles from '../styles/Home.module.css';

const HomePage = () => (
  <>
    <Header />
    <main className={styles.main}>
      <ProfilePicture />
      <h2>Welcome to My Portfolio</h2>
      <p>This is the home page.</p>
    </main>
  </>
);

export default HomePage;
