import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Shield className="mx-auto h-16 w-auto text-white" />
          <h2 className="mt-6 text-center text-4xl font-extrabold text-white">
            Accident Claims
          </h2>
          <p className="mt-2 text-center text-sm text-gray-200">
            Your trusted partner in accident claim management
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow">
            <Link
              to="/login"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
            >
              Log in
            </Link>
          </div>
          <div className="rounded-md shadow">
            <Link
              to="/register"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;