import * as React from 'react';
import './Header.css';

const Header = ({ children }) => {
    return (          
        <div className='Header'>
            <span className='Header__Logo'>
                TypeScrash
            </span>
            {children}
        </div>
    );
};

export default Header;