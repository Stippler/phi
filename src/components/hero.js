import React from 'react';

function Hero() {
return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/hero.webp)' }}>
        <div className="flex items-center justify-center h-full w-full bg-opacity-50 bg-black">
            <div className="text-white p-5 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Satisfaction guranteed ;D</h1>
                <p className="text-xl sm:text-2xl">
                    Explore innovative solutions and transform your digital experience with our cutting-edge technology.
                </p>
                {/* Add more content or buttons as needed */}
            </div>
        </div>
    </div>
);
}

export default Hero;
