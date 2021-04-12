import {Component} from 'react'
import './projects.css'

class Projects extends Component {
  render(){
    return(
      <div className='projects-flex'>
        <section className='plants-contain'>
        <img src={'https://i.pinimg.com/564x/fa/eb/d6/faebd60f1add8fe914619d31021ed515.jpg'} alt="plants" height='300px' width='300px'/>
          <h1>Garden Game</h1>
          <p>-First game I've created, utilizing knowledge of CSS flex-box and implementing skills with React.</p>
          <p>-Still in development.</p>
          <button>Figma</button>
          <button>GitHub</button>
          <button>Website</button>
        </section>
        <section className='junco-contain'>
          <img src={'https://i.pinimg.com/originals/93/bd/40/93bd40594172d71b60156fef0a7e099e.jpg'} alt="junco" height='300px'/>
          <h1>JuncoSwayVae</h1>
          <p>React|Redux|NodeJS|Express|PostgreSQL|NodeMailer|Bcrypt|CSS</p>
          <p>-Utilized node JS.</p>
          <p>-Designed and constructed application for an artist looking to promote and sell their creations. Users can view, inquire (NodeMailer email), and purchase artists’ work.</p>
          <p>-Integrated Redux (connect, devtool-extensions, promise-middleware) to request async store data in redux State.</p>
          <p>-Applied Bcrypt for authentication and employed Digital Ocean for SSH.</p>
          <p>-Still in development.</p>
          <button>Figma</button>
          <button>GitHub</button>
          <button>Website</button>
        </section>
        <section className='band-contain'>
        <img src={'https://static.vecteezy.com/system/resources/previews/000/154/041/non_2x/marching-band-parade-vector-flat-character-illustration.jpg'} alt="band" height='300px' width='300px'/>
        <h1>Band Social</h1>
        <p>React|React Big Calendar|Redux|NodeJS|Express|PostgreSQL|Amazon S3|Socket.io|Bcrypt|CSS</p>
        <p>-Formulated a mobile application to find and connect musical groups based on interests or needed instruments.</p>  
        <p>-Applied React Big Calendar, SQL queries, and Socket.io technology to connect and interact with communication and events.</p>
        <p>-Worked in a team of four using Github Teams and Trello in a remote environment, and daily SCRUM meetings.</p>
        <p>-Still in development.</p>
        <button>Figma</button>
        <button>GitHub</button>
        <button>Website</button>
        </section>
      </div>
    )
  }
}
export default Projects;