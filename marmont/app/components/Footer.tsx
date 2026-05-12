import styles from "@/app/components/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.item}>WhatsApp: (+385) 97 702 0756</span>
        <span className={styles.item}>Phone: 097 702 0756</span>
        <a className={styles.item} href="mailto:nesto@gmail.com">
          nesto@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;

