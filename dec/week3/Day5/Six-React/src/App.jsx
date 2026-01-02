
import { useState } from 'react'
import './App.css'
import Home from './Home';

function App() {
  const [a, setA] = useState(0);
  const [name, setName] = useState("");
  const [obj, setObj] = useState(null);
  // let a = 1;
  // function updateA() {
  //   a++;
  //   console.log(a)
  // }

  let handleText = () => {
    setName("hii")
  }
  return (
    <div>
      hello
      <br />
      {/* direct calling */}
      {/* <button onClick={updateA()}>Inc</button> */}

      {/* indirect calling */}
      {/* value {a}
      <br />
      <button onClick={() => setA(a + 1)}>Increament</button>

      <br />
      Name :{name}
      <br />
      <button onClick={handleText}>Click here to add some text</button> */}

      <Home/>
    </div>
  )
}

export default App
