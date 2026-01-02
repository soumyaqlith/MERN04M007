

import { createContext, useState } from 'react'
import './App.css'
import Child from './Child';
import Child2 from './Child2';
import Child3 from './Child3';

let nameContext = createContext();
let themeContext = createContext();
let qlithContext = createContext();
let objContext = createContext();
let funContext = createContext();
function App() {
  const [a, setA] = useState(0)




  return (
    <>
      Today we are going to learn the useContext
      {/* 
         The steps to create the context object

         => use the createContext method to create the context object
         => use the context provider in the component
         => add the value
         => export the context object 


        How to access the context object in the other component

        => use the useContext() hook and pass the context object to get the conetxt data

      */}

      <nameContext.Provider value={"Qlith"}>
        <themeContext.Provider value={"red"}>
          <qlithContext.Provider value={"innovation"}>

            <Child />
          </qlithContext.Provider>
        </themeContext.Provider>
      </nameContext.Provider>
      <objContext.Provider value={{ name: "nandani" }}>
        <Child2></Child2>
      </objContext.Provider>
      <funContext.Provider value={handleA}>
        <Child3>
        </Child3>
      </funContext.Provider>
    </>
  )
}

export { nameContext, themeContext, qlithContext, objContext, funContext }
export default App
