import React, { useState } from 'react';
import StyledButton from './button';
import { backendUrl } from '../constant';
import useTaskStore from '@/state/tasks';


const Chat = () => {
    const [text, setText] = useState('');
    const sendMessage = useTaskStore((state) => state.sendMessage);
    const loading = useTaskStore((state) => state.loading);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleSend = () => {
        sendMessage(text);
        setText('');
    };

    return (
        <div className="flex flex-col items-center w-full h-96 lg:h-128 gap-2">
            <div className="w-full h-4/5 bg-gray-200 border border-gray-300 rounded-lg overflow-auto">
                {/* Content of the first div */}
            </div>
            <div className="w-full h-1/5 flex items-center gap-4">
                <textarea
                    className="flex-grow p-2 border border-gray-300 resize-none overflow-auto"
                    value={text}
                    onChange={handleTextChange}
                    placeholder="Enter your text here..."
                ></textarea>
                <StyledButton onClick={handleSend} disabeled={loading}>
                    Send
                </StyledButton>
            </div>
        </div>
    );
};

export default Chat;
