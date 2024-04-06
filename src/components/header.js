import React from 'react';

const Header = () => {
    return (
        <header className="bg-black text-white shadow sticky top-0">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <a href="/" className="text-white text-lg ml-2 font-bold">
                        <img src="/icon.webp" alt="COOL APP" className="h-[50px]"/>
                    </a>
                </div>
                {/* Add more navigation elements here */}
            </div>
        </header>
    );
};

export default Header;
