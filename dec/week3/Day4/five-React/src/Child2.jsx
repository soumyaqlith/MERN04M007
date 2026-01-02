import React, { useContext } from 'react'
import { objContext } from './App'

function Child2() {
    let obj = useContext(objContext)
    console.log(obj)
  return (
    <div>Child2

        {obj.name}
    </div>
  )
}

export default Child2