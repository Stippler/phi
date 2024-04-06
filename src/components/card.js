import React from 'react';


const Card = ({ children }) => {
    return (
        <div className="inline-block bg-white rounded-lg shadow-md p-4">
            {children}
        </div>
    );
};

export default Card;
