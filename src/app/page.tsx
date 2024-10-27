import Header from './components/Header'
import Footer from './components/Footer'


import React from 'react'

const Landingpage = () => {
  return (
    <div>
      <Header/>

        {/* Hero Section */}
        <section className='bg-gray-100 text-center py-20'>
            <h2 className='text-4xl font-bold mb-4'>Welcome to my webside</h2>
            <p className='text-lg'>My first Experience</p>
        </section>

        {/* About us section*/}
        <section id='about' className='bg-container mx-auto py-20'>
            <h3 className='text-3xl font-bold mb-4'>About us</h3>
            <p className='text-lg'> my creativity</p>
        </section>

        {/* Portfolio section*/}
        <section id='portfolio' className='bg-gray-100 py-20'>
          <div className='container mx-auto'>   
               <h3 className='text-3xl font-bold mb-8 text-center'>Portfolio</h3>
               <p>Amazing project try my best</p>
          </div>
          
          
        </section>




      
      <Footer/>
    </div>
  )
}

export default Landingpage;
