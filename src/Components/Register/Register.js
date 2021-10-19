import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='container text-center mt-3'>
            <h4>Please Register</h4>
            <form action="">
                <div className='m-2'>
                    <label htmlFor="email"></label>
                    <input type="email" name="" id="" />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" name="" id="" />
                </div>
                <button type="submit" className='m-2'>Register</button>
                <br />
                <Link to='/login'>Already Registered?</Link>
            </form>
        </div>
    );
};

export default Register;