import React from 'react';

function Hero({ nextSectionRef }) {
    const handleClick = () => {
        nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/hero.webp)' }}>
            <div className="flex items-center justify-center h-full w-full bg-opacity-50 bg-black">
                <div className="text-white p-5 text-center mx-10">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">W(h)eather or Not</h1>
                    <p className="text-xl sm:text-2xl">
                        Effortlessly align your schedule with the weather,<br/>
                        ensuring you're always prepared for what's ahead,<br/>
                        come rain or shine.
                    </p>
                    <button className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-full mt-8 transition duration-300" 
                            onClick={handleClick}>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;

