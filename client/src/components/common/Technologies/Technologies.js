import styles from './Technologies.module.scss';

const iconsFront = [
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt={'test'}/>,
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt={'test'}/>,
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt={'test'}/>,
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt={'test'}/>,
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt={'test'}/>,
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt={'test'}/>,
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt={'test'}/>      
];

const iconsBack = [
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt={'test'}/>,
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt={'test'}/>,
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" alt={'test'}/>,
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt={'test'}/>,
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt={'test'}/>,       
]

const iconsOther = [
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt={'test'}/>,
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt={'test'}/>,
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/foundation/foundation-original.svg" alt={'test'}/>,
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" alt={'test'}/>,
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" alt={'test'}/>,
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" alt={'test'}/>,
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt={'test'}/>
          
]

const Technologies = () => {
  return ( 
    <div className={styles.root}>
      {/* FRONT-END  */}
      <div className={styles.root_technologies}>
        <h3>Front-end</h3>
        <div className={styles.root_technologies_icons}>
          {iconsFront.map(icon => icon)}
        </div>
      </div>

      {/* BACK-END */}
      <div className={styles.root_technologies}>
        <h3>Back-end</h3>
        <div className={styles.root_technologies_icons}>
          {iconsBack.map(icon => icon)}
        </div>
      </div>

      {/* OTHER  */}
      <div className={styles.root_technologies}>
        <h3>Toolbox</h3>
        <div className={styles.root_technologies_icons}>
          {iconsOther.map(icon => icon)}
        </div>
      </div>
      
    </div>
  )
};

export default Technologies;