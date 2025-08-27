import Home from './pages/Home';
import Footer from './components/Footer'
import Nav from './components/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import react from 'react';

function App() {
  return (
    <Router> 
    <div className="App">
      <Route />
      <Nav />
      <Route path="/" exact component={Home} />
      
      <Home />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
