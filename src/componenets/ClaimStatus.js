import React, { useState } from 'react';

const ClaimStatus = () => {
  const [status, setStatus] = useState(null);

  const checkStatus = () => {
    // Here you would typically make an API call to check the claim status
    // For now, we'll just simulate a random status
    const statuses = ['approved', 'pending'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    setStatus(randomStatus);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Claim Status</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">Check the status of your claim here.</p>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <button
                  onClick={checkStatus}
                  className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                >
                  Check Claim Status
                </button>
                {status && (
                  <div className="mt-4">
                    <h3 className="font-bold">Claim Status: {status}</h3>
                    {status === 'approved' ? (
                      <p>Your claim has been approved. Your insurance company will get in touch with you shortly.</p>
                    ) : (
                      <p>Please wait. Your insurance company will contact you shortly through mail or email and provide you with the details.</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimStatus;