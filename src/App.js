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
        imgURL: `https://res.cloudinary.com/garcila/image/upload/t_noTTwice/vanGogh/Zelfportret_als_schilder_-_s0022V1962_-_Van_Gogh_Museum.jpg`,
      },
      {
        id: 2,
        imgURL: `https://res.cloudinary.com/garcila/image/upload/t_noTTwice/vanGogh/Zelfportret_-_s0097V1962v_-_Van_Gogh_Museum.jpg`
      },
      {
        id: 3,
        imgURL: `https://res.cloudinary.com/garcila/image/upload/t_noTTwice/vanGogh/Vincent_van_Gogh_-_Self-portrait_with_grey_felt_hat_-_Google_Art_Project.jpg`
      },
      {
        id: 4,
        imgURL: `https://res.cloudinary.com/garcila/image/upload/v1554048392/vanGogh/Self-Portrait_with_a_Bandaged_Ear_-_Vincent_van_Gogh.jpg`
      },
      {
        id: 5,
        imgURL: `https://res.cloudinary.com/garcila/image/upload/t_noTTwice/vanGogh/Vincent_Willem_van_Gogh_108.jpg`
      },
      {
        id: 6,
        imgURL: `https://res.cloudinary.com/garcila/image/upload/t_noTTwice/vanGogh/Vincent_Willem_van_Gogh_106.jpg`
      },
      {
        id: 7,
        imgURL: `https://res.cloudinary.com/garcila/image/upload/t_noTTwice/vanGogh/Vincent_Willem_van_Gogh_102.jpg`
      },
      {
        id: 8,
        imgURL: `https://res.cloudinary.com/garcila/image/upload/t_noTTwice/vanGogh/Vincent_van_Gogh_-_Self-portrait_with_pipe_-_Google_Art_Project.jpg`
      },
      {
        id: 9,
        imgURL: `https://res.cloudinary.com/garcila/image/upload/v1554048375/vanGogh/Vincent_van_Gogh_-_Self-portrait_-_Google_Art_Project_2.jpg`
      },
      {
        id: 10,
        imgURL: `https://res.cloudinary.com/garcila/image/upload/v1554048363/vanGogh/Van_Gogh_self-portrait_dedicated_to_Gauguin.jpg`
      },
      {
        id: 11,
        imgURL: `https://res.cloudinary.com/garcila/image/upload/v1554048358/vanGogh/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_1.jpg`
      },
      {
        id: 12,
        imgURL: `https://res.cloudinary.com/garcila/image/upload/v1554048310/vanGogh/Van_Gogh_Self-Portrait_with_Grey_Felt_Hat_1886-87_Rijksmuseum.jpg`
      }
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
