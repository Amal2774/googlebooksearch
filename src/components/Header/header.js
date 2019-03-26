import React from 'react';
import './header.css'

const Header = () => {
    return (
        <header className='navbar navbar-expand-lg navbar-collapse sticky-top'>
            <h5>Google Book Search</h5>
            <ul className='nav-item'>
                <li className='links'>
                    <div>Search</div>
                </li>
                <li className='links'>
                    <div>
                        Saved
                    </div>
                </li>
            </ul>
        </header>
    )
}

export default Header;