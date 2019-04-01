import React from 'react'

const styles = {
  title: {
    height: '15rem',
    color: '#fff',
    margin: 0,
    backgroundImage: 'url(/images/trianglify.svg)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '2rem',
    marginTop: '5rem',
  },
  title__name: {
    margin: 0,
  }
}

export default function Title() {
  const {title, title__name} = styles
  return (
    <div style={title}>
      <h1 style={title__name}>NoTTwice</h1>
      <h3>Click on images to score points, but nottwice</h3>
    </div>
  )
}
