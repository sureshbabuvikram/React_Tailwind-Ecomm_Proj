import React from 'react';

const Register = ({openLogin}) => {
    return (
        <div>
            <h2 className='text-2xl font-bold mb-4'>Register</h2>
            <form>
            <div className='mb-4'>
                    <label htmlFor="name" className='block text-gray-700'>Email</label>
                    <input type="text" id="name" name="username" placeholder='Enter Your FullName' className='w-full px-3 py-2 border' required />
                </div>
                <div className='mb-4'>
                    <label htmlFor="email" className='block text-gray-700'>Email</label>
                    <input type="email" id="email" name="email" placeholder='Enter Your Mail Id' className='w-full px-3 py-2 border' required />
                </div>
                <div className='mb-4'>
                    <label htmlFor="password" className='block text-gray-700'>Password:</label>
                    <input type="password" id="password" name="password" placeholder='Enter Your Password' className='w-full px-3 py-2 border' required />
                </div>
                <div className='mb-4'>
                    <button type="submit" className='w-full bg-red-600 text-white py-2'>Register</button>
                   
                </div>
            </form>
            <div className='text-center'>
                <span className='text-gray-600'>Already Have an Account ?</span>
                <button className='text-red-700' onClick={openLogin}>Login</button>
            </div>
        </div>
    );
};

export default Register;