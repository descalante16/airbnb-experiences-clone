import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import CardGrid from './components/CardGrid';

import barcelonaImage from './images/barcelona.jpeg';
import newyorkImage from './images/new-york.jpeg';
import japanImage from './images/japan.jpeg';
import koreaImage from './images/seoul.jpeg';





function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <div className='d-flex grid gap-3 mx-5 my-5 flex-nowrap overflow-auto '>     
      
      <CardGrid
    
          img = {barcelonaImage}
          alt = "Barcelona"
          rating = "5.0"
          count ="15"
          country ="Spain"
          title="Plan The Perfect Barcelona Vacation"
          price ="916"
      />
      <CardGrid
          img = {newyorkImage}
          alt = "New York"
          rating = "4.99"
          count ="166"
          country ="United States"
          title="Plan The Perfect New York Vacation"
          price ="1,033"
      />
      <CardGrid
          img = {japanImage}
          alt = "Japan"
          rating = "5.0"
          count ="5"
          country ="Japan"
          title="Plan the perfect Customised Japan Trip with Local Expert"
          price ="89"
      />
      <CardGrid

          img = {koreaImage}
          alt = "South Korea"
          rating = "4.97"
          count ="70"
          country ="South Korea"
          title="Craft a custom trip to Korea with Jae"
          price ="2,484"
      />
      </div>
      </div>
      
    
  );
}

export default App;
