import React, { useEffect, useState } from 'react'

function Home() {

    const [data, setData] = useState([]);


    let getData = async () => {
        let promise = await fetch("https://jsonplaceholder.typicode.com/posts")
        // console.log(promise)
        // promise.then((res) => {
        //     let data = res.json()
        //     data.then((data)=>{
        //         console.log(data)
        //     })
        // })

        let data = await promise.json()
        setData(data)
    }

    // console.log("data",data)

    useEffect(() => {
        getData()
    }, [])

    console.log("data", data)
    return (
        <div>
            Home
        </div>
    )
}

export default Home