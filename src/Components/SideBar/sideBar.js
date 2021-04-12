import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import '../SideBar/sideBar.css'

class sideBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      dropdownView: false
    }
  }
  toggleDropdown = () => {
    this.setState({dropdownView: !this.state.dropdownView})
  }
  render(){
    return(
      <div className='header-container'>
        <header>
          <h1>Tori Flinders</h1>
            <div className="icon nav-icon" onClick={this.toggleDropdown}>Menu</div>
            {this.state.dropdownView
          ? (
            <nav className = 'icon-nav-icon'>
                <Link to = '/' className='nav-links'>About</Link>
                <Link to = '/projects' className='nav-links'>Projects</Link>
                <Link to = '/contact' className='nav-links'>Contact</Link>
            </nav>
            )
            : null}
        </header>
        
        
      </div>
    )
  }
}
export default withRouter(sideBar);