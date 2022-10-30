import React from 'react'
import Navbar from '../../layout/Navbar/index-Navbar'
import Footer from '../../layout/Footer/index-footer'
import UserResults from './ComponentsForHome/Search/UserResults'
import UserSearch from './ComponentsForHome/Search/UserSearch'
import Alert from './ComponentsForHome/Alert'

function HomePage(props) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-3 pb-12">
        <div className="mb-1">
        {/* <h1 className="text-6xl inline">Welcome</h1> */}
        <h2 className='text-4xl inline'>Enter Github User:</h2>
        </div>
        
        <Alert />
        <UserSearch />
        
        {/* <div>{props.pagedata.title}</div> */}
        <UserResults />
      </main>
      <Footer />
      
    </>
  )
}

export default HomePage