// app/contact/page.js
import Header from '../../components/Header';
import styles from '../../styles/Contact.module.css';

const ContactPage = () => (
  <>
    <Header />
    <main className={styles.main}>
      <h2>Contact</h2>
      <form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>Name:</label>
          <input type="text" id="name" name="name" className={styles.input} required />
        </div>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input type="email" id="email" name="email" className={styles.input} required />
        </div>
        <div className={styles.field}>
          <label htmlFor="message" className={styles.label}>Message:</label>
          <textarea id="message" name="message" className={styles.textarea} required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </main>
  </>
);

export default ContactPage;
