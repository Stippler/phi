import React from 'react';


const Card = ({ children }) => {
    return (
        <div className="inline-block bg-white p-2 sm:p-4 sm:rounded-lg sm:shadow-md">
            {children}
        </div>
    );
};

export default Card;
