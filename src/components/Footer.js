import React from 'react';

const styles = {
  footer: {
    flex: '0 0 auto',
    height: '4rem',
    display: 'flex',
    alignItems: 'flex-end',
    backgroundColor: 'var(--secondary-purple)',
    color: '#fff',
    justifyContent: 'space-around',
  },
  footer__infooter: {
    flex: 1,
    textAlign: 'left',
    height: '1.5rem',
    backgroundColor: 'var(--main-purple)',
  },
};

export default function Footer() {
  const {footer, footer__infooter} = styles;
  return (
    <div style={footer}>
      <div style={footer__infooter}>NoTTwice</div>
    </div>
  );
}
