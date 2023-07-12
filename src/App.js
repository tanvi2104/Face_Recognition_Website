import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation.js';
import FaceRecognition  from './components/FaceRecognition/FaceRecognition.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg'
import './App.css';


const app = new Clarifai.App({
  apiKey: '505388a85bf9452e8389068664ea7337'
});



class App extends Component{
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    app.models
    .predict(
      "505388a85bf9452e8389068664ea7337",
      "https://samples.clarifai.com/metro-north.jpg")
    .then(
    function(response){
      console.log(response);
    },
    function(err){

    }
    );
  }

  render(){
  return (
    <div className="App">
      <ParticlesBg className='particles' color="#F0F8FF" num={100} type="cobweb" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm 
      onInputChange={this.onInputChange} 
      onButtonSubmit={this.onButtonSubmit}
      />
      
      <FaceRecognition />
    </div>
  );
}
}

export default App;
