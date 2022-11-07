import React, { useState } from 'react';
import NavTabs from './NavTabs'
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Work from './Work';

export default function NavContainer() {
    const [selectedNav, setSelectedNav] = useState('home');
    function renderEl() {
        if (selectedNav === 'home') {
            return <Home />
        }
        if (selectedNav === 'about') {
            return <About />
        }
        if (selectedNav === 'proj') {
            return <Work />
        }
        if (selectedNav === 'contact') {
            return <Contact />
        }
    };
    const setHomeDisplay = (navEl) => setSelectedNav(navEl);
    return (
        <div>
            <NavTabs selectedNav={selectedNav} setHomeDisplay={setHomeDisplay}/>
            {renderEl()}
        </div>
    )
};