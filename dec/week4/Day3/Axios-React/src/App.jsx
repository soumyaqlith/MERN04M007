
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])


  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  // useEffect(() => {
  //   console.log("it is execute at every render")
  // })

  // useEffect(()=>{
  //   console.log("it is execute at the first render")
  // },[])

  // useEffect(()=>{
  //   console.log("count updated");
  //   return ()=>{
  //     console.log("count unmounted")
  //   }
  // })

  // useEffect(() => {
  //   console.log("depend on the dependencies")
  // }, [total, count])

  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let dataList = await res.json();
        setData(dataList)
      } catch (error) {
        console.log("error", error)
      }
    }
    getData()
  }, [])


  return (
    <div>
      Hello
      <br />
      <button
        onClick={() => setCount(count + 1)}
        className='h-20 w-30 bg-red-500'
      >
        Count {count}
      </button>
      <br />
      <button
        onClick={() => setTotal(total + 1)}
        className='h-20 w-30 bg-red-500'
      >
        Total {total}
      </button>

      <ul>
        {
          data.map((obj) => (
            <li key={obj.id}>{obj.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
