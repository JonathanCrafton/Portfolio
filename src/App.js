import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Landing/>
        <About />
      </header>
      <Footer />
    </div>
  );
}

export default App;
