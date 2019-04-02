import React from 'react';
import Card from './Card';

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    backgroundImage: 'linear-gradient(to right top, #bcbcbc, #c8c8c8, #d5d5d5, #e1e1e1, #eeeeee, #f1f1f1, #f3f3f3, #f6f6f6, #efefef, #e9e9e9, #e2e2e2, #dcdcdc)',
    maxWidth: '100%',
  },
  game: {
    display: 'grid',
    gridGap: '1rem',
    gridAutoFlow: 'column',
    gridTemplateRows: 'repeat(3, minmax(100px, 150px))',
    maxWidth: '70vw',
    placeItems: 'center',
  },
};

export default function Game({images, handleClicked}) {
  const {container, game} = styles;
  const cards = images.map(image => (
    <Card key={image.id} id={image.id} imageURL={image.imgURL} handleClicked={handleClicked} />
  ));

  return (
    <main style={container}>
      <ul style={game}>{cards}</ul>
    </main>
  );
}
