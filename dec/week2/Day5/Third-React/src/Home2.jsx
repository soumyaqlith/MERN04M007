import React from 'react'

function Home2({ b = 20, obj, children="hii" }) {
    return (
        <div>
            This is home 2
            <br />
            {b}
            <h2 className='bg-amber-400 text-2xl'>this is home 2 heading</h2>
            <br />
            {obj.name}
            <br />

            {children}
        </div>
    )
}

export default Home2