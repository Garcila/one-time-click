import React, {Component} from 'react';
import Nav from './components/Nav';
import Title from './components/Title';
import Footer from './components/Footer';
import Game from './components/Game';
import './App.css';
import data from './images.json';

class App extends Component {
  state = {
    images: data.images
  };

  render() {
    let {images} = this.state;
    return (
      <div className='App'>
        <Nav />
        <Title />
        <Game images={images}/>
        <Footer />
      </div>
    );
  }
}

export default App;
