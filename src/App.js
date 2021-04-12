import routes from './routes'
import SideBar from './Components/SideBar/sideBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <SideBar/>
      {routes}
    </div>
  );
}

export default App;
