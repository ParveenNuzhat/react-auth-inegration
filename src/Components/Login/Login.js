import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import './Login.css'

const Login = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div className='text-center mt-3'>
            <h4>Log in</h4>
            <button onClick={signInWithGoogle} type="submit">Google Sign in</button>
            <br />
            <Link to='/register'>New User?</Link>
        </div>
    );
};

export default Login;