import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation.js';
import FaceRecognition  from './components/FaceRecognition/FaceRecognition.js';
import Logo from './components/Logo/Logo.js';
import Register from './components/Register/Register.js';
import Signin from './components/Signin/Signin.js'
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
      imageURL: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col*width),
      bottomRow: height - (clarifaiFace.bootom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {

    this.setState({imageURL: this.state.input});
    app.models
    .predict(
      //"505388a85bf9452e8389068664ea7337",
      //'https://www.clarifai.com/models/face-detection'
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState({isSignedIn: false})
    }
    else if(route==='home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route:'home'});
  }

  render(){
  const { isSignedIn, imageURL, route, box } = this.state;
  return (
    <div className="App">
      <ParticlesBg className='particles' color="#F0F8FF" num={100} type="cobweb" bg={true} />
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
      { route === 'signin'
        ? <Signin onRoute={this.onRouteChange}/>
        :<div> 
          <Logo />
          <Rank />
          <ImageLinkForm 
            onInputChange={this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit}
          />
          <FaceRecognition box={box} imageURL={ imageURL} />
        </div>
      }
        :{
            route === 'signin' 
            ? <Signin onRouteChange={this.onRouteChange}/>
            : <Register onRouteChange={this.onRouteChange}/>
          }
      }
    </div>
  );
}
}

export default App;

