import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import DefaultPage from './Pages/Default/index-DefaultPage';
import HomePage from './Pages/Home/index-HomePage'
import pageData from './mockAPI';
import NotFound from './Pages/NotFound';
import {GithubProvider} from './Context/Context'

class App extends React.Component {
  render(){
    return (
        <GithubProvider>
        <Router> 
          <div className="flex flex-col justify-between h-screen">
            <Routes>
              <Route path="/" element={<HomePage key={pageData[0].slug} pagedata={pageData[0]}/>} />
              {pageData.map( (page, index) => (
                <Route key={page.slug} path={`/${page.slug}`} element={
                  {
                    'home': <HomePage key={page.slug} pagedata={page}/>,
                    'default': <DefaultPage key={page.slug} pagedata={page}/>
                  }[page.page_template]
                } />
              ))}
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
        </GithubProvider>
    )
  }
}

export default App;
