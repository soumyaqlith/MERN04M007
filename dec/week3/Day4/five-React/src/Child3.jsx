import React, { useContext } from 'react'
import { funContext } from './App'

function Child3() {
    let fun = useContext(funContext);
  return (
    <div>Child3
        <br />
        <button onClick={()=>{}}>Inc</button>
    </div>

  )
}

export default Child3