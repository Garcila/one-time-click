import React from 'react';
import {useSpring, animated} from 'react-spring';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>`scale(${s})`;

const styles = {
  listItem: {
    listStyleType: 'none',
  },
  card: {
    boxShadow: '0px 4px 11px -2px rgba(38,38,38,0.42)',
    maxHeight: '150px',
    cursor: 'pointer',
  },
};

export default function Card({id, imageURL, handleClicked}) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: {mass: 2, tension: 650, friction: 40},
    transform: 'scale(3)',
  }));
  const {listItem, card} = styles;
  return (
    <animated.div
      onMouseEnter={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
      onMouseLeave={() => set({xys: [0, 0, 1]})}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <li key={id} id={id} style={listItem} onClick={() => handleClicked(id)}>
        <img style={card} src={imageURL} alt='img' />
      </li>
    </animated.div>
  );
}
