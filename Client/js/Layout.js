import React from "react";
import {Footer} from "./React Components/Footer";
import {Header} from "./React Components/Header";
import {drumkit} from "./drumkit";



export class Layout extends React.Component{

  componentDidMount() {
    window.onkeydown=drumkit.keyDown;
    window.onload=drumkit.init();
  }

  render(){
    return(
      <div className="content">

      <Header />

      <div id="middle-content" className="drumkit-bg">
      <div id="content-extender"></div>
      <div className="drums">
        <div  className="key a col-lg-1 col-med-1 col-sm-1 col-xs-1">
          <h1>A</h1>
          <h2  className="sound">Boom</h2>
        </div>
        <div  className="key s col-lg-1 col-med-1 col-sm-1 col-xs-1">
          <h1>S</h1>
          <h2  className="sound">Clap</h2>
        </div>
        <div  className="key d col-lg-1 col-med-1 col-sm-1 col-xs-1">
          <h1>D</h1>
          <h2  className="sound">Snare</h2>
        </div>
        <div  className="key f col-lg-1 col-med-1 col-sm-1 col-xs-1">
          <h1>F</h1>
          <h2  className="sound">Tom</h2>
        </div>
        <div  className="key g col-lg-1 col-med-1 col-sm-1 col-xs-1">
          <h1>G</h1>
          <h2  className="sound">Crash</h2>
        </div>
        <div  className="key h col-lg-1 col-med-1 col-sm-1 col-xs-1">
          <h1>H</h1>
          <h2  className="sound">Hihat</h2>
        </div>
        <div  className="key j col-lg-1 col-med-1 col-sm-1 col-xs-1">
          <h1>J</h1>
          <h2  className="sound">Open</h2>
        </div>
        <div  className="key k col-lg-1 col-med-1 col-sm-1 col-xs-1">
          <h1>K</h1>
          <h2  className="sound">Kick</h2>
        </div>
        <div  className="key l col-lg-1 col-med-1 col-sm-1 col-xs-1">
          <h1>L</h1>
          <h2  className="sound">Ride</h2>
        </div>
        </div>
      </div>

      <Footer />

      <audio id="boom-sound" src="Client/snd/boom.wav"></audio>
    	<audio id="clap-sound" src="Client/snd/clap.wav"></audio>
    	<audio id="hihat-sound" src="Client/snd/hihat.wav"></audio>
    	<audio id="kick-sound" src="Client/snd/kick.wav"></audio>
    	<audio id="openhat-sound" src="Client/snd/openhat.wav"></audio>
    	<audio id="ride-sound" src="Client/snd/ride.wav"></audio>
    	<audio id="snare-sound" src="Client/snd/snare.wav"></audio>
    	<audio id="crash-sound" src="Client/snd/crash.wav"></audio>
    	<audio id="tom-sound" src="Client/snd/tom.wav"></audio>

      </div>



    );
  }
}
