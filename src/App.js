import React, { Component } from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import ProjectDashboard from './components/ProjectDashboard/ProjectDashboard'
import './App.css'

class App extends Component{
  render(){
    return(
      <div className="App">
        <HeroSection />
        <ProjectDashboard />
      </div>
    )
  }
}

export default App
