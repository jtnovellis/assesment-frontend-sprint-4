import React from 'react';
import AboutCard from '../components/AboutCard';

const About = () => {
  return (
    <div className='about'>
      <AboutCard />
      <div className='about__info'>
        <p>
          I am a FullStack JavaScript Developer in progress with a degree in
          Master in Music with emphasis in Jazz and Popular Music. Since my last
          5 years, I was working in music prouction with a close relationship
          with the tech world which goes me to enrrolled to the programing
          Bootcamp from Make It Real.
        </p>
        <h4>Some technologies I have learned in Make It Real:</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaSript</li>
          <li>Git - GitHub</li>
          <li>React</li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>SASS</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
