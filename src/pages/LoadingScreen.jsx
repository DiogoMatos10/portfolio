import React from 'react';
import "/public/styles/LoadingScreen.css";

const LoadingScreen = () => (
    <div className="loading-screen">
        <div className="spinner">
            <img src="/public/images/dm@2.png" alt="Loading" />
        </div>
    </div>
);

export default LoadingScreen;