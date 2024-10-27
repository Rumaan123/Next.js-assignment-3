import Header from '../components/Header';
import Footer from '../components/Footer';

import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>

        {/* Hero Section */}
        <section>
            <h3>Welcome to my webside</h3>
            <p>My first Experience</p>
        </section>

        {/* About us */}
        <section>
            <h3>About us</h3>
            <p> my creativity</p>
        </section>

        {/* Portfolio */}
        <section>
          <h3>Portfolio</h3>
          <p>my portfolio</p>
        </section>








        
     <Footer/>
    </div>
  )
}

export default page
