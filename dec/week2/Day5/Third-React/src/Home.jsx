import React from 'react'

function Home(props) {
    return (
        <div>
            this is the Home
            <br />
            a value :{props.a}
            <br />
            String value :{props.str}
            <br />
            Is True :{props.isTrue.toString()}
            <br />
            Array :{props.arr}
            <br />
            <ul>
                {
                    props.arr.map((v,i)=>(
                        <li key={i}>{v}</li>
                    ))
                }
            </ul>
            <br />
            Object value 
            <br />
            Name :{props.obj.name}
            <br />
            Age :{props.obj.age}
            <br />
            Phone :{props.obj.phone}
            {props.func()}

            <br />
            {props.children}
        </div>
    )
}

export default Home