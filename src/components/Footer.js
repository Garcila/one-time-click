import React from 'react';

const styles = {
  footer: {
    flex: '0 0 auto', //sticky footer
    height: '4rem',
    display: 'flex',
    alignItems: 'flex-end',
    backgroundColor: 'var(--main-purple)',
    color: '#fff',
    justifyContent: 'space-around',
  },
  'footer__infooter': {
    flex: 1,
    textAlign: 'left',
    height: '1.5rem',
    backgroundColor: 'var(--secondary-purple)',
  }
}

export default function Footer() {
  let {footer, footer__infooter} = styles;
  return (
    <div style={footer}>
      <div style={footer__infooter}>NoTTwice</div>
    </div>
  );
}
