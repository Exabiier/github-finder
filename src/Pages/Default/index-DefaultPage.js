import Navbar from '../../layout/Navbar/index-Navbar'
import Footer from '../../layout/Footer/index-footer'
import React from 'react'

function DefaultPage(props) {
  return (
    <>
        <Navbar />
        <main className="container mx-auto px-3 pb-12">
            <div>{props.pagedata.title}</div>
            <p>{props.pagedata.content}</p>
        </main>
        <Footer />
    </>
  )
}

export default DefaultPage