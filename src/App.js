import React, {Component} from 'react';
import Nav from './components/Nav';
import Title from './components/Title';
import Footer from './components/Footer';
import Game from './components/Game';
import './App.css';
import images from './images.json';

const sortImages = imagesArray => imagesArray.sort(() => Math.random() - 0.5);

class App extends Component {
  state = {
    images: sortImages(images),
    clickedImages: [],
    currentScore: 0,
    highScore: 0,
    navFeedback: 'Click an image to start',
  };

  resetGame = () => {
    this.setState(prevState => ({
      images: sortImages(images),
      clickedImages: [],
      currentScore: 0,
      highScore: prevState.highScore,
      navFeedback: 'Click an image to start',
    }));
  };

  handleClicked = id => {
    this.setState(prevState => {
      if (!this.state.clickedImages.find(element => element === id)) {
        return {
          images: sortImages(images),
          clickedImages: [...prevState.clickedImages, id],
          currentScore: prevState.currentScore + 1,
          highScore:
            prevState.highScore < prevState.currentScore + 1
              ? prevState.highScore + 1
              : prevState.highScore,
          navFeedback: 'Correct!',
        };
      } else {
        this.resetGame();
      }
    });
  };

  render() {
    const {images, currentScore, highScore, navFeedback} = this.state;
    return (
      <div className='App'>
        <Nav
          currentScore={currentScore}
          highScore={highScore}
          navFeedback={navFeedback}
          sortImages={this.resetGame}
        />
        <Title />
        <Game images={images} handleClicked={this.handleClicked} />
        <Footer />
      </div>
    );
  }
}

export default App;
