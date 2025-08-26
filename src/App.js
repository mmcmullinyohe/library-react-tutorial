import Explore from './components/Explore';
import Featured from './components/Featured';
import Footer from './components/Footer'
import Landing from './components/Landing';
import Nav from './components/Nav';
import Highlights from './components/Highlights';
import Discounted from './components/Discounted';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import react from 'react';

function App() {
  return (
    <Router> 
    <div className="App">
      <Route />
      <Nav />

      <Footer />
    </div>
    </Router>
  );
}

export default App;
