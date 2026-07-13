import React, { useState } from 'react'
// import './App.css'
// import './components/header.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Counter from './Counter'

const App = () => {

  const [isVisible, setIsVisible] = useState(true)
  //javascript logic 
  const name = 'john'



  return ( //jsx : javascript and xml = html+js
    // React fragmant
    <>  
      {
        true && <Counter />
      }
      {
        isVisible ? <>IsVisible</> : <>No VIsible</>
      }
      <Header
        name={name}
      />
      <h2>This is my App {2 + 3} {name}</h2>
      <Footer
        name={name}
        age={12}
      />

    </>
  )
}

export default App
