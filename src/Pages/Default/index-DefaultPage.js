import Navbar from '../../layout/Navbar/index-Navbar'
import Footer from '../../layout/Footer/index-footer'
import React from 'react'

function DefaultPage(props) {
  return (
    <>
        <Navbar />
        <main className="container mx-auto px-3 pb-12">
            <h1>{props.tabIndex}</h1>
            <div className="text-6xl mb-4">{props.pagedata.title}</div>

            <p className='mb-4 text-2xl font-light'>
              A React app to search GitHub profiles and see profile details. This
              project is part of the
              <a href='https://www.udemy.com/course/modern-react-front-to-back/'>
                {' '}
                React Front To Back
              </a>{' '}
              Udemy course by
              <strong>
                <a href='https://traversymedia.com'> Brad Traversy</a>
              </strong>
              .
            </p>
            <p className='text-lg text-gray-400'>
              Version <span className='text-white'>1.0.0</span>
            </p>
            <p className='text-lg text-gray-400'>
              Layout By: 
              <a className='text-white' href='https://twitter.com/hassibmoddasser'>
                Hassib Moddasser
              </a>
            </p>
    
            
        </main>
        <Footer />
    </>
  )
}

export default DefaultPage