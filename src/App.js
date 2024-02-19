import React, { useState } from 'react'
import { Routing } from './component/Routing';
import { Footer } from './component/Footer';
import { Navbar } from './component/Navbar';
 const App = () => {
  const [darkTheme,setDarkTheme]=useState(false);
  return (
    <div className={darkTheme ? 'dark' : ''}>
        <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
          <Routing/>
          <Footer/>
        </div>
    </div>
  )
}

export default App;
