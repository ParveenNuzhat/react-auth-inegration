import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <div className='header text-center mt-3'>
            <Link to='/home'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Log in</Link>
            <span>{user.displayName} </span>
            {user?.email && <button onClick={logOut} type="submit">Log out</button>}
        </div>
    );
};

export default Header;