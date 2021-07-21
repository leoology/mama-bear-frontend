import './App.css';
import Navbar from './components/Navbar.js'
import Categories from './components/Categories.js'

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <img className="home-img" src="https://media.tacdn.com/media/attractions-content--1x-1/0b/a5/3c/74.jpg" alt="seattle"></img>
      <p id="mission">Updated Mission Statement test</p>
      <Categories />
    </div>
  );
}

export default App;
