import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Child1 from './Child1.jsx'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './Contact.jsx';
import AboutBike from './pages/AboutBike.jsx'
import AboutCar from './pages/AboutCar.jsx'
import { MyContext } from './Context.jsx';

const App = () => {
  const data=useContext(MyContext)
  console.log(data)

  return (
    <div>
      <BrowserRouter >
        {/* Navigation */}
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} >
                <Route path="bike" element={< AboutBike />} />
                <Route path="car" element={< AboutCar/>} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          {/* <Route path='*' element={<NotFound/>}/> */}
        </Routes>
      </BrowserRouter>
      {/* <Child1 /> */}
    </div>
  )
}

export default App
