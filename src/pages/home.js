import React, {useState} from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Card from '../components/Card';
import Slider from '../components/Slider/Slider';
import Sidebar from '../components/Sidebar';


const Home = () => {

  return (
    <div className="App" path="home">
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <Header/>
      <Slider />
      <Card />
      <Footer />
    </div>
  );
}

export default Home;
