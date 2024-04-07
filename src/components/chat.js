import React, { useEffect, useRef, useState } from 'react';
import StyledButton from './button';
import { backendUrl } from '../constant';
import useTaskStore from '@/state/tasks';


const Chat = () => {
    const [text, setText] = useState('');
    const sendMessage = useTaskStore((state) => state.sendMessage);
    const messages = useTaskStore((state) => state.messages);
    const loading = useTaskStore((state) => state.loading);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleSend = () => {
        sendMessage(text);
        setText('');
    };

    const chatContainerRef = useRef(null);

    useEffect(() => {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }, [messages]);

    return (
        <div className="flex flex-grow flex-col w-full h-full gap-2">
            <h2 className="text-2xl font-bold mb-4">Chat</h2>
            <div className="w-full h-4/5 bg-white border border-gray-300 rounded-lg overflow-auto" ref={chatContainerRef}>
                {messages.map((message, index) => (
                    <div key={index} 
                         className={`p-2 border-b border-gray-300 ${index%2 === 1 && 'bg-gray-100'}`}>
                        {index%2 === 0 && <strong>You</strong>}
                        {index%2 === 1 && <strong>Bot</strong>}
                        <br/>
                        {message}
                    </div>
                ))}
            </div>
            <div className="w-full h-1/5 flex items-center gap-4">
                <textarea
                    className="flex-grow p-2 border border-gray-300 resize-none overflow-auto"
                    value={text}
                    onChange={handleTextChange}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            handleSend();
                        }
                    }}
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
