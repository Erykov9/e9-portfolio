import styles from './Navi.module.scss';
import { useState } from 'react';

// ICONS IMPORTS
import { 
  AiFillLinkedin, 
  AiFillFacebook,
  AiFillGithub 
  } from 'react-icons/ai';
import { FaCcPaypal } from 'react-icons/fa';

// VIEWS IMPORTS
import HomePage from '../HomePage/HomePage';
import About from '../About/About';

const naviItems = ['Home', 'About', 'Work'];
const socialItems = [
  {
    icon: <AiFillFacebook/>,
    link: 'http://facebook.com/'
  }, 
  {
    icon: <AiFillGithub/>,
    link: 'http://github.com/Erykov9'
  },
  {
    icon: <AiFillLinkedin/>, 
    link: 'https://www.facebook.com/profile.php?id=100009836529196'
  },
  {
    icon: <FaCcPaypal/>,
    link: 'http://paypal.com/'
  }];

const Navi = () => {
  const [site, setSite] = useState('Home');

  const noCapital = (word) => {
    const noCapitalWord =  word[0].toLowerCase() + word.slice(1)
    return noCapitalWord
  }
  noCapital('Test')

  return (
    <div className={styles.root}>   
      <div className={styles.root_navi}>
        {naviItems.map(e => <div 
        className={e === site ? `${styles.root_naviItem} ${styles.active}` : styles.root_naviItem} 
        key={e} onClick={() => setSite(e)}>
          <a href={'#'}>{e}</a>
        </div>)}
      </div>
      <div className={styles.root_content}>
        {site === 'Home' ? <HomePage/> : null}
        {site === 'About' ? <About/> : null}
      </div>
    {/* key to do */}
      <div className={styles.root_social}>
        {socialItems.map(item => <div className={styles.root_socialItem} key={item.link}><a href={item.link} target={'_blank'} rel='noreferrer'>{item.icon}</a></div>)}  
      </div>
    </div>
  )
};

export default Navi;