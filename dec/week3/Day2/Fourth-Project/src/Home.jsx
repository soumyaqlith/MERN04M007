import React from 'react'
import Home2 from './Home2'

function Home(props) {
  return (
    <div>
        Home page

        value :{props.value}
        {props.children}
        <Home2 value={props.value}/>
    </div>
  )
}

export default Home