import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // You can clear cart or perform any necessary cleanup here
    console.log("Payment successful!");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-green-600">
          Payment Successful! 🎉
        </h1>
        <p className="mt-2 text-gray-700">Thank you for your purchase.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Success;
