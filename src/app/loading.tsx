import React from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
const LoadingPage = () => {
    return (
        <div>
            <ClimbingBoxLoader
                color={"#ff014f"} className="flex justify-center min-h-screen items-center mx-auto w-full clee " size={20} />
        </div>
    );
};

export default LoadingPage;