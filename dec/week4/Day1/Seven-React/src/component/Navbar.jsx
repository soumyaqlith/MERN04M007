import React from 'react'

function Navbar({ setIsLogin, isLogin }) {
    return (
        <div>
            <nav className='w-full p-7 bg-green-500 flex justify-end'>
                <button
                    className='py-2 px-4 bg-amber-500 rounded uppercase font-bold'
                    onClick={() => setIsLogin(true)}
                >
                    {isLogin ? "Logout" : "Login"}
                </button>
            </nav>
        </div>
    )
}

export default Navbar