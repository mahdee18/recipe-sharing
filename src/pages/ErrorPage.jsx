import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-red-500">404</h1>
      <h2 className="mt-4 text-3xl font-semibold text-gray-800">Page Not Found</h2>
      <p className="mt-2 text-gray-600">Sorry, the page you are looking for does not exist.</p>
      <button
        onClick={() => window.history.back()}
        className="mt-6 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Go Back
      </button>
    </div>
  );
}

export default ErrorPage;
