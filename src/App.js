import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Patinage from './Patinage';
import VideoPlayer from './VideoPlayer';
import Lancers from './Lancers';
import Maniement from './Maniement';
import Strategies from './Strategies';
import HorsGlace from './HorsGlace';
import Reservation from './Reservation';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/lavantagedelaglace/">
              <Home />
            </Route>
            <Route path="/lavantagedelaglace/patinage">
              <Patinage />
            </Route>
            <Route path="/lavantagedelaglace/lancers">
              <Lancers />
            </Route>
            <Route path="/lavantagedelaglace/maniement">
              <Maniement />
            </Route>
            <Route path="/lavantagedelaglace/strategies">
              <Strategies />
            </Route>
            <Route path="/lavantagedelaglace/horsglace">
              <HorsGlace />
            </Route>
            <Route path="/lavantagedelaglace/reserver">
              <Reservation />
            </Route>
            <Route path="/lavantagedelaglace/contact">
              <Contact />
            </Route>
            <Route path="/lavantagedelaglace/video/:id">
              <VideoPlayer />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
