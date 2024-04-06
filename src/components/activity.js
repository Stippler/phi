import React from 'react';

function ActivityIcon({ activity}) {
    // Construct the image path based on the activity name
    const imagePath = `/icons/${activity}.png`;

    return (
        <img src={imagePath} alt={activity} className="h-14 w-14" /> // Tailwind classes for fixed size
    );
}

export default ActivityIcon;
