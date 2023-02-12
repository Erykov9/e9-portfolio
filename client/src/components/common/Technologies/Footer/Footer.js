import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.root_phone}><p> +48 698-008-803</p></div>
      <div className={styles.root_mail}><p>szczepanekeryk@gmail.com</p></div>
      <h3>Erykov9 &copy; 2023 / All Rights Reserved</h3>
    </div>
  )
};

export default Footer;