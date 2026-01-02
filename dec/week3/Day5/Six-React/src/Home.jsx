import React from 'react'
import { useState } from 'react'

function Home() {

    // keyword [variable,the function used for update the variable]=useState(initialization)

    const [obj, setObj] = useState({});
    const [count, setCount] = useState(0);

    function addData() {
        setObj({
            name: "xyz",
            age: 30
        })
    }
    let a = 0;
    function updateA() {
        a = a + 1;
        console.log(a)
    }

    return (
        <div>
            Home
            <br />
            {/* Value {a} */}
            {/* <button onClick={updateA}>Click</button> */}

            {/* <br />
        value of obj 
        <br />
        name {obj.name} 
        <br />
        age {obj.age}

        <button onClick={addData}>add the data</button> */}


            Count {count}
            <br />
            <button onClick={() => {
                setCount(count + 1);
                updateA()
            }}>Inc</button>

        </div>

    )
}

export default Home