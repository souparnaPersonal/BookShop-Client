import React from "react";

const LoadingOverlay = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold text-gray-700">Hold on...</h2>
        <p className="text-gray-600 mt-2">
          Redirecting to checkout. Don't press anything!
        </p>
        <div className="mt-4">
          <svg
            className="animate-spin h-8 w-8 text-blue-500 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 018 8h4l-3 3 3 3h-4a8 8 0 01-8 8v-4l-3 3 3 3v-4a8 8 0 01-8-8H1l3-3-3-3h4z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
