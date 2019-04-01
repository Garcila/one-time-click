import React, {Component} from 'react';
import Nav from './components/Nav';
import Title from './components/Title';
import Footer from './components/Footer';
import Game from './components/Game';
import './App.css';
import images from './images.json';

const sortImages = (imagesArray) => imagesArray.sort(() => Math.random() - 0.5);

class App extends Component {
  state = {
    images: sortImages(images),
    clickedImages: [],
    currentScore: 0,
    highScore: 0,
    navFeedback: ['Click an image to start', 'Correct', 'Incorrect']
  };

  handleClicked = id => {
    this.setState(prevState => {
      if (!this.state.clickedImages.find(element => element === id)) {
        return {
          images: sortImages(images),
          clickedImages: [...prevState.clickedImages, id],
          currentScore: prevState.currentScore + 1,
          highScore: prevState.highScore < prevState.currentScore + 1 ? prevState.highScore + 1 : prevState.highScore,
        };
      } else {
        return {
          images: sortImages(images),
          clickedImages: [],
          currentScore: 0,
          highScore: prevState.highScore,
        };
      }
    });
  };

  render() {
    const {images, currentScore, highScore} = this.state;
    return (
      <div className='App'>
        <Nav currentScore={currentScore} highScore={highScore}/>
        <Title />
        <Game images={images} handleClicked={this.handleClicked} />
        <Footer />
      </div>
    );
  }
}

export default App;
