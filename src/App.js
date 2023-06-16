import NavBar from "./components/NavBar";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Banner} from './components/Banner'
import Skills from './components/Skills'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
    </div>
  );
}

export default App;