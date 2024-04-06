import React, { useState } from 'react';

const CustomSelect = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleSelect = (option) => {
        setSelectedOption(option);
        onSelect(option); // Callback to pass selected option
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <div className="cursor-pointer border rounded p-2" onClick={() => setIsOpen(!isOpen)}>
                <ActivityIcon activity={selectedOption} />
                <span>{selectedOption}</span>
            </div>
            {isOpen && (
                <div className="absolute border rounded mt-1">
                    {options.map((option, index) => (
                        <div key={index} className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
                             onClick={() => handleSelect(option)}>
                            <ActivityIcon activity={option} />
                            <span className="ml-2">{option}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;