import React, { useState } from 'react';
import StyledButton from './button';

const TextEditor = () => {
    const [text, setText] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleSend = () => {
        // Call your function with the text as a parameter
        console.log(text);
    };

    return (
        <div className="flex flex-col items-center h-full gap-2">
            <textarea
                className="w-full h-full p-2 border border-gray-300 resize-none"
                value={text}
                onChange={handleTextChange}
                placeholder="Enter your text here..."
            ></textarea>

            <StyledButton
                onClick={handleSend}
            >
                Send
            </StyledButton>
        </div>
    );
};

export default TextEditor;