import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg'
import './App.css';

const pOp={
          particles:{
            number: {
              value: 30,
              density: {
                enable: true,
                value_area:800
              }
            }
          }
}

function App() {
  return (
    <div className="App">
      <ParticlesBg className='particles
      position: "absolute",zIndex: -1,top: 0,left: 0' 
        params={pOp}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*<FaceRecognition />*/}
    </div>
  );
}

export default App;
