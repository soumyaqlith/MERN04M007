import React from 'react'
import { useLocation, useNavigate } from 'react-router'

function About() {

  let navigate = useNavigate()
  let { pathname } = useLocation();
  console.log(pathname)

  function handleClick() {
    navigate("/profile?search=std1&cata=3");
  }
  return (
    <div>About

      <button onClick={handleClick}>
        go to profile
      </button>
    </div>
  )
}

export default About