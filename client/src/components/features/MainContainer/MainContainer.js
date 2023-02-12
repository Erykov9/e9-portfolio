import styles from './MainContainer.module.scss';

const MainContainer = ({children}) => {
  return (
    <div className={styles.root}>
      <div className={styles.root_inside}>
        {children}
      </div>
    </div>
  )
};

export default MainContainer;