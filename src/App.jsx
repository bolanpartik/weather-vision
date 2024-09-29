import React from "react"
import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"

function App() {

  return (

    <div className="min-h-dvh w-full bg-darkGradient">
      <div className="flex w-full justify-center sticky top-0 z-10">
        <NavBar />
      </div>
      <HeroSection />
    </div>
  )
}

export default App
