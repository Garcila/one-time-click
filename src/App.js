import React, {Component} from 'react';
import Nav from './components/Nav';
import Title from './components/Title';
import Footer from './components/Footer';
import Game from './components/Game';
import './App.css';

class App extends Component {
  state = {
    images: [
      {
        id: 1,
        imgURL: `https://res.cloudinary.com/garcila/image/upload/b_rgb:ffffff,bo_8px_solid_rgb:f7f0f0,c_thumb,g_north,h_200,w_150/v1554048429/vanGogh/Zelfportret_als_schilder_-_s0022V1962_-_Van_Gogh_Museum.jpg`,
      },
    ],
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
