// app/projects/page.js
import Header from '../../components/Header';
import styles from '../../styles/Projects.module.css';

const ProjectsPage = () => (
  <>
    <Header />
    <main className={styles.main}>
      <h2>Projects</h2>
      <div className={styles.projectsList}>
        <div className={styles.project}>
          <h3>Project 1</h3>
          <p>Description of Project 1.</p>
        </div>
        <div className={styles.project}>
          <h3>Project 2</h3>
          <p>Description of Project 2.</p>
        </div>
        {/* Add more projects as needed */}
      </div>
    </main>
  </>
);

export default ProjectsPage;
