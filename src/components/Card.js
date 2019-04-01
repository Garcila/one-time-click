import React from 'react';

const styles = {
  listItem: {
    listStyleType: 'none',
  },
  card: {
    boxShadow: '0px 4px 11px -2px rgba(38,38,38,0.32)',
    maxHeight: '150px',
  },
};
export default function Card({id, imageURL}) {
  const {listItem, card} = styles;
  return (
    <li key={id} id={id} style={listItem}>
      <img style={card} src={imageURL} alt='img' />
    </li>
  );
}
