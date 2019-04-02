import React from 'react';

const styles = {
  footer: {
    minHeight: '4rem',
    display: 'flex',
    alignItems: 'flex-end',
    backgroundColor: 'var(--secondary-purple)',
    color: '#fff',
  },
  footer__infooter: {
    flex: 1,
    fontSize: '0.7rem',
    display:'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '3rem',
    height: '1.5rem',
    backgroundColor: 'var(--main-purple)',
  },
};

export default function Footer() {
  const {footer, footer__infooter} = styles;
  return (
    <div style={footer}>
      <div style={footer__infooter}>!2 - Not built by a <span role="img" aria-label="emoji-robot">🤖</span> on a <span role="img" aria-label="emoji-laptop">💻</span></div>
    </div>
  );
}
