import styles from './About.module.scss';
import Technologies from '../../common/Technologies/Technologies';
import Footer from '../../common/Technologies/Footer/Footer';

import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const projects = [
  {
    photo: 'logo/projects/pathfinder.png',
    title: 'Path Finder',
    description: 'A little bit bigger project using path finding algorithm.',
    frameworks: [
      <i className="devicon-bootstrap-plain"></i>, 
      <i className="devicon-javascript-plain"></i>,
      <i className="devicon-sass-original"></i>
    ]
  },
  {
    photo: 'logo/projects/shop.png',
    title: 'Shop(in progress)',
    description: 'My final bootcamp project with database usage.',
    frameworks: [
      <i className="devicon-react-original"></i>, 
      <i className="devicon-redux-original"></i>,
      <i className="devicon-bootstrap-plain"></i>, 
      <i className="devicon-nestjs-plain"></i>,
      <i className="devicon-sass-original"></i>,
      <i className="devicon-mysql-plain"></i>
    ]
  },
  {
    photo: 'logo/projects/tet.jpg',
    title: 'Simple CRUD app',
    description: 'Just a simple CRUD app, just for Redux learning purposes.',
    frameworks: [
      <i className="devicon-react-original"></i>, 
      <i className="devicon-redux-original"></i>,
      <i className="devicon-bootstrap-plain"></i>
    ]
  },
  
]

const About = () => {
  const date = new Date();
  const year = date.getFullYear() - 1994;
  
  return (
    <div className={styles.root}>
      <h1><span>A</span>bout</h1>
      <div className={styles.root_aboutContent}>

        {/* INTRODUCTION */}

        <div className={styles.root_aboutContent_intro}>
          <p id='top'>Hello! Let me introduce myself!</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;My name is Eryk, I'm <b>{year} </b>and I'm from <span>P</span>oland. Programming became my passion since I started my nine months journey with <span>J</span>ava<span>S</span>cript on <a href={'http://kodilla.com'} className={styles.kodilla}>Kodilla's</a> bootcamp. Frontend is definitely my forte. Technologies that I'm using are available <span><a href='#techno' className={styles.op}>HERE</a></span>. While studying I had a lot of ups and downs, however I never gave up!</p>
          <br/>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Lots of time I spend fixing bugs in code, actually 70% of time I was doing it! That means I'm patient and I'm always going straight to the goal. I also never leave things unfinished and I give over <span>100%</span> percent!</p>
          <br/>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;My plans for the future are simple... I want to get every day better and take on new challenges. Developing skills, learning new skills are the things that motivates me to move things on.</p>
        </div>

        {/* PROJECTS */}

        <div className={styles.root_aboutContent_projects}>
          <p>Projects I've been made!</p>
          <div className={styles.root_aboutContent_projects_img}>
            {projects.map(project =>  <div className={styles.root_aboutContent_projects_img_single}>
              <img src={project.photo}></img>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className={styles.root_aboutContent_projects_img_single_icons}>{project.frameworks.map(p => p)}</div>
            </div>)}
          </div>
        </div>

        {/* TECHNOLOGIES  */}

        <div className={styles.root_aboutContent_technologies} id='techno'>
        <p>Technologies that I'm using!</p>
          <Technologies/>
        </div>

        <div className={styles.root_aboutContent_footer}>
              <Footer/>
        </div>
        <div className={styles.top}>
          <a href='#top' ><BsFillArrowUpCircleFill/></a>
        </div>
      </div>
    </div>
  )
};

export default About;