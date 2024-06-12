
import React from 'react';
import logo from './assets/logo.png';
const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-sm">
        <div className="mb-4 text-center">
        <img src={logo} alt="ROF Logo" className="mx-auto mb-4" />
          <h1 className="text-xl font-bold">Welcome to ROF Team Portal</h1>
          <p className="text-gray-600">Use your work email to log in your team workspace</p>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email / Employee ID</label>
            <input type="email" placeholder="Enter your email address" className="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" placeholder="Enter your password" className="w-full p-2 border border-gray-300 rounded mt-1" />
            <a href="#" className="text-sm text-gray-600 float-right mt-1">Forgot your password?</a>
          </div>
          <button type="submit" style={{ backgroundColor: 'rgba(99, 46, 4, 1)' }} className="w-full text-white p-2 rounded">Log in</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
