import Explore from './components/Explore';
import Featured from './components/Featured';
import Footer from './components/Footer'
import Landing from './components/Landing';
import Nav from './components/Nav';
import Highlights from './components/Highlights';
import Discounted from './components/Discounted';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
