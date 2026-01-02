
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0)

  const [data, setData] = useState([]);

  //useEffect(() => {
  // effect code what you want to execute

  // return () => {   //* it  is execute when your variable is unmounted
  //   second
  // }

  // }, [third])  //[dependencies]  //* if we want to execute of effect code based on the depe


  // execute at all rendering
  // useEffect(() => {
  //   alert("in every render")
  // })

  // execute at the first render
  // useEffect(() => {
  //   alert("it is execute at the first render")
  // }, [])

  // return statement in useEffect
  // useEffect(() => {
  //   alert("data updated");

  //   return () => {
  //     alert("data unmounted")
  //   }
  // })


  // based on dependencies 
  // useEffect(() => {
  //   alert("based on dep")
  // }, [total,count]);


  useEffect(() => {
    async function getData() {
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let totaldata = await res.json();
        setData(totaldata);
      } catch (error) {
        console.log("error", error);
      }
    }
    getData()
  }, [])



  return (
    <div className='h-screen flex justify-center items-center'>
      {/* <div className='h-30 w-50 bg-amber-400 rounded flex justify-center items-center'>
        <button
          onClick={() => setCount(count + 1)}
          className='border p-2 rounded'
        >
          Count {count}
        </button>
        <button
          onClick={() => setTotal(total + 1)}
          className='border p-2 rounded'
        >
          Total {total}
        </button>
      </div> */}
      
    </div>
  )
}

export default App
