import React from 'react'
import Navbar from '../../layout/Navbar/index-Navbar'
import Footer from '../../layout/Footer/index-footer'

function HomePage(props) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-3 pb-12">
        <h1>Welcome</h1>
        <div>{props.pagedata.title}</div>
        <p>THIS IS THE HOMEPAGE TEMPLATE</p>
      </main>
      <Footer />
    </>
  )
}

export default HomePage