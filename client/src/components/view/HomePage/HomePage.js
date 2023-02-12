import styles from './HomePage.module.scss'

const HomePage = () => {
  return (
    <div className={styles.root}>
        <div className={styles.root_header}>
          <h1><span>H</span>ello,</h1>
          <h1>I'm <span>E</span>ryk,</h1>
          <h2><span>J</span>ava<span>S</span>cript Junior Developer</h2>
        </div>
        <div className={styles.root_banner}>
          <img src={'/logo/ERYKOV9.png'} alt={'logo'}/>
        </div>
    </div>
  )
};

export default HomePage;

