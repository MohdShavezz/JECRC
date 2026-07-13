import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
      About
          <Link to="/about/car">Cars</Link> |{" "}
        <Link to="/about/bike">Bikes</Link>
      <Outlet/>
    </div>
  )
}

export default About
