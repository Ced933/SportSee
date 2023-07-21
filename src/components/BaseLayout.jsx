import React from 'react';
import Navigation from './Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    );
};

export default BaseLayout;