import React, {Component} from 'react';
import Nav from './components/Nav';
import Title from './components/Title';
import Footer from './components/Footer';
import Game from './components/Game';
import images from './images.json';
import images1 from './images1.json';

const styles = {
  App: {
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    flexDirection: 'column',
    // height: '100vh',
  },
};

// helper to sort images
const sortImages = imagesArray => imagesArray.sort(() => Math.random() - 0.5);
class App extends Component {
  state = {
    images: [images,images1][Math.round(Math.random())],
    clickedImages: [],
    currentScore: 0,
    highScore: 0,
    navFeedback: 'Click an image to start',
  };

  resetGame = () => {
    this.setState(prevState => {
      const newSet = prevState.images === images ? images1 : images;
      return {
        // images: [images,images1][Math.round(Math.random())],
        images: newSet,
        clickedImages: [],
        currentScore: 0,
        highScore: prevState.highScore,
        navFeedback: 'Click an image to start',
      };
    });
  };

  handleClicked = id => {
    const sortedImages = sortImages(this.state.images);
    this.setState(prevState => {
      if (!prevState.clickedImages.find(element => element === id)) {
        return {
          images: sortedImages,
          clickedImages: [...prevState.clickedImages, id],
          currentScore: prevState.currentScore + 1,
          highScore:
            prevState.highScore < prevState.currentScore + 1
              ? prevState.highScore + 1
              : prevState.highScore,
          navFeedback: 'Correct!',
        };
      } else {
        return {
          images: [images,images1][Math.round(Math.random())],
          clickedImages: [],
          currentScore: 0,
          highScore: prevState.highScore,
          navFeedback: 'Click an image to start',
        };
      }
    });
  };

  render() {
    const {App} = styles;
    const {images, currentScore, highScore, navFeedback} = this.state;
    return (
      <main style={App}>
        <Nav
          currentScore={currentScore}
          highScore={highScore}
          navFeedback={navFeedback}
          sortImages={this.resetGame}
        />
        <Title />
        <Game images={images} handleClicked={this.handleClicked} />
        <Footer />
      </main>
    );
  }
}

export default App;
