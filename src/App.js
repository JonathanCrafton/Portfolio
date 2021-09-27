import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Landing from './components/Landing/Landing';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Landing/>
        <Grid container spacing={2}>
          <Grid item width="50%">
            <div >
            <About />
            </div>
          </Grid>
          <Grid item width="50%">
            <div>
              Filler
            </div>
          </Grid>
          <Grid item width="50%">
            <div>
              Filler
            </div>
          </Grid>
          <Grid item width="50%">
            <Contact />
          </Grid>
          <Grid item width="50%">
            <div>
              Filler
            </div>
          </Grid>
          <Grid item width="50%">
            <Resume />
          </Grid>
        </Grid>
      </header>
      <Footer />
    </div>
  );
}

export default App;
