import React from 'react'
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Certification from '../components/Certification';
import HomeDoctors from '../components/HomeDoctors';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Certification />
      <HomeDoctors />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Home;
