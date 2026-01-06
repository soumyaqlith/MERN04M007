
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  // let nameRef = useRef();

  // useEffect(() => {
  //   console.log(nameRef.current.innerText);
  // }, [])

  // const [input, setInput] = useState("");


  let inputRef = useRef()

  useEffect(() => {
    console.log(inputRef.current.value)
  }, [])


  function handleSubmit(e) {
    e.preventDefault()
    console.log(inputRef.current.value);

    localStorage.setItem("name",inputRef.current.value);
  }
  console.log("render")

  return (
    <div>
      {/* <p ref={nameRef}>Lorem, ipsum dolor.</p> */}

      <form action="" onSubmit={handleSubmit}>
        {/* <input type="text" onChange={(e)=>setInput(e.target.value)}/> */}
        <input type="text" ref={inputRef} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
