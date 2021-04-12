import {Component} from 'react'
import './contact.css'

class Contact extends Component {
  render(){
    return(
      <div>
        <div className='flower-contain'>
          <h1>Want to see if we could foster a blossoming connection?</h1>
          <img src={'https://pa1.narvii.com/7491/8536dd438b9e3ca285feaad983428046df436609r1-480-270_hq.gif'} alt="" height= "300px" />
        </div>
        <div className='contact-contain'>
          <h3>Email me at:</h3>
          <p>toriflinders04@gmail.com</p>
          <br/>
          <a target="_blank" href="www.linkedin.com/in/tori-flinders">LinkedIn</a>
        </div>
      </div>
    )
  }
}
export default Contact;