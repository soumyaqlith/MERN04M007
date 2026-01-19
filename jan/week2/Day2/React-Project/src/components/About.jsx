import React from "react";

function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">

            {/* HERO SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-24 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                    About{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                        Food Bazar
                    </span>
                </h1>

                <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                    Food Bazar is your one-stop destination to explore delicious foods,
                    discover new recipes, and enjoy a delightful culinary experience from
                    around the world.
                </p>
            </section>

            {/* INFO SECTION */}
            <section className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-10">

                <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-1 transition">
                    <div className="text-4xl mb-4">🍔</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                        Fresh & Quality Food
                    </h3>
                    <p className="text-gray-600">
                        We focus on bringing you high-quality food categories and recipes
                        made with love and care.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-1 transition">
                    <div className="text-4xl mb-4">🌍</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                        Global Recipes
                    </h3>
                    <p className="text-gray-600">
                        Explore cuisines from all over the world and experience diverse
                        flavors in one place.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-1 transition">
                    <div className="text-4xl mb-4">⚡</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                        Fast & Easy
                    </h3>
                    <p className="text-gray-600">
                        Simple browsing, quick search, and an enjoyable user experience on
                        all devices.
                    </p>
                </div>

            </section>

            {/* MISSION SECTION */}
            <section className="bg-white/70 backdrop-blur-md py-20">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Our Mission
                    </h2>

                    <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                        Our mission is to make food discovery simple, enjoyable, and
                        inspiring. Whether you are searching for comfort food or trying a
                        new cuisine, Food Bazar is here to guide your journey.
                    </p>
                </div>
            </section>

            {/* FOOTER CTA */}
            <section className="max-w-7xl mx-auto px-6 py-20 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Ready to Explore Delicious Foods?
                </h2>

                <a
                    href="/foods"
                    className="inline-block bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition transform hover:scale-105"
                >
                    Explore Foods 🍽️
                </a>
            </section>
        </div>
    );
}

export default About;
