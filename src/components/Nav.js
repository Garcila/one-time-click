import React from 'react';

const styles = {
  nav: {
    display: 'flex',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'var(--main-purple)',
    color: '#fff',
    justifyContent: 'space-around',
    height: '7rem',
    zIndex: 5,
    boxShadow: '0px 4px 19px -2px rgba(38,38,38,0.9)',
  },
  nav__logo: {
    padding: '1rem',
  },
  nav__feedbackInformation: {
    alignSelf: 'center',
  },
  nav__score: {
    display: 'flex',
    alignItems: 'center',
  },
  nav__score__divider: {
    padding: '1rem',
  },
};

export default function Nav({currentScore, highScore, navFeedback}) {
  const {
    nav,
    nav__logo,
    nav__feedbackInformation,
    nav__score,
    nav__score__current,
    nav__score__divider,
    nav__score__total,
  } = styles;
  return (
    <div style={nav}>
      <h2 style={nav__logo}>NoTTwice</h2>
      <div style={nav__feedbackInformation}>{navFeedback}</div>
      <div style={nav__score}>
        <div style={nav__score__current}>Score: {currentScore}</div>
        <div style={nav__score__divider}>|</div>
        <div style={nav__score__total}>Total Score: {highScore}</div>
      </div>
    </div>
  );
}
