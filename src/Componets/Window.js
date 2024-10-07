import React, { useState, useEffect } from 'react';

function Window() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };


        window.addEventListener('resize', handleResize);


        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="window-width-tracker" style={{ textAlign: 'center', margin: '20px' }}>
            <h2>Window Width Tracker</h2>
            <p>Current window width: {windowWidth}px</p>
        </div>
    );
}

export default Window;
