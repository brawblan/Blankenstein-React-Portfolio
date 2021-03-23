import React from 'react'
import NavBar from '../components/NavBar'
import HomeIntro from '../components/HomeIntro'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div className="home-page">
      <NavBar />
      <HomeIntro />
      <Footer />
    </div>
  );
}

export default HomePage;