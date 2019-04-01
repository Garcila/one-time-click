import React from 'react';

const styles = {
  nav: {
    flex: '0 0 auto', //sticky nav
    display: 'flex',
    backgroundColor: 'var(--main-purple)',
    color: '#fff',
    justifyContent: 'space-around',
  },
  nav__logo: {
    padding: '1rem',
  },
  nav__feedbackInformation: {
    alignSelf: 'center'
  },
  nav__score: {
    display: 'flex',
    alignItems: 'center'
  },
  'nav__score__divider':{
    padding: '1rem'
  }
}

export default function Nav() {
  let {nav, nav__logo, nav__feedbackInformation, nav__score, nav__score__current, nav__score__divider, nav__score__total} = styles;
  return (
    <div style={nav}>
      <h2 style={nav__logo}>NoTTwice</h2>
      <div style={nav__feedbackInformation}>
        Click an image to play
      </div>
      <div style={nav__score}>
        <div style={nav__score__current}>Score:</div>
        <div style={nav__score__divider}>|</div>
        <div style={nav__score__total}>Total Score:</div>
      </div>
    </div>
  );
}
