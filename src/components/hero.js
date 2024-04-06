import React from 'react';
import Card from './card';

function Hero() {
    return (
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/hero.webp)' }}>
            <div className="flex items-center justify-center h-full w-full bg-opacity-50 bg-black">
                <div className="text-white p-5 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Satisfaction Guaranteed</h1>
                    <p className="text-xl sm:text-2xl">
                        Explore innovative solutions and transform your digital experience with our cutting-edge technology.
                    </p>
                    <button className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-full mt-8 transition duration-300">Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
