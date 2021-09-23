import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Landing from './components/Landing/Landing';
import Resume from './components/Resume/Resume';
import Grid from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Landing/>
        <div >
          <About />
        </div>
        <Resume />
      </header>
      <Footer />
    </div>
  );
}

export default App;
