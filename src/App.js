import Home from './pages/Home';
import Footer from './components/Footer'
import Nav from './components/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import react from 'react';
import Books from "./pages/Books";

function App() {
  return (
    <Router> 
    <div className="App">
      <Route />
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/books" component={Books} />
      <Home />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
