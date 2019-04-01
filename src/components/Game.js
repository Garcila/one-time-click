import React from 'react';
import Card from './Card';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  game: {
    display: 'grid',
    justifyItems: 'center',
    gridGap: '1rem',
    gridTemplateColumns: 'repeat(4, minmax(200px,1fr))',
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
    <div style={container}>
      <ul style={game}>{cards}</ul>
    </div>
  );
}
