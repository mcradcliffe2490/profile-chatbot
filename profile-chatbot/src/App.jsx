import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import CustomTextBox from './CustomTextBox'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <CustomTextBox/>
      </header>
    </div>
  )
}

export default App
