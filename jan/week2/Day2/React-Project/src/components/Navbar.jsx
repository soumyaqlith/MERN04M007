import React from "react";
import { NavLink, useNavigate } from "react-router";

function Navbar() {
    const navigate = useNavigate();
    const isLogin = localStorage.getItem("isLogin");

    function handleAuthUser() {
        if (isLogin) {
            localStorage.removeItem("isLogin");
            navigate("/login");
        } else {
            navigate("/login");
        }
    }


    return (
        <nav className="w-full bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                <div
                    onClick={() => navigate("/")}
                    className="text-2xl font-extrabold cursor-pointer tracking-wide"
                >
                    <span className="text-red-600">Food</span>
                    <span className="text-orange-500">Hotel</span>
                </div>

                <div className="flex items-center gap-8">

                    <div className="flex items-center gap-6">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `text-sm font-semibold transition ${isActive
                                    ? "text-red-600"
                                    : "text-gray-600 hover:text-red-500"
                                }`
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `text-sm font-semibold transition ${isActive
                                    ? "text-red-600"
                                    : "text-gray-600 hover:text-red-500"
                                }`
                            }
                        >
                            About
                        </NavLink>

                        <NavLink
                            to="/foods"
                            className={({ isActive }) =>
                                `text-sm font-semibold transition ${isActive
                                    ? "text-red-600"
                                    : "text-gray-600 hover:text-red-500"
                                }`
                            }
                        >
                            Foods
                        </NavLink>
                        <button
                            onClick={handleAuthUser}
                            className="px-5 py-2 rounded-full text-sm font-semibold transition shadow-md 
                                bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600
                                "

                        >
                            {isLogin ? "Logout" : "Login"}
                        </button>
                    </div>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shadow-lg animate-bounce">
                        🤖
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
