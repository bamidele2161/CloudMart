import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Card from '../components/Card';
import Slider from '../components/Slider/Slider';


const Home = () => {

  return (
    <div className="App" path="home">
      <Header/>
      <Slider />
      <Card />
      <Footer />
    </div>
  );
}

export default Home;
