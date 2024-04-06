import React from 'react';

const FileButton = ({ text }) => {
    return (
        <div className="flex items-center justify-center mt-6">
            <label htmlFor="file-upload" className="px-4 py-2 bg-black text-white rounded-md cursor-pointer">
                {text}
            </label>
            <input id="file-upload" type="file" className="hidden" />
        </div>
    );
};

export default FileButton;