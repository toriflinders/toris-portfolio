import {Component} from 'react'
import './about.css'

class About extends Component {
  render(){
    return(
      <div className='about-contain'>
        <div>
          <img src={'https://i.pinimg.com/736x/8c/9f/2f/8c9f2fb0975dccfa74b01fbc77e9b6e0--timeline-cover-most-beautiful-images.jpg'} alt="" height= "250px" width='1200px' />
        </div>
        <section className='info-flex'>
          <section className='school-flex'>
            <h1>Business Management/Utah Valley University -Est. Complete December 2022</h1>
            <p>Communication, Presentation, Microsoft Excel</p>
            <p>I have been an avid learner as long as I can remember, my curiosity has lead me in many directions. I am currently finishing up my Bachelor's degree in Business Management at Utah Valley University. As my degree progressively teaches me, efficient research and relentless effort give you the best hand up in business but you need infinite curiosity and true passion to "make it."</p>
          </section>
          <section className='brand-flex'>
            <h1>Full-Stack Web Development/DevMountain -Completed March 2021</h1>
            <p>Javascript, React, Redux, NodeJs, Express, PostgreSQL, Massive, Bcrypt, CSS, Git, Github, Postman, SQL Tabs, Heroku, HTML5, Axios, NodeMailer</p>
            <p>Over the winter of 2020, I completed the web development program at DevMountain, gaining me the title of a Full-Stack Web Developer. Despite not knowing more than basic functions of a computer, I was able to comprehend and implement my knowledge to create web applications within three months. I truly believe that if you maintain high standards of learning and dedication, you can fulfill your wildest dreams.</p>
          </section>
        </section>
      </div>
    )
  }
}
export default About;