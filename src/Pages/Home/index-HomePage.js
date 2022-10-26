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
        <Alert />
        <UserSearch />
        <h1 className="text-6xl">Welcome</h1>
        {/* <div>{props.pagedata.title}</div> */}
        <UserResults />
      </main>
      <Footer />
      
    </>
  )
}

export default HomePage