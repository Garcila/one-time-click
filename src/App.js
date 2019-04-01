import React, { Component } from 'react'
import Nav from './components/Nav'
import Title from './components/Title'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Title />
      </div>
    )
  }
}

export default App
