import './App.css';
import DefaultNavbar from './components/DefaultNavbar';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <DefaultNavbar />
      <Landing />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

/*
        <Switch>
          <DefaultNavbar />
          <div className="welcome-text">
            <h4>WELCOME</h4>
          </div>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
        </Switch>
*/

export default App;
