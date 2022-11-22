import logo from './logo.svg';
import './App.css';
import './assets/css/NavBar.css'
import './assets/css/Home.css'
import './assets/css/Body.css'
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Body from "./components/Body";
function App() {
  return (
    <div className="App">
     <NavBar />
        <Home />
        <Body />
    </div>
  );
}


export default App;
