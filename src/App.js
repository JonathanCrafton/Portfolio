import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Landing from './components/Landing/Landing';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Landing/>
        <About />
        <Resume />
      </header>
      <Footer />
    </div>
  );
}

export default App;
