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

export default function Game(props) {
  const {container, game} = styles;

  return (
    <div style={container}>
      <div style={game}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
