import React, { useState } from "react";
import { Link } from "react-router";
import { FaUtensils } from "react-icons/fa";
import { toast } from "react-toastify";

function Register() {

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [password, setPassword] = useState("");



    function handleRegister(e) {
        e.preventDefault()

        try {
            let oldData = localStorage.getItem("users");
            let users = oldData ? JSON.parse(oldData) : [];

            users.push({ name, email, password, phone })

            localStorage.setItem("users", JSON.stringify(users))

            setName("");
            setEmail("");
            setPhone("");
            setPassword("");

            toast.success("Registration successfull");
        } catch (error) {
            toast.error("register failed");
        }

    }


    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                <div className="flex flex-col items-center mb-6">
                    <div className="bg-orange-500 text-white p-3 rounded-full mb-2">
                        <FaUtensils size={28} />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        Create Account
                    </h1>
                    <p className="text-sm text-gray-500">
                        Join Foodies & explore meals 🍽️
                    </p>
                </div>

                <form className="space-y-4">

                    <div>
                        <label className="text-sm text-gray-600" htmlFor="full_name">Full Name</label>
                        <input
                            id="full_name"
                            type="text"
                            placeholder="John Doe"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>

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
                        <label className="text-sm text-gray-600">Phone</label>
                        <input
                            type="tel"
                            placeholder="9876543210"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
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
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition"
                        onClick={handleRegister}
                    >
                        Register
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-orange-500 font-semibold hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
