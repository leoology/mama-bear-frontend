import './App.css';
import Navbar from './components/Navbar.js'
import ClothingContainer from './components/ClothingContainer.js'
import SeasonContainer from './components/SeasonContainer'

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <img className="home-img" src="https://media.tacdn.com/media/attractions-content--1x-1/0b/a5/3c/74.jpg" alt="seattle"></img>
 create-season-card
      <p id="mission">Mission Statement</p>
      <ClothingContainer />
      <SeasonContainer />
      <p id="mission">Updated Mission Statement test 2</p>
      <Categories />
      <Season />
    </div>
  );
}

export default App;
