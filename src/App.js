import React from 'react';
import './App.scss';

import Header from "./Components/Header/Index";
import Footer from "./Components/Footer/Index";

import Hero from "./Components/Hero/Index";
import About from "./Components/About/Index";
import Newsletter from "./Components/Newsletter/Index";
import Music from "./Components/Music/Index";
import Blog from "./Components/Blog/Index";
import SocialStack from "./Components/SocialStack/Index";
import SheetMusic from "./Components/SheetMusic/Index";
import Events from "./Components/Events/Index";

function App() {
  return (
    <div className="App">
      <Header />
        <SocialStack />
        <Hero />
        <About />
        <Events />
        <Music />
        <Newsletter />
        <SheetMusic />
        <Blog />
      <Footer />
    </div>
  );
}

export default App;
