import logo from './logo.svg';
import './App.css';
import './components/NavBar/NavBar.css'
import './components/Home/Home.css'
import './components/Body/Body.css'
import './components/Footer/Footer.css'
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div className="App">
     <NavBar />
        <Home />
        <Body />
        <Footer />
    </div>
  );
}


export default App;
