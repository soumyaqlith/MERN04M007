import React, { useEffect } from "react";
import { useNavigate } from "react-router";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">

            {/* HERO SECTION */}
            <div className="min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center gap-14">

                    <div className="md:w-1/2 space-y-7">
                        <span className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-semibold">
                            🍔 Fresh & Delicious
                        </span>

                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
                            Welcome to{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                                Food Bazar
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            Discover tasty dishes, explore new flavors, and enjoy your favorite
                            food delivered fresh to your doorstep.
                        </p>

                        <div className="flex gap-4">
                            <button
                                onClick={() => navigate("/foods")}
                                className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-7 py-3 rounded-xl font-semibold shadow-lg transition transform hover:scale-105"
                            >
                                Explore Foods
                            </button>

                            <button
                                onClick={() => navigate("/about")}
                                className="border border-red-500 text-red-600 hover:bg-red-50 px-7 py-3 rounded-xl font-semibold transition"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>

                    <div className="md:w-1/2 relative">
                        <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-tr from-red-500 to-orange-400 rounded-3xl blur-2xl opacity-30"></div>

                        <img
                            src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?fm=jpg&q=60&w=3000"
                            alt="Food"
                            className="relative rounded-3xl shadow-2xl object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* WHY CHOOSE US */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                        Why Choose <span className="text-red-600">Food Bazar</span>?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: "🚀", title: "Fast Delivery", desc: "Get your food delivered hot & fresh in no time." },
                            { icon: "🍕", title: "Quality Food", desc: "Prepared by top chefs with fresh ingredients." },
                            { icon: "💳", title: "Easy Payment", desc: "Multiple secure payment options available." },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl shadow hover:shadow-xl transition text-center"
                            >
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* POPULAR FOODS */}
            <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                        Popular Dishes 🍽️
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {[
                            "https://images.unsplash.com/photo-1550547660-d9450f859349",
                            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
                            "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
                        ].map((img, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
                            >
                                <img src={img} alt="" className="h-52 w-full object-cover" />
                                <div className="p-5">
                                    <h3 className="font-semibold text-lg mb-1">Special Dish</h3>
                                    <p className="text-gray-600 text-sm mb-3">
                                        Delicious taste with premium ingredients.
                                    </p>
                                    <button
                                        onClick={() => navigate("/foods")}
                                        className="text-red-600 font-semibold hover:underline"
                                    >
                                        Order Now →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="py-20 bg-gradient-to-r from-red-600 to-orange-500 text-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Taste Something Amazing?
                </h2>
                <p className="mb-8 text-lg opacity-90">
                    Order now and enjoy exclusive offers on your favorite meals.
                </p>
                <button
                    onClick={() => navigate("/foods")}
                    className="bg-white text-red-600 px-8 py-3 rounded-xl font-bold shadow hover:bg-gray-100 transition"
                >
                    Order Now 🍔
                </button>
            </section>

        </div>
    );
}

export default Home;
