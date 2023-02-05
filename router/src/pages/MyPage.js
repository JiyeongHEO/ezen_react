import React from 'react';
import { Navigate } from 'react-router-dom';

/* 23-02-05 */
const MyPage = () => {
    const isloggedin = false;
    if(!isloggedin){ return <Navigate to='/login' replace={true}/> }

    return (
        <div>
           This is My Page... 
        </div>
    );
};

export default MyPage;