import React, { useState } from "react";
import { Link } from "react-router";
import { FaUtensils } from "react-icons/fa";
import { toast } from "react-toastify";

function Login() {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");


    function handleLogin() {
        let trimedEmail = email.trim();
        let trimedPassword = password.trim()
        let oldData = localStorage.getItem("users");
        if (oldData) {
            let users = JSON.parse(oldData);
            let user = users.find((ele) => ele.email === trimedEmail);
            if (user) {
                if (user.password === trimedPassword) {
                    localStorage.setItem("isLogin",true);
                    toast.success("login success")
                } else {
                    toast.error("Invalid Password")
                }
            } else {
                toast.error("Invalid Email")
            }
        } else {
            toast.error("user not available")
        }

        setEmail("");
        setPassword("")
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                <div className="flex flex-col items-center mb-6">
                    <div className="bg-orange-500 text-white p-3 rounded-full mb-2">
                        <FaUtensils size={28} />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        Foodies Login
                    </h1>
                    <p className="text-sm text-gray-500">
                        Discover delicious meals 🍽️
                    </p>
                </div>

                <div className="space-y-4">

                    <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Don’t have an account?{" "}
                    <Link
                        to="/register"
                        className="text-orange-500 font-semibold hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
