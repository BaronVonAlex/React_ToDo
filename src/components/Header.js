import React from 'react';
import '../styles/Header.css';
import { FiPlus, FiMoon, FiSun } from 'react-icons/fi';

const Header = ({ searchQuery, setSearchQuery, openModal, darkMode, toggleDarkMode }) => {
    return (
        <header className="header">
            <input
                type="text"
                className="search-bar"
                placeholder="Search todos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="theme-toggle" onClick={toggleDarkMode}>
                {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button className="add-button" onClick={() => openModal()}>
                <FiPlus size={20} />
                Add Todo
            </button>
        </header>
    );
};

export default Header;